import nodemailer from "nodemailer";

// mail configuration setup
const mailer = async () => {
  const transporter = nodemailer.createTransport({
    host: "gmail",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });
};

export { mailer };
