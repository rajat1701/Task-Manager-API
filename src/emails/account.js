const nodemailer = require("nodemailer");

function transporter() {
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "rajatmalik1701@gmail.com",
      pass: process.env.MAIL_APP_PASSWORD,
    },
  });
}

function sendWelcomeEmail(email, name) {
  const transporterObject = transporter();
  transporterObject.sendMail({
    from: '"TASK MANAGER API" <rajatmalik1701@gmail.com>',
    to: email,
    subject: "Thanks for joining!",
    text: `Welcome to our service, ${name}!`,
    html: `<b>Welcome to our service, ${name}!</b>`,
  });
}

function sendCancelationEmail(email, name) {
  const transporterObject = transporter();
  transporterObject.sendMail({
    from: '"TASK MANAGER API" <rajatmalik1701@gmail.com>',
    to: email,
    subject: "We're sorry to see you leave",
    text: `We hope to see you back again someday, ${name}!`,
    html: `<b>We hope to see you back again someday, ${name}!</b>`,
  });
}

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail,
};
