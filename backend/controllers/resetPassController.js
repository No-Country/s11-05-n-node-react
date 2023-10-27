import User from "../db/userModel.js";
import wordRandom from "../util/wordRandom.js";
import sendEmail from "../util/sendEmail.js";
import {templateResetPassword} from "../config/emailTemplate.js"
import becrypt from "bcrypt";

const updatePassword = async (req, res)=>{
    try{        
        const emailUser = req.body.email;
        const usuario = await User.findOne({email: emailUser});
        if(usuario){
            const newPass = wordRandom(12);
            let passwordhash = becrypt.hashSync(newPass, 10);
            usuario.passwordhash = passwordhash;
            await usuario.save();
            await sendEmail(res, emailUser, "Reset Password", templateResetPassword(usuario.nickName, newPass))
            return res.status(200).json({message: 'Contrasena actualizada correctamente'});
        }
        return res.status(404).json({message: "Correo no registrado"})
    }catch(error){
        res.status(500).json({message:'Error en el controllador al reseteo de la contrasena'});
        console.log(error)
    }
}

export default updatePassword;
