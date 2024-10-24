import { app } from "./app.js";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import { mailer } from "./config/nodemailer.cofig.js";
import { emailService } from "./services/email.services.js";

dotenv.config({
  path: "./env",
});

const PORT = process.env.PORT || 5000;

let transporter;

const start = async () => {
  try {
    await connectDB();
    emailService.verifyConnection();
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
};

start();

export { transporter };
