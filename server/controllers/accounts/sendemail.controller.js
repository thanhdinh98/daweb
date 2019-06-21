const nodemailer = require('nodemailer');

async function sendEmail(to, subject, text, html) {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER || 'codegym.ltweb2@gmail.com',
      pass: process.env.EMAIL_PASSWORD || 'codegym123456789',
    },
  });

  const info = await transporter.sendMail({
    from: 'LTWeb2 👻',
    to,
    subject,
    text,
    html,
  });

  return info;
}

module.exports = sendEmail;
