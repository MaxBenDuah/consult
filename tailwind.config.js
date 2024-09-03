/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  screens: {
    sm: "480px",
    md: "768px",
    lg: "976px",
    xl: "1440px",
  },
  theme: {
    extend: {
      keyframes: {
        // flip: {
        //   // "0%, 80%": { opacity: 0, transform: "rotateY(90deg)" },
        //   // "20%, 70%": { opacity: 1, transform: "rotateY(0deg)" },
        //   // "100%": { opacity: 0, transform: "rotateY(90deg)" },
        // },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slideFromRight: {
          "0%": { opacity: 0, transform: "translateX(100%)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        slideFromTop: {
          "0%": { opacity: 0, transform: "translateY(-100%)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        rotate360: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 2s ease-in-out",
        slideFromRight: "slideFromRight 2s ease-in-out",
        slideFromTop: "slideFromTop 2s ease-in-out",
        // flip: "flip 15s infinite",
        // flip1: "flip 15s infinite",
        // flip2: "flip 15s infinite 5s",
        // flip3: "flip 15s infinite 10s",
        rotate360: "rotate360 1s ease-in-out",
      },
      transitionProperty: {
        transform: "transition",
      },
      // backgroundImage: {
      //   "hero-image1":
      //     "url('https://images.pexels.com/photos/2977565/pexels-photo-2977565.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
      //   "hero-image2":
      //     "url('https://images.pexels.com/photos/2977547/pexels-photo-2977547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
      //   "hero-image3":
      //     "url('https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
      // },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#336AEA",
          secondary: "#f6d860",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },
};
