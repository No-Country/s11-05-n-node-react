import User from "../db/userModels.js";
import becrypt from "bcrypt";
import { createTokenJWT } from "../util/createTokenJwt.js";
import jwt from "jsonwebtoken";
import { config } from "../config/config.js";
import dotenv from "dotenv";
dotenv.config();
import { uuidValidation } from "../util/uuidValidation.js";

const createUser = async (req, res) => {
  const { nickName, email, password } = req.body;
  try {
    const valid = await User.find({ email });
    const existingUser = await User.findOne({ $or: [{ email }, { nickName }] });

    if (existingUser) {
      return res
        .status(409)
        .send({ message: "email o nick ya existe en la base de datos" });
    }

    let passwordhash = becrypt.hashSync(password, 10);

    const newUser = new User({ nickName, email, passwordhash });

    let userCreate = await newUser.save();

    res.status(200).send({ message: "Usuario creado" });
  } catch (error) {
    console.log(error.message);
    res.status(409).send({ message: "El usuario no pudo ser registrado" });
  }
};
const getUsers = async (req, res) => {
  const { email } = req.query;
  let data;
  try {
    if (email) {
      data = await User.findOne({ email });
      data
        ? res.status(200).json(data)
        : res.status(404).json({ message: "email no encontrado" });
    } else data = await User.find();
    res.status(200).json(data);
  } catch (error) {
    console.log(error.message);
    res.status(408).send({ message: "Error en la consulta" });
  }
};
const getUser = async (req, res) => {
  const { id } = req.params;
  try {
    uuidValidation(id);
    const user = await User.findById(id);
    user
      ? res.status(200).json(user)
      : res.status(404).json({ message: "Usuario no encontrado" });
  } catch (error) {
    res.status(408).send({ message: "Error busqueda por id Usuario" });
  }
};

const auth = async (req, res) => {
  const { nickName, email, password } = req.body;
  try {
    const findUser = email
      ? await User.findOne({ email })
      : await User.findOne({ nickName });

    if (!findUser) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    const passwordMatch = becrypt.compareSync(password, findUser.passwordhash);

    if (!passwordMatch) {
      return res.status(401).json({ message: "Contraseña incorrecta" });
    }
    
    delete findUser.passwordhash

    const tokenJWT = createTokenJWT('1h',{_id:findUser._id})
    
    res.status(200).send({ message: "Inicio de Sesion Exitoso",tokenJWT,userData:findUser });
  } catch (error) {
    res.status(409).send({ message: "El usuario no pudo iniciar Sesion" });
  }
};

const deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    await User.findByIdAndDelete(id);

    res.status(200).json({ message: "User successfully deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error when deleting user" });
  }
};

const edithUser = async (req, res) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "Token no proporcionado" });
  }
  const decoded = jwt.verify(token, config[process.env.NODE_ENV].jwt_secret);

  const userId = decoded.findUser._id;
  const user = await User.findById(userId);

  if (!user) {
    return res.status(404).send({ mensaje: "Usuario no encontrado" });
  }

  const userEdited = Object.keys(req.body).reduce((acc, key) => {
    if (key in user) {
      acc[key] = req.body[key];
    }
    return acc;
  }, {});

  try {
    const userPatch = await User.findOneAndUpdate({ _id: userId }, userEdited);

    res
      .status(200)
      .send({ mensaje: "Usuario modificado con éxito", userEdited });
  } catch (error) {
    res.status(500).send({ mensaje: "Error al actualizar el usuario" });
  }
};

export { createUser, auth, getUsers, getUser, edithUser, deleteUser };
