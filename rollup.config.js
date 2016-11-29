// Rollup plugins
import babel from 'rollup-plugin-babel';
import nodeResolve from 'rollup-plugin-node-resolve';

export default {
  entry: 'src/scripts/main.js',
  dest: 'build/assets/js/main.js',
  format: 'iife',
  sourceMap: 'inline',
  plugins: [
    babel({ exclude: 'node_modules/**' }),
    nodeResolve({ browser: true })
  ],
};
