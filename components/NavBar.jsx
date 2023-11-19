"use client";
import Link from "next/link";
import Image from "next/image";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { useState, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";

const NavBar = () => {
  const isUserLoggedIn = true;

  const [providers, setProviders] = useState(null);

  useEffect(() => {
    const getProvidersList = async () => {
      const providers = await getProviders();
      setProviders(providers);
    };
    getProvidersList();
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light p-5">
      <>
        {isUserLoggedIn ? (
          <>
            <div className="container  desktop-nav-bar sm:flex hidden justify-center items-center mx-auto">
              <div className="container">
                <Link href="/">
                  <Image
                    src="https://i.postimg.cc/fLKTzXvg/promtverse-x2-removebg-preview-transformed.png"
                    width={50}
                    height={50}
                    alt="PromptVerse Logo"
                    className="object-contain"
                  />
                </Link>
              </div>
              <div className="container navigation-bar flex gap-5 justify-between items-center justify-self-center md:gap-2">
                <Link href="/chat-prompts">
                  <span className="nav-link hover:bg-black hover:text-white hover:p-2 hover:rounded-full active:outline-black">
                    Chat Prompts
                  </span>
                </Link>
                <Link href="/art-prompts">
                  <span className="nav-link  hover:bg-black hover:text-white hover:p-2 hover:rounded-full active:outline-black">
                    Art Prompts
                  </span>
                </Link>

                <Link href="/contribute">
                  <span className="nav-link  hover:bg-black hover:text-white hover:p-2 hover:rounded-full active:outline-black">
                    Contribute
                  </span>
                </Link>

                <Link href="/about">
                  <span className="nav-link  hover:bg-black hover:text-white hover:p-2 hover:rounded-full active:outline-black">
                    About
                  </span>
                </Link>

                <Link href="/contact">
                  <span className="nav-link  hover:bg-black hover:text-white hover:p-2 hover:rounded-full active:outline-black">
                    Contact
                  </span>
                </Link>
              </div>
              <div className="container profile-container flex gap-3 justify-end">
                <Link href="/profile">
                  <FaUserCircle className="profile-icon text-4xl" />
                </Link>
                <button
                  type="button"
                  className="bg-transparent hover:bg-black text-black font-semibold hover:text-white px-5 border border-black hover:border-transparent rounded-full"
                  onClick={signOut}
                >
                  Sign Out
                </button>
              </div>
            </div>

            <div className="container mobile-nav-bar sm:hidden flex">
              <div className="container">
                <Link href="/">
                  <Image
                    src="https://i.postimg.cc/fLKTzXvg/promtverse-x2-removebg-preview-transformed.png"
                    width={50}
                    height={50}
                    alt="PromptVerse Logo"
                    className="object-contain"
                  />
                </Link>
              </div>
            </div>
          </>
        ) : (
          <>
            {providers && Object.values(providers).map((provider) => (
              <div key={provider.name}>
                <button
                  type="button"
                  className="bg-transparent hover:bg-black text-black font-semibold hover:text-white px-5 border border-black hover:border-transparent rounded-full"
                  onClick={() => signIn(provider.id)}
                >
                  Sign in with {provider.name}
                </button>
              </div>
            )
            )}
          </>
        )}
      </>
    </nav>
  );
};

export default NavBar;
