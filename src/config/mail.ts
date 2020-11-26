interface IMailConfig {
    driver: 'ethereal' | 'gmail';

    defaults: {
        from: {
            email: string;
            name: string;
        };
    };
}

export default {
    driver: process.env.MAIL_DRIVER || `ethereal`,

    defaults: {
        from: {
            email: 'ph.guitarplayer@gmail.com',
            name: 'GoBarber',
        },
    },
} as IMailConfig;
