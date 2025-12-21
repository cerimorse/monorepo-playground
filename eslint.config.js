const { defineConfig, globalIgnores } = require("eslint/config");

module.exports = defineConfig([globalIgnores(["apps/**", "packages/**"])]);
