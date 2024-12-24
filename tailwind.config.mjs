/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
const flowbite = require("flowbite-react/tailwind");

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    flowbite.plugin(),
    plugin(({ addBase, theme }) => {
      addBase({
        '.scrollbar': {
          overflowY: 'auto',
          scrollbarColor: `${theme('colors.blue.600')} ${theme('colors.blue.200')}`,
          scrollbarWidth: 'thin',
        },
        '.scrollbar::-webkit-scrollbar': {
          height: '2px',
          width: '2px',
        },
        '.scrollbar::-webkit-scrollbar-thumb': {
          backgroundColor: theme('colors.blue.600'),
        },
        '.scrollbar::-webkit-scrollbar-track-piece': {
          backgroundColor: theme('colors.blue.200'),
        },
      });
    }),
  ],
};