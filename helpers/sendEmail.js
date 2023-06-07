const nodemailer = require("nodemailer");


const { EMAIL_PASSWORD } = process.env;

const nodemailerConfig = {
  service: 'ukr',
  auth: {
    user: 'temma13@ukr.net',
    pass: EMAIL_PASSWORD
  }
};

const transport = nodemailer.createTransport(nodemailerConfig);


const sendEmail = async (data) => {

  await transport.sendMail({ ...data, from: "temma13@ukr.net" })

  return true
}

module.exports = sendEmail;