import { container } from 'tsyringe';
import mailConfig from '@config/mail';

import EtherealMailProvider from './Implementations/EtherealMailProvider';
import GmailMailProvider from './Implementations/GmailMailProvider';

import IMailProvider from './models/IMailProvider';

const providers = {
    ethereal: container.resolve(EtherealMailProvider),
    gmail: container.resolve(GmailMailProvider),
};

container.registerInstance<IMailProvider>(
    'MailProvider',
    providers[mailConfig.driver],
);
