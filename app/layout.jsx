import "@styles/globals.css";

import NavBar from "@components/NavBar";
import Provider from "@components/Provider";
import Footer from "@components/Footer";
import { getServerSession } from "next-auth";
import LogIn from "./auth/LogIn";
import handler from "./api/auth/[...nextauth]";

export const metadata = {
  title: "PromptVerse",
  description: "Layout",
};

const RootLayout = async ({ children }) => {

  const session = await getServerSession(handler);
  return (
    <html lang="en">
      <body>
        <Provider>
        {!session ? (
          <LogIn />
        ):(
          <>
          <header>
            <NavBar />
          </header>
          <main id="app" className="app">
            {children}
          </main>
          </>
        )}
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
