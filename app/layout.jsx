export const metadata = {
  title: "Layout",
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
