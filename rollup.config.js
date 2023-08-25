import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";

/**
 * @type {import('rollup').RollupOptions}
 */
const config = {
  input: "src/index.tsx",
  output: {
    dir: "dist/",
    format: "cjs",
    sourcemap: false,
  },
  plugins: [
    postcss({
      config: {
        path: "./postcss.config.js",
      },
      extensions: [".css"],
      minimize: true,
    }),
    typescript({ tsconfig: "./tsconfig.json" }),
    commonjs(),
    nodeResolve(),
    terser({
      mangle: true,
    }),
  ],
  external: ["react", "react-dom"],
};

export default config;
