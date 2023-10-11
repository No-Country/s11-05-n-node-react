import User from "../db/userModels.js";
import becrypt from "bcrypt";
import {createTokenJWT} from'../util/createTokenJwt.js'

const createUser = async (req, res) => {
  const { nickName, email, password } = req.body;
  try {
    const valid = await User.find({ email });
    const existingUser = await User.findOne({ $or: [{ email }, { nickName }] });

    let passwordhash = becrypt.hashSync(password, 10);

    const newUser = new User({ nickName, email, passwordhash });

    let userCreate = await newUser.save();

    res.status(200).send({ message: "Usuario creado" });
  } catch (error) {
    console.log(error.message);
    res.status(409).send({ message: "El usuario no pudo ser registrado" });
  }
};


const Auth = async (req, res) => {
  const { nickName, email, password } = req.body;
  try {

    const findUser = email 
      ? await User.findOne({ email }) 
      : await User.findOne({ nickName })
    
    if (!findUser) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    const passwordMatch =  becrypt.compareSync(password, findUser.passwordhash);

    if (!passwordMatch) {
      return res.status(401).json({ message: 'Contraseña incorrecta' });
    }
    delete findUser.passwordhash 
    const tokenJWT = createTokenJWT('1h',{findUser})
    
    res.status(200).send({ message: "Inicio de Sesion Exitoso",tokenJWT });
  } catch (error) {
    res.status(409).send({ message: "El usuario no pudo iniciar Sesion" });
  }
};

const deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findByIdAndDelete(id);

   res.status(200).json({ message: "User successfully deleted", user: user });
  } catch (error) {
    res.status(500).json({ message: "Error when deleting user" });
  }
}


export { createUser,Auth, deleteUser};
