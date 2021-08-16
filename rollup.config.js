// Based on Rollup example app
// https://github.com/rollup/rollup-starter-lib/blob/88a2d55d449e2cb12191199d993c08bc07c90be2/rollup.config.js
import pkg from './package.json';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/index.js',
  output: {
    name: pkg.name,
    file: pkg.browser,
    format: 'umd'
  },
  plugins: terser()
}

