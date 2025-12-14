import { configWithPrettier as baseConfig } from "./configs/base.js";
import { configWithPrettier as reactConfig } from "./configs/react.js";
import { configWithPrettier as nextConfig } from "./configs/next.js";

import pkg from "../package.json" assert { type: "json" };

const { name, version } = pkg;

export default {
  meta: {
    name,
    version,
  },
  configs: {
    base: baseConfig,
    react: reactConfig,
    next: nextConfig,
  }
}