import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

//verify the token isn't corrupt or expired and continue with the request otherwise throw an error
const verifyJWT = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      throw new Error("Not authorization header inside the request");
    }
    const token = authorization.split(" ")[1];
    req.userId = jwt.verify(token, process.env.JWT_SECRET)._id;
    next();
  } catch (error) {
    return res.status(400).json({ error: "JWT", message: error.message }).end();
  }
};

export { verifyJWT };
