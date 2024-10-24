import { app } from "./app";
import connectDB from "./config/db";
import dotenv from "dotenv";
import { mailer } from "./config/nodemailer.cofig";

dotenv.config({
  path: "./env",
});

const PORT = process.env.PORT || 5000;

let transporter;

const start = async () => {
  try {
    await connectDB();
    transporter = await mailer();
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
};

start();

export { transporter };
