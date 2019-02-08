import resolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";
import postcss from "rollup-plugin-postcss";
import commonjs from "rollup-plugin-commonjs";

export default {
  input: "src/index.js",
  output: {
    file: "dist/bundle.js",
    format: "cjs"
  },
  external: ["react", "react-proptypes"],
  plugins: [
    resolve(),
    postcss({
      modules: true
    }),
    babel({
      exclude: "node_modules/**"
    }),
    commonjs({
      ignoreGlobal: true,
      include: /node_modules/,
      namedExports: {
        // left-hand side can be an absolute path, a path
        // relative to the current d-uiirectory, or the name
        // of a module in node_modules
        "node_modules/@material-ui/core/Button/index.js": ["Button"],
        "node_modules/@material-ui/core/styles/withStyles.js": ["withStyles"]
      }
    })
  ]
};
