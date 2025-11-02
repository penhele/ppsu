import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { SigninSchema } from "./lib/zod";
import { getUserByEmail } from "./lib/data";
import { verifyPassword } from "./lib/utils/password";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        const { email, password } = await SigninSchema.parseAsync(credentials);
        const user = await getUserByEmail(email);

        if (!user) return null;

        const isValid = await verifyPassword(password, user.password);
        if (!isValid) return null;

        return {
          id: user.pegawai?.id_pegawai,
          email: user.email,
          nama: user.pegawai?.nama,
        };
      },
    }),
  ],
});
