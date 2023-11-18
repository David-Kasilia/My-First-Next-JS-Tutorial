import "@styles/globals.css";

export const metadata = {
  title: "PromptVerse",
  description: "Layout",
};

const RootLayout = ({children}) => {
  return (
    <html lang="en">
      <body>
        <main id="app" className="app">
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
