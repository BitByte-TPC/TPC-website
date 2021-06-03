import nodemailer from "nodemailer";

// async..await is not allowed in global scope, must use a wrapper
export const mailer = async (email: string): Promise<void> => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      type: "OAuth2",
      user: process.env.GMAIL_ID,
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      refreshToken: process.env.GMAIL_REFRESH_TOKEN,
      accessToken: process.env.GMAIL_ACCESS_TOKEN,
      expires: 3000,
    },
  });

  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: process.env.GMAIL_ID, // sender address
    to: email, // list of receivers
    subject: "Reminder for Event", // Subject line
    text: "Hello world", // plain text body
    html: "<h1>Hello world</h1>", // html body
  });
  console.log("Email sent!");
  console.log(info);
};
