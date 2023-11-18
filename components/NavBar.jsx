"use client";
import Link from "next/link";
import Image from "next/image";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { useState, useEffect } from "react";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link href="/">
        <Image
          src="https://i.postimg.cc/fLKTzXvg/promtverse-x2-removebg-preview-transformed.png"
          width={50}
          height={50}
          alt="PromptVerse Logo"
          className="object-contain"
        />
      </Link>
    </nav>
  );
};

export default NavBar;
