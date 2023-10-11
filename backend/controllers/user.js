import User from "../db/userModels.js";
import becrypt from "bcrypt";

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
const getUsers = async (req, res) => {
  const {email} =req.query;
  let data;
  try {
      if(email) {
        data = await User.findOne({email});
        data? res.status(200).json(data) : res.status(404).json({message:"email no encontrado"});
      }
      else  data = await User.find();
      res.status(200).json(data);
  } catch (error) {
    console.log(error.message);
    res.status(408).send({ message: "Error en la consulta" });   
  }
}
const getUser = async (req, res) => {
  const {id} =req.params;
  try {
    const user = await User.findById(id);
  user?res.status(200).json(user):res.status(404).json({ message: "Usuario no encontrado" });
  } catch (error) {
    console.log(error.message);
    res.status(408).send({ message: "Error busqueda por id Usuario" });   
  }  
}

export { createUser, getUsers, getUser };
