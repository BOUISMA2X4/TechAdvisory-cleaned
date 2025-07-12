import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals"),
  {
    rules: {
      // Variables non utilisées : warning au lieu d'erreur
      "@typescript-eslint/no-unused-vars": [
        "warn", // ou "off" pour complètement désactiver
        {
          "argsIgnorePattern": "^_",
          "varsIgnorePattern": "^_",
          "caughtErrorsIgnorePattern": "^_",
          "destructuredArrayIgnorePattern": "^_"
        }
      ],
      // Expressions non utilisées : off pour les fichiers générés
      "@typescript-eslint/no-unused-expressions": "warn", // ou "off"
      "@typescript-eslint/no-this-alias": "off",
      "@typescript-eslint/no-require-imports": "off",
    },
  },
  {
    // Règles spécifiques pour les fichiers générés
    files: [
      "src/generated/**/*",
      "**/prisma/**/*", 
      "**/*.generated.*",
      "**/wasm*.js",
      "**/runtime/**/*"
    ],
    rules: {
      "@typescript-eslint/no-unused-expressions": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-this-alias": "off",
      "@typescript-eslint/no-require-imports": "off",
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
];

export default eslintConfig;
