/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        landing_background:'#07308f',
        auth_background: "#0B0B0F",
        black_gradient: 'linear-gradient(112.1deg, #202639 11.4%, #3F4C77 70.2%)',
      },
      colors: {
        input_background: "#16161E",
        text_color: "white",
        descp_text_color: "#898CA9",
        link_text_color: "#B982FF",
        customPink: '#FF00FF',
      },
      fontSize: {
        font_header: "85px",
        font_h1:'60px',
        font_subhead: "50px",
        font_section_header: "32px",
        font_medium: '23px',
        font_large: "18px",
        font_main_text: "16px",
        font_small: "14px",
      },
      fontWeight: {
        semi_bold : '500',
      },

    },
  },
  plugins: [],
};
