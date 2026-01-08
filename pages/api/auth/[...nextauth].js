import dbConnect from "@/db/connect";
import Company from "@/db/models/Company";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

export const authOptions = {
  session: { strategy: "jwt" },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        await dbConnect();
        const email = credentials?.email?.toLowerCase();
        const password = credentials?.password;
        if (!email || !password) return null;
        const company = await Company.findOne({ email });
        if (!company) return null;
        const validPassword = await bcrypt.compare(
          password,
          company.encryptedPassword
        );
        if (!validPassword) return null;
        return {
          id: company._id.toString(),
          name: company.name,
          email: company.email,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.companyId = user.id;
        token.companyName = user.name;
      }
      return token;
    },
    async session({ session, token }) {
      session.companyId = token.companyId;
      session.companyName = token.companyName;
      return session;
    },
  },
};
export default NextAuth(authOptions);
