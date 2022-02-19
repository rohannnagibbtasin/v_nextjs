import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

const options = {
    providers:[
        Providers.Email({
            server: {
                host: process.env.EMAIL_HOST,
                port: process.env.EMAIL_PORT,
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASSWORD
                },
                form: process.env.EMAIL_FROM,

            }
        })
    ],
    database: {
        type: 'sqlite',
        database: ":memory:",
        synchronize: true
    }
}

const a = (req,res)=> NextAuth(req,res,options);
export default a;