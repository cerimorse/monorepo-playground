import { defineConfig, globalIgnores } from "eslint/config";
import js from "@eslint/js";
import tsEslint from "typescript-eslint";
import turboPlugin from "eslint-plugin-turbo";
import eslintConfigPrettier from "eslint-config-prettier/flat";

export const config = defineConfig([
  globalIgnores(["dist/**"]),
  js.configs.recommended,
  tsEslint.configs.recommended,
  {
    plugins: {
      turbo: turboPlugin,
    },
    rules: {
      "turbo/no-undeclared-env-vars": "error",
    },
  },
]);

export const configWithPrettier = defineConfig([config, eslintConfigPrettier]);
