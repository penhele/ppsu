import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { SigninSchema } from "./lib/zod";
import { verifyPassword } from "./lib/utils/password";
import { getUserByEmail } from "./lib/data/user";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials, request) => {
        const { email, password } = await SigninSchema.parseAsync(credentials);
        const user = await getUserByEmail(email);

        if (!user) return null;

        const isValid = await verifyPassword(password, user.password);
        if (!isValid) return null;

        return {
          id: user.pegawai?.id_pegawai,
          email: user.email,
          nama: user.pegawai?.nama,
          role: user.role,
        };
      },
    }),
  ],

  session: { strategy: "jwt" },
  pages: { signIn: "/auth/signin" },
  callbacks: {
    jwt({ token, user }) {
      if (user) token.role = user.role;
      return token;
    },
    session({ session, token }) {
      session.user.id = token.sub;
      session.user.role = token.role;
      session.user.name = token.name;
      return session;
    },
  },
});
