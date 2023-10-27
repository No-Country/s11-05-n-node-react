import { config } from "../config/config.js";
import { transporter } from "../config/emailTraport.js";

async function sendEmail(res, toEmail, emailSubject, emailBody){

    try{
        const mailOptions = {
            from: config[process.env.NODE_ENV].email, 
            to: toEmail,
            subject: emailSubject,
            html: emailBody
        };
        
        await transporter.sendMail(mailOptions);
        return 
    }catch(error){
            return res.status(400).json({message: "Error en el envio del correo"});
        }
    }

export default sendEmail;

