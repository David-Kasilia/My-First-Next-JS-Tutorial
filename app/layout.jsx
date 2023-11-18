import "@styles/globals.css";

import NavBar from "@components/NavBar";
import Provider from "@components/Provider";
import Footer from "@components/Footer";

export const metadata = {
  title: "PromptVerse",
  description: "Layout",
};

const RootLayout = ({children}) => {
  return (
    <html lang="en">
      <body>
      <header>
        <NavBar />
      </header>
        <main id="app" className="app">
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
