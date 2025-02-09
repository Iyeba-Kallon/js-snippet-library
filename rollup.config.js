import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'src/index.js', // Entry file
  output: {
    file: 'dist/bundle.js', // Output file
    format: 'esm', // ES Module format
  },
  plugins: [resolve(), commonjs()],
};
