/** @type {import("prettier").Config} */
const config = {
  singleQuote: true,
  semi: false,
  tabWidth: 2, // 前端推荐 2 不是 4
  trailingComma: "es5",
  plugins: ["prettier-plugin-tailwindcss"],
};

export default config;
