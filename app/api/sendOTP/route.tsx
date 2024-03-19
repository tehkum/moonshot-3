import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { email } = req.body;
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USERNAME,
      to: email,
      subject: "Your OTP",
      text: `Your OTP is ${otp}`,
    });


    res.status(200).json({ message: "OTP sent" });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
