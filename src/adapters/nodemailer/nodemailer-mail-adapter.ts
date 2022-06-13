import nodemailer from "nodemailer";
import { MailAdapter, SendMailData } from "../mail-adapter";


const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "3b066fc8c8a2c2",
    pass: "4fc3f206356106"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail(data: SendMailData) {
    const { subject, body } = data;

    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Jefferson Shibuya <jefferson.shibuya@gmail.com>',
      subject,
      html: body
    })
  }
}