const nodemailer = require('nodemailer');

class Email {
  constructor(receiverEmail) {
    this.receiverEmail = receiverEmail;
    this.transporter = null;
  }

  createTransport() {
    this.transporter = nodemailer.createTransport({
      port: process.env.EMAIL_PORT,
      host: process.env.EMAIL_HOST,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });
  }

  async sendResetTokenEmail(resetToken) {
    this.createTransport();
    await this.transporter.sendMail({
      from: 'bilalkola@gmail.com',
      to: this.receiverEmail,
      subject: `Password Reset Token`,
      text: `Your Token for resetting the password is ${resetToken}.please use this token to send a patch request to /resetPassword`
    });
  }
}
module.exports = Email;
