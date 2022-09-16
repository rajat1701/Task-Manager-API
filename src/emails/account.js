const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "rajatmalik1701@gmail.com",
    subject: "Welcome OnBoard",
    text: `Thank you for creating account for accessing Task Manager API, ${name}. Let us know how you get along with the app`,
  });
};
const sendCancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "rajatmalik1701@gmail.com",
    subject: "Sorry to see you go",
    text: `GoodBye, ${name}. We hope to see you back soon`,
  });
};
module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail,
};
