import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";

export async function sendMail(data: any) {
  const mailerSend = new MailerSend({
    apiKey: process.env.API_KEY as string,
  });

  const sentFrom = new Sender(data.from, data.name);

  const recipients = [new Recipient("benjahenley@hotmail.com", "Benja Henley")];
}
