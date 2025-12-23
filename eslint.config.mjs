import { defineConfig, globalIgnores } from "eslint/config";
import configEslintMonorepoPlayground from "@monorepo-playground/config-eslint";

export default defineConfig([
  globalIgnores([
    "apps/**",
    "packages/**",
    ".husky/**/*",
    "!./husky/install.mjs",
  ]),
  ...configEslintMonorepoPlayground.configs.base,
]);
