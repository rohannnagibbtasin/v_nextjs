import axios from "axios";
import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  session: {
    jwt: true,
  },
  providers: [
    Providers.Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        try {
          const response = await axios.post(
            "http://localhost:3000/api/login",
            credentials
          );
          const user = response.data;
          if (user) {
            return user;
          }
          return null;
        } catch (err) {
          console.log(err);
        }
      },
    }),
  ],
  database: process.env.DATABASE_URL,
});
