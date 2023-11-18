/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    safelist: ["dark"],
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        // Custom colors for black and white theme
        black: "#000000",
        white: "#ffffff",
      },
      backgroundColor: {
        // Set background color for light and dark themes
        light: "#ffffff", // White background for light theme
        dark: "#000000", // Black background for dark theme
      },
      textColor: {
        // Set text color for light and dark themes
        light: "#000000", // Black text for light theme
        dark: "#ffffff", // White text for dark theme
      },
      borderColor: {
        // Set border color for light and dark themes
        light: "#dddddd", // Light gray border for light theme
        dark: "#333333", // Dark gray border for dark theme
      },
    },
  },
  plugins: [],
};
