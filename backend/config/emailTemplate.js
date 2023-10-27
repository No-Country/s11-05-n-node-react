
const templateResetPassword = (fullname, resetPassword) => 
    `<h2>Hello ${fullname},</h2>
    <p>We received a request to reset your password. If you did not make this request, you can ignore this email.</p>
    <p>The new password is: ${resetPassword}</p>

    <p>Best regards,</p>
    <p>Lets Play</p>`;


export {templateResetPassword};