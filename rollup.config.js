// Based on Rollup example app
// https://github.com/rollup/rollup-starter-lib/blob/88a2d55d449e2cb12191199d993c08bc07c90be2/rollup.config.js
import pkg from './package.json';
import { terser } from 'rollup-plugin-terser';

export default [
  {
    input: 'src/lib.js',
    output: {
      name: pkg.name,
      file: `dist/${pkg.name}.min.js`,
      format: 'umd',
      sourcemap: true
    },
    plugins: terser({format: { keep_quoted_props: true }})
  },
  {
    input: 'src/lib.js',
    output: {
      name: pkg.name,
      file: `dist/${pkg.name}.js`,
      format: 'umd',
    },
  }
]

