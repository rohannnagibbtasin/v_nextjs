import NextAuth from "next-auth"
import Providers from "next-auth/providers"

export default NextAuth({
    session: {
        jwt: true
    },
    providers: [
        Providers.Credentials({
            name: 'Credentials',
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: {  label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                const res = await fetch("/api/login", {
                    method: 'POST',
                    body: JSON.stringify(credentials),
                    headers: { "Content-Type": "application/json" }
                  })
                  const user = await res.json();
                  if (res.ok && user) {
                    return user
                  }
                  return null
            }
        }),
  ],
  database: process.env.DATABASE_URL,
})