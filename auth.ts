import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { SigninSchema } from "@/lib/zod";
import { verifyPassword } from "@/lib/utils/password";
import { getUserByEmail } from "@/lib/data/user";

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
          id: user.id,
          email: user.email,
          role: user.role,
        };
      },
    }),
  ],

  session: { strategy: "jwt" },
  pages: { signIn: "/auth/signin" },

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
        token.email = user.email;
      }
      return token;
    },

    async session({ session, token }) {
      if (!token?.email) return session;

      const user = await getUserByEmail(token.email);
      if (!user) return session;

      session.user.id = user.id;
      session.user.email = user.email;
      session.user.role = user.role;

      return session;
    },
  },
});
