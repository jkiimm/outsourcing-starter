// Rollup plugins
import babel from 'rollup-plugin-babel';

export default {
  entry: 'src/scripts/main.js',
  dest: 'build/assets/js/main.js',
  format: 'iife',
  sourceMap: 'inline',
  plugins: [
    babel({
      exclude: 'node_modules/**',
    }),
  ],
};
