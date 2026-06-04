/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#ffffff",   // 페이지 배경 (흰색)
        mist: "#f5f7fc",    // 살짝 톤다운된 섹션 밴드
        ink: "#1b2230",     // 본문/제목 (쿨 다크)
        muted: "#586173",
        faint: "#98a1b2",
        line: "#e7ebf2",
        accent: {
          DEFAULT: "#2563eb", // 메인 포인트 블루 — 여기서 한 줄로 변경
          dark: "#1d4ed8",
          tint: "#eff4ff",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "serif"],
      },
      keyframes: {
        "modal-in": {
          "0%": { opacity: "0", transform: "scale(0.97) translateY(8px)" },
          "100%": { opacity: "1", transform: "scale(1) translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "modal-in": "modal-in 0.2s ease-out",
        marquee: "marquee 45s linear infinite",
      },
    },
  },
  plugins: [],
};
