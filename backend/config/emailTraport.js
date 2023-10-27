import nodemailer from 'nodemailer'
import { config } from "../config/config.js";


export const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: config[process.env.NODE_ENV].email, 
        pass: config[process.env.NODE_ENV].pass_email 
    }
});


