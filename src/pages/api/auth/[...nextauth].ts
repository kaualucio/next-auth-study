import NextAuth, { Awaitable, NextAuthOptions, RequestInternal, User } from "next-auth"
import Credentials from "next-auth/providers/credentials"

export const  authOption: NextAuthOptions = {
  providers: [
    Credentials({
      name: 'auth-with-credentials',
      credentials: {
        email: {
          label: 'E-mail',
          type: 'email',
          placeholder: 'E-mail',
          required: true
        },
        password: {
          label: 'Senha',
          type: 'password',
          required: true,
          placeholder: 'Sua senha'
        }
      },
      async authorize(credentials, req) {
        
  
        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          return user
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null
        }
      }
    })
  ],

}

export default NextAuth(authOption)