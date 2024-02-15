import { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import "dotenv/config"
import NextAuth from "next-auth/next";


export const authOptions: AuthOptions = {
    pages: {
        signIn: "/auth/signin"
    },
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!
        })
    ]
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }