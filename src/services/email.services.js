import { transporter } from "..";

async function sendMail(subject, text, body, receiver) {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: "<maddison53@ethereal.email>",
    to: receiver,
    subject: subject,
    text: text,
    html: body,
  });

  console.log("Message sent: %s", info.messageId);
}

export { sendMail };
