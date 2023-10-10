import User from "../db/userModels.js";
import becryt from "bcrypt";

const createUser = async (req, res) => {
  const { nickName, email, password } = req.body;
  try {
    const valid = User.find({ email });
    if (valid.nickName == nickName || valid.email == email) {
      return res
        .status(409)
        .send({ message: "Email o nickname no pueden estar repetido" });
    }
    let passwordhash = becryt.hashSync(password, 10);

    const user = new User({ nickName, email, passwordhash });

    let userCreate = await user.save();

    res.status(200).send({ message: "Usuario creado" });
  } catch (error) {
    console.log(error.message);
    res.status(409).send({ message: "El usuario no pudo ser registrado" });
  }
};

export { createUser };
