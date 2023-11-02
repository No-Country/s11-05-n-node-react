import User from "../db/userModel.js";
import becrypt from "bcrypt";
import { createTokenJWT } from "../util/createTokenJwt.js";
import dotenv from "dotenv";
dotenv.config();
import { uuidValidation } from "../util/uuidValidation.js";
import userModel from "../db/userModel.js";

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
          .select("-passwordHash")
          .populate({ path: "category friends" })
          .exec()
      : await User.findOne({ nickName }).select("-passwordHash");

    if (!findUser) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    const passwordMatch = becrypt.compareSync(password, findUser.passwordhash);

    if (!passwordMatch) {
      return res.status(401).json({ message: "Contraseña incorrecta" });
    }

    const tokenJWT = createTokenJWT("1h", { _id: findUser._id });

    res.status(200).send({
      message: "Inicio de Sesion Exitoso",
      tokenJWT,
      userData: findUser,
    });
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

const editUser = async (req, res) => {
  const userId = req.userId;

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).send({ mensaje: "Usuario no encontrado" });
    }

    const userEdited = req.body; // Obtener todas las propiedades del cuerpo de la solicitud

    console.log(userEdited);

    const userPatch = await User.findOneAndUpdate({ _id: userId }, userEdited, {
      new: true,
    }).select("-passwordHash").populate({ path: "category friends" }).exec();

    res
      .status(200)
      .send({ mensaje: "Usuario modificado con éxito", userPatch });
  } catch (error) {
    res.status(500).send({ mensaje: "Error al actualizar el usuario" });
  }
};

const addFriend = async (req, res) => {
  const user = req.userId;
  const friend = req.params.id;
  try {
    const friendAdd = await User.findByIdAndUpdate(
      { _id: user },
      { $push: { friends: friend } },
      { new: true }
    ).populate({
      path: "friends",
    });
    return res
      .status(200)
      .send({ message: "Amigo Agregado", friends: friendAdd.friends });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "no se pudo agregar al amigo" });
  }
};

const deleteFriend = async (req, res) => {
  const user = req.userId;
  const friend = req.params.id;
  try {
    const friendDelete = await User.findByIdAndUpdate(
      { _id: user },
      { $pull: { friends: friend } },
      { new: true }
    ).populate({
      path: "friends",
    });
    return res
      .status(200)
      .send({ message: "Amigo eliminado", friends: friendDelete.friends });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "no se pudo eliminar el amigo" });
  }
};

export {
  createUser,
  auth,
  getUsers,
  getUser,
  editUser,
  deleteUser,
  addFriend,
  deleteFriend,
};
