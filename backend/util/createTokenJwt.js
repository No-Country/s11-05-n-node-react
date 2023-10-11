import jwt from "jsonwebtoken"
import dotenv from "dotenv";
dotenv.config();

//verify the token isn't corrupt or expired and continue with the request otherwise throw an error
const createTokenJWT = (timeExpired,data=null) => {
    try {
        return jwt.sign(data,process.env.JWT_SECRET,{expiresIn:timeExpired})
        
    } catch (error) {
        throw new Error('Error createTokenJWT')
    }
}

export {
    createTokenJWT
}