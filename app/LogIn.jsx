"use client";
import { signIn } from "next-auth/react";

const LogIn = () => {
  return (
    <button onClick={(e) => signIn( 
      e.preventDefault(),
      'google',
      'github')}>Sign In</button>
  )
};

export default LogIn;
