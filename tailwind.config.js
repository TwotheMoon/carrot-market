/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}", 
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
  },
  darkMode: "media", // media 브라우저 설정 우선 / class 웹사이트 다크모드 설정 우선
  plugins: [require("@tailwindcss/forms")], // tailwind 추가 플러그인 설치 후 적용 방법
};
