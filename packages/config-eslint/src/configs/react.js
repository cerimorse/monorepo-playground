import { defineConfig } from "eslint/config";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import globals from "globals";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import { config as baseConfig } from "./base.js";

export const config = defineConfig([
  ...baseConfig,
  pluginReact.configs.flat.recommended,
  pluginReact.configs.flat["jsx-runtime"],
  {
    languageOptions: {
      ...pluginReact.configs.flat.recommended.languageOptions,
      globals: {
        ...globals.serviceworker,
        ...globals.browser,
      },
    },
  },
  pluginReactHooks.configs.flat.recommended,
]);

export const configWithPrettier = defineConfig([config, eslintConfigPrettier]);
