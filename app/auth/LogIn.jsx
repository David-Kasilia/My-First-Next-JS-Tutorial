"use client";
import { signIn } from "next-auth/react";

const LogIn = () => {
  return (
    <button onClick={() => signIn('google')}>Sign In</button>
  )
};

export default LogIn;
