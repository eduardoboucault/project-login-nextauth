import type { NextAuthOptions } from "next-auth";
import FacebookProvider from "next-auth/providers/facebook";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectMongoDB } from "@/app/lib/mongodb";
import User from "@/app/models/user";
import UserGoogle from "@/app/models/userGoogle";
import UserGithub from "@/app/models/userGithub";
import bcrypt from "bcryptjs";
import UserFacebook from "@/app/models/userFacebook";

export const options: NextAuthOptions = {
  providers: [
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID as string,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "Username" },
        email: { label: "Email", type: "text", placeholder: "Email" },
        password: { label: "Senha", type: "password" },
      },
      async authorize(credentials) {

        // Aplicar meu banco de dados
        const { email, password } = credentials as {
          email: string;
          password: string;
        }

        try {

          await connectMongoDB();

          const user = await User.findOne({ email });

          if (!user) {
            return null;
          }

          const passwordMatch = await bcrypt.compare(password, user.password);

          if (!passwordMatch) {
            return null
          }

          return user;
        } catch (error) {
          console.log('Error:', error);
        }

      },
    }),
  ],
  callbacks: {
    async signIn({ user, account }): Promise<any> {
      // Se o provedor for o google
      if (account?.provider === 'google') {
        // Então desestruturamos o input que recebemos do google
        const { name, email } = user;
        // E em sequencia tentaremos em um bloco try a criação do usuário
        try {
          // Primeiro conectamos com o banco de dados
          await connectMongoDB();
          // Em seguida verificamos se o usuário já existe
          const userExist = await UserGoogle.findOne({ email });
          // Se não existir, criamos um novo
          if (!userExist) {
            // Indicamos o tipo de dado que será enviado ao banco de dados, qual método, headers e body.
            const res = await fetch(`http://localhost:3000/api/userGoogle`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                name,
                email
              })
            });
            // Se tudo der certo, retornamos o usuário
            if (res.ok) {
              return user;
            }
          }
          // Caso contrário, cairemos no catch
        } catch (error) {
          console.log(error);
        }
        // Se o provedor for o github
      } else if (account?.provider === 'github') {
        // Então desestruturamos o input que recebemos do github
        const { name, email } = user;
        // E em sequencia tentaremos em um bloco try a criação do usuário
        try {
          // Primeiro conectamos com o banco de dados
          await connectMongoDB();
          // Em seguida verificamos se o usuário já existe
          const userExist = await UserGithub.findOne({ email });
          // Se não existir, criamos um novo
          if (!userExist) {
            // Indicamos o tipo de dado que será enviado ao banco de dados, qual método, headers e body.
            const res = await fetch(`http://localhost:3000/api/userGithub`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                name,
                email
              })
            });
            // Se tudo der certo, retornamos o usuário
            if (res.ok) {
              return user;
            }
          }
          // Caso contrário, cairemos no catch
        } catch (error) {
          console.log(error);
        }
        // Se o provedor for o facebook
      } else if (account?.provider === 'facebook') {
        // Então desestruturamos o input que recebemos do facebook
        const { name, email } = user;
        // E em sequencia tentaremos em um bloco try a criação do usuário
        try {
          // Primeiro conectamos com o banco de dados
          await connectMongoDB();
          // Em seguida verificamos se o usuário já existe
          const userExist = await UserFacebook.findOne({ email });
          // Se não existir, criamos um novo
          if (!userExist) {
            // Indicamos o tipo de dado que será enviado ao banco de dados, qual método, headers e body.
            const res = await fetch(`http://localhost:3000/api/userFacebook`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                name,
                email
              })
            });
            // Se tudo der certo, retornamos o usuário
            if (res.ok) {
              return user;
            }
          }
          // Caso contrário, cairemos no catch
        } catch (error) {
          console.log(error);
        }

      }
      return user;
    },

  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/'
  },
};
