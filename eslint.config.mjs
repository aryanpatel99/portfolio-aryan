import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({ baseDirectory: dirname(fileURLToPath(import.meta.url)) });

const eslintConfig = [
  { ignores: [".next/**", "node_modules/**", "out/**", "build/**", "dist/**", "next-env.d.ts"] },
  { files: ["**/*.{js,jsx,mjs}"] },
  ...compat.extends("next/core-web-vitals"),
  {
    rules: {
      // Apostrophes in JSX text render fine
      "react/no-unescaped-entities": "off",
      // Images are served pre-sized from Cloudinary
      "@next/next/no-img-element": "off",
    },
  },
];

export default eslintConfig;
