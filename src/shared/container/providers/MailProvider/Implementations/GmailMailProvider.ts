import nodemailer from 'nodemailer';
import Transporter from 'nodemailer-smtp-transport';
import { injectable, inject } from 'tsyringe';
import mailConfig from '@config/mail';

import IMailTemplateProvider from '@shared/container/providers/MailTemplateProvider/models/IMailTamplateProvider';
import IMailProvider from '../models/IMailProvider';
// import ISenMailDTO from '../dtos/ISendMailDTO';

@injectable()
export default class GmailMailProvider implements IMailProvider {
    private client: Transporter;

    constructor(
        @inject('MailTemplateProvider')
        private mailTempalteProvider: IMailTemplateProvider,
    ) {
        this.client = nodemailer.createTransport(
            Transporter({
                service: 'gmail',
                host: 'smtp.gmail.com',
                auth: {
                    user: process.env.GMAIL_USER,
                    pass: process.env.GMAIL_PASS,
                },
            }),
        );
    }

    public async sendMail({ to, subject, from, templateData }): Promise<void> {
        const { name, email } = mailConfig.defaults.from;

        await this.client.sendMail({
            from: {
                name: from?.name || name,
                address: from?.email || email,
            },
            to: {
                name: to.name,
                address: to.email,
            },
            subject,
            html: await this.mailTempalteProvider.parse(templateData),
        });
    }
}
