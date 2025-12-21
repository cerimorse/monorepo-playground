import { defineConfig, globalIgnores } from "eslint/config";
import nextPlugin from "@next/eslint-plugin-next";
import eslintConfigPrettier from "eslint-config-prettier/flat";

import { config as reactConfig } from "./configs/react.js";

export const config = defineConfig([
  ...reactConfig,
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
  nextPlugin.configs.recommended,
  nextPlugin.configs["core-web-vitals"],
]);

export const configWithPrettier = defineConfig([config, eslintConfigPrettier]);
