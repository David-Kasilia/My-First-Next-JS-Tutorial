import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { db } from "@firebase/firebase";
import { addDoc, getDoc, doc } from "firebase/firestore";

console.log({
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
});

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
});

export default handler;