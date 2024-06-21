/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        auth_background: "#0B0B0F",
      },
      colors: {
        input_background: "#16161E",
        text_color: "white",
        descp_text_color: "#898CA9",
        link_text_color: "#B982FF",
      },
      fontSize: {
        font_header: "85px",
        font_subhead: "50px",
        font_section_header: "32px",
        font_large: "18px",
        font_main_text: "16px",
        font_small: "14px",
      },
    },
  },
  plugins: [],
};
