"use client";
import Link from "next/link";
import Image from "next/image";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { useState, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";

const NavBar = () => {
  const isUserLoggedIn = true;

  const [providers, setProviders] = useState(null);

  const [toggleDropDown, setToggleDropDown] = useState(false);

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
          </>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <div key={provider.name}>
                  <button
                    type="button"
                    className="bg-transparent hover:bg-black text-black font-semibold hover:text-white px-5 border border-black hover:border-transparent rounded-full"
                    onClick={() => signIn(provider.id)}
                  >
                    Sign in with {provider.name}
                  </button>
                </div>
              ))}
          </>
        )}
        <div className="container mobile-nav-bar sm:hidden justify-center items-center mx-auto flex">
          {isUserLoggedIn ? (
            <div className="container flex justify-between">
              <Link href="/">
                <Image
                  src="https://i.postimg.cc/fLKTzXvg/promtverse-x2-removebg-preview-transformed.png"
                  width={50}
                  height={50}
                  alt="PromptVerse Logo"
                  className="object-contain"
                />
              </Link>

              <button
                type="button"
                className="bg-transparent hover:bg-black text-black font-semibold hover:text-white px-5 border border-black hover:border-transparent rounded-full"
                onClick={() => setToggleDropDown((prev) => !prev)}
              >
                <FaUserCircle className="profile-icon text-4xl" />
              </button>

              {toggleDropDown && (
                <div
                  className="flex flex-col justify-evenly p-3 font-semibold absolute right-4 z-10 mt-16 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                >
                  <Link
                    href="/profile"
                    className="text-black text-right"
                    onClick={() => setToggleDropDown(false)}
                  >
                    Profile
                  </Link>
                  <Link
                    href="/chat-prompts"
                    className="text-black text-right"
                    onClick={() => setToggleDropDown(false)}
                  >
                    Chat Prompts
                  </Link>
                  <Link
                    href="/art-prompts"
                    className="text-black text-right"
                    onClick={() => setToggleDropDown(false)}
                  >
                    Art Prompts
                  </Link>
                  <Link
                    href="/contribute"
                    className="text-black text-right"
                    onClick={() => setToggleDropDown(false)}
                  >
                    Contribute
                  </Link>
                  <Link
                    href="/about"
                    className="text-black text-right"
                    onClick={() => setToggleDropDown(false)}
                  >
                    About
                  </Link>
                  <Link
                    href="/contact"
                    className="text-black text-right"
                    onClick={() => setToggleDropDown(false)}
                  >
                    Contact
                  </Link>
                  <button
                    type="button"
                    className=" p-1 m-2 bg-black text-white font-semibold hover:text-white px-5 border border-black rounded-full"
                    onClick={() => {
                      setToggleDropDown;
                      signOut();
                    }}
                  >
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              {providers &&
                Object.values(providers).map((provider) => (
                  <div key={provider.name}>
                    <button
                      type="button"
                      className="bg-transparent hover:bg-black text-black font-semibold hover:text-white px-5 border border-black hover:border-transparent rounded-full"
                      onClick={() => signIn(provider.id)}
                    >
                      Sign in with {provider.name}
                    </button>
                  </div>
                ))}
            </>
          )}
        </div>
      </>
    </nav>
  );
};

export default NavBar;
