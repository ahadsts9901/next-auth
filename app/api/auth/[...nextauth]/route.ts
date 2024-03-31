import NextAuth from 'next-auth'
import FacebookProvider from 'next-auth/providers/facebook'
import GoogleProvider from 'next-auth/providers/google'
import GithubProvider from 'next-auth/providers/github'

const handler = NextAuth({
    providers: [
        FacebookProvider({
          clientId: process.env.FACEBOOK_ID!,
          clientSecret: process.env.FACEBOOK_SECRET!,
        }),
        GoogleProvider({
          clientId: process.env.GOOGLE_ID!,
          clientSecret: process.env.GOOGLE_SECRET!,
        }),
        GithubProvider({
            clientId: process.env.GITHUB_ID!,
            clientSecret: process.env.GITHUB_SECRET!,
        })
    ]
})

export { handler as GET, handler as POST }