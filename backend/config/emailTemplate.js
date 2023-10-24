
const templateResetPassword = (fullname, resetPassword) => {
    `<h1>Hello ${fullname},</h1>
    <p>We received a request to reset your password. If you did not make this request, you can ignore this email.</p>
    <p>The new password is: ${resetPassword}</p>

    <p>Best regards,</p>
    <p>Lets Play</p>`;
}

export {templateResetPassword};