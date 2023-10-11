import User from "../db/userModels.js";
import becrypt from "bcrypt";

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

    return res.status(200).send({ message: "Usuario creado" });
  } catch (error) {
    console.log(error.message);
    res.status(409).send({ message: "El usuario no pudo ser registrado" });
  }
};

export { createUser };
