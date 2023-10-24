import User from "../db/userModels.js";
import wordRandom from "../util/wordRandom.js";
import sendEmail from "../util/sendEmail.js";
import {templateResetPassword} from "../config/emailTemplate.js"

const updatePassword = async (req, res)=>{
    try{        
        const emailUser = req.body;
        const usuario = await User.findOne({email: emailUser});
        //encriptar la nueva contrasenha
        const newPass = wordRandom(12);
        // usuario.passwordhash = newPass;
        // await usuario.save();
        await sendEmail(res, emailUser, "<h1>Password</h1>", templateResetPassword(usuario.nickName, newPass))
        return res.status(200).json({message: 'Contrasena actualizada correctamente'});
    }catch(error){
        res.status(500).json({message:'Error en el controllador al reseteo de la contrasena'});
        console.log(error)
    }
}

export default updatePassword;
