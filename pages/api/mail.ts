import type { NextApiRequest, NextApiResponse } from "next";
import sgMail from "@sendgrid/mail";
import "dotenv/config";

type Data = {
  status: string;
};

export default async function (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

  const msg = {
    to: "benjahenley@hotmail.com",
    from: req.body.email,
    subject: `message from: ${req.body.name}`,
    text: req.body.message,
  };

  sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent");
      res.status(200).json({ status: "ok" });
    })
    .catch((error) => {
      console.error(error.message);
      res.status(200).json({ status: "error" });
    });
}
