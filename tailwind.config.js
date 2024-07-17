/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        landing_background:'#07308f',
        auth_background: "#0B0B0F",
        black_gradient: 'linear-gradient(112.1deg, #202639 11.4%, #3F4C77 70.2%)',
        'black-gradient': 'linear-gradient(90deg, rgba(27,27,31,1) 42%, rgba(141,0,255,1) 61%, rgba(16,15,17,0.8827906162464986) 93%)',
      },
      colors: {
        input_background: "#16161E",
        text_color: "black",
        descp_text_color: "#898CA9",
        link_text_color: "#B982FF",
        customPink: '#FF00FF',
      },
      fontSize: {
        font_header: "85px",
        font_h1:'60px',
        font_subhead: "48px",
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
