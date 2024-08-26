import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: [
    "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
    "./storage/framework/views/*.php",
    "./resources/views/**/*.blade.php",
    "./resources/js/**/*.tsx",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          white: "#FFFFFF",
          black: "#000000",
          platinum: "#E7E7E7",
          "black-pearl": "#121C22",
          "sonic-silver": "#7A7A7A",
          "chinese-black": "#171717",
          coral: "#E66445",
        },
        brand: {
          primary: {
            blue: {
              50: "#F4F7FB",
              100: "#E7EEF7",
              200: "#CADAED",
              300: "#9BBBDE",
              400: "#6698CA",
              500: "#427BB5",
              600: "#316198",
              700: "#2C5586",
              800: "#254367",
              900: "#233A57",
              950: "#17253A",
            },
            red: {
              50: "#FFF1F0",
              100: "#FFDDDC",
              200: "#FFC3C0",
              300: "#FF9994",
              400: "#FF5D56",
              500: "#FF2B22",
              600: "#FF0D02",
              700: "#D80900",
              800: "#B20902",
              900: "#98100A",
              950: "#510300",
            },
          },
          secondary: {
            dark: {
              blue: {
                50: "#EDF6FF",
                100: "#D7EAFF",
                200: "#B7DBFF",
                300: "#86C6FF",
                400: "#4DA5FF",
                500: "#237FFF",
                600: "#0C5DFF",
                700: "#0546F0",
                800: "#0C38C1",
                900: "#103598",
                950: "#0E1F54",
              },
            },
          },
          gray: {
            25: "#FCFCFD",
            50: "#F9FAFB",
            100: "#F2F4F7",
            200: "#EAECF0",
            300: "#D0D5DD",
            400: "#98A2B3",
            500: "#667085",
            600: "#475467",
            700: "#344054",
            800: "#1D2939",
            900: "#101828",
          },
        },
        semantic: {
          color: {
            blue: {
              25: "#EEFBFF",
              50: "#D8EEFD",
              100: "#C5E5FD",
              200: "#9DD4FB",
              300: "#76C3F9",
              400: "#4FB1F8",
              500: "#28A0F6",
              600: "#0984DD",
              700: "#0764A7",
              800: "#054471",
              900: "#02233B",
            },
            orange: {
              25: "#FFF9F5",
              50: "#FFF4ED",
              100: "#BECFDB",
              200: "#FECAAA",
              300: "#FDA06C",
              400: "#FB753C",
              500: "#F95016",
              600: "#EA360C",
              700: "#C2250C",
              800: "#9A1F12",
              900: "#7C1D12",
            },
            green: {
              25: "#F6FDF9",
              50: "#F1FCF5",
              100: "#DEFAEA",
              200: "#BEF4D4",
              300: "#8BEAB2",
              400: "#52D689",
              500: "#27AE60",
              600: "#1D9C53",
              700: "#1A7B43",
              800: "#1A6139",
              900: "#175031",
            },
            red: {
              50: "#FEF2F2",
              25: "#FFFBFB",
              100: "#FDE3E3",
              200: "#FCCCCC",
              300: "#F9A8A8",
              400: "#F47575",
              500: "#EB5757",
              600: "#D62C2C",
              700: "#B42121",
              800: "#951F1F",
              900: "#7C2020",
            },
          },
        },
        primary: {
          25: "#EEFBFF",
          50: "#D8EEFD",
          100: "#C5E5FD",
          200: "#9DD4FB",
          300: "#76C3F9",
          400: "#4FB1F8",
          500: "#28A0F6",
          600: "#0984DD",
          700: "#0764A7",
          800: "#054471",
          900: "#02233B",
        },
        error: {
          25: "#FFFBFA",
          50: "#FEF3F2",
          100: "#FEE4E2",
          200: "#FECDCA",
          300: "#FDA29B",
          400: "#F97066",
          500: "#F04438",
          600: "#D92D20",
          700: "#B42318",
          800: "#912018",
          900: "#7A271A",
        },
        warning: {
          25: "#FFFCF5",
          50: "#FFFAEB",
          100: "#FEF0C7",
          200: "#FEDF89",
          300: "#FEC84B",
          400: "#FDB022",
          500: "#F79009",
          600: "#DC6803",
          700: "#B54708",
          800: "#93370D",
          900: "#7A2E0E",
        },
        success: {
          25: "#F6FEF9",
          50: "#ECFDF3",
          100: "#D1FADF",
          200: "#A6F4C5",
          300: "#6CE9A6",
          400: "#32D583",
          500: "#12B76A",
          600: "#039855",
          700: "#027A48",
          800: "#05603A",
          900: "#054F31",
        },
        "gray-blue": {
          25: "#FCFCFD",
          50: "#F8F9FC",
          100: "#EAECF5",
          200: "#D5D9EB",
          300: "#B3B8DB",
          400: "#717BBC",
          500: "#4E5BA6",
          600: "#3E4784",
          700: "#363F72",
          800: "#293056",
          900: "#101323",
        },
        "gray-cool": {
          25: "#FCFCFD",
          50: "#F9F9FB",
          100: "#EFF1F5",
          200: "#DCDFEA",
          300: "#B9C0D4",
          400: "#7D89B0",
          500: "#5D6B98",
          600: "#4A5578",
          700: "#404968",
          800: "#30374F",
          900: "#111322",
        },
        "gray-modern": {
          25: "#FCFCFD",
          50: "#F8FAFC",
          100: "#EEF2F6",
          200: "#E3E8EF",
          300: "#CDD5DF",
          400: "#9AA4B2",
          500: "#697586",
          600: "#4B5565",
          700: "#364152",
          800: "#202939",
          900: "#121926",
        },
        "gray-neutral": {
          25: "#FCFCFD",
          50: "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D2D6DB",
          400: "#9DA4AE",
          500: "#6C737F",
          600: "#4D5761",
          700: "#384250",
          800: "#1F2A37",
          900: "#111927",
        },
        "gray-iron": {
          25: "#FCFCFC",
          50: "#FAFAFA",
          100: "#F4F4F5",
          200: "#E4E4E7",
          300: "#D1D1D6",
          400: "#A0A0AB",
          500: "#70707B",
          600: "#51525C",
          700: "#3F3F46",
          800: "#26272B",
          900: "#18181B",
        },
        "gray-true": {
          25: "#FCFCFC",
          50: "#FAFAFA",
          100: "#F5F5F5",
          200: "#E5E5E5",
          300: "#D6D6D6",
          400: "#A3A3A3",
          500: "#737373",
          600: "#525252",
          700: "#424242",
          800: "#292929",
          900: "#141414",
        },
        "gray-warm": {
          25: "#FDFDFC",
          50: "#FAFAF9",
          100: "#F5F5F4",
          200: "#E7E5E4",
          300: "#D7D3D0",
          400: "#A9A29D",
          500: "#79716B",
          600: "#57534E",
          700: "#44403C",
          800: "#292524",
          900: "#1C1917",
        },
        "yellow-purple": {
          500: "#7A5AF8",
        },
        "yellow-pink": {
          500: "#EE46BC",
        },
        "yellow-green-light": {
          500: "#66C61C",
        },
        "yellow-green": {
          500: "#16B364",
        },
      },
      // colors: {

      //   "brand/primary-red": {
      //     400: "#FF5D56",
      //     900: "#98100A",
      //     950: "#510300",
      //     DEFAULT: "#98100A",
      //   },
      //   "brand/gray": {
      //     200: "#EAECF0",
      //     300: "#D0D5DD",
      //     700: "#344054",
      //     900: "#101828",
      //   },
      // },
      spacing: {
        2.75: "0.6875rem",
        3.75: "0.9375rem",
        4.5: "1.125rem",
        4.75: "1.1875rem",
        5.5: "1.375rem",
        6.25: "1.5625rem",
        7.25: "1.8125rem",
        7.5: "1.875rem",
        7.75: "1.9375rem",
        8.5: "2.125rem",
        8.75: "2.1875rem",
        9.5: "2.375rem",
        12.5: "3.125rem",
        13: "3.25rem",
        14.5: "3.625rem",
        15: "3.75rem",
        15.5: "3.875rem",
        18: "4.5rem",
        19.5: "4.875rem",
        20.75: "5.1875rem",
        22.5: "5.625rem",
        25: "6.25rem",
        30: "7.5rem",
        30.75: "7.6875rem",
        31: "7.75rem",
        35.75: "8.9375rem",
        42.5: "10.625rem",
        45.75: "11.4375rem",
        50: "12.5rem",
        57.75: "14.4375rem",
        62: "15.5rem",
        62.5: "15.625rem",
        70: "17.5rem",
        73.5: "18.375rem",
        85: "21.25rem",
        86.25: "21.5625rem",
        95: "23.75rem",
        100: "25rem",
        102.5: "25.625rem",
        105.25: "26.3125rem",
        112.5: "28.125rem",
        114: "28.5rem",
        120: "30rem",
        124.75: "31.1875rem",
        128: "32rem",
        154: "38.5rem",
        160: "40rem",
        166.75: "41.6875rem",
        174: "43.5rem",
        180: "45rem",
        180.5: "45.125rem",
        187.25: "46.8125rem",
        192: "48rem",
        200: "50rem",
        203: "50.75rem",
        208.25: "52.0625rem",
        234.5: "58.625rem",
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        xxs: "0.625rem",
        "sm+": "0.9375rem",
        "xl+": "1.375rem",
        "3.5xl": "2rem",
        "4.5xl": "2.5rem",
        "5.5xl": "3.5rem",
        "6.5xl": "4rem",
      },
      lineHeight: {
        4.5: "1.125rem",
        5.25: "1.3125rem",
        5.5: "1.375rem",
        6.25: "1.5625rem",
        6.5: "1.625rem",
        6.75: "1.6875rem",
        7.25: "1.8125rem",
        7.5: "1.875rem",
        9.75: "2.4375rem",
        12: "3rem",
        14.5: "3.625rem",
        15: "3.75rem",
        16: "4rem",
        16.25: "4.0625rem",
        17.25: "4.3125rem",
        17.5: "4.375rem",
        18: "4.5rem",
        18.25: "4.5625rem",
        19: "4.75rem",
        19.25: "4.8125rem",
        21.75: "5.4375rem",
      },
      borderRadius: {
        "3.5xl": "1.875rem",
        "4xl": "2rem",
      },
      brightness: {
        40: "0.4",
      },
    },
  },
  plugins: [forms, typography],
};
