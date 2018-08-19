import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import pkg from './package.json';
import resolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';
import typescript from 'rollup-plugin-typescript2';
import { uglify } from 'rollup-plugin-uglify';

const env = process.env.NODE_ENV;
const hyphenToCamelCase = string =>
  string.replace(/-([a-z])/g, g => g[1].toUpperCase());

/**
 * 1. automatically exclude `peerDependencies` in the Rollup bundle.
 * 2. give Rollup the ability to locate & bundle `node_modules`.
 * 3. convert `commonJS` modules to `ES6` so that they can be included in the Rollup
 *    bundle. this is necessary because Rollup only deals with `es` modules by default.
 * 4. `rollup-plugin-typescript2` looks for a `tsconfig.json` file at the root.
 *    it must come after `resolve` (see: https://tinyurl.com/y76kswh5).
 * 5. `rollup-plugin-babel` looks for a `.babelrc` file at the root.
 */
const config = {
  input: 'src/index.tsx',
  plugins: [
    external() /* [1] */,
    resolve() /* [2] */,
    commonjs() /* [3] */,
    typescript({ cacheRoot: './.typescript_cache' }) /* [4] */,
    babel({ exclude: 'node_modules/**' }) /* [5] */
  ]
};

if (env === 'esm' || env === 'cjs') {
  config.output = {
    format: env,
    sourcemap: true,
    indent: false
  };
}

if (env === 'development' || env === 'production') {
  config.output = {
    format: 'umd',
    name: hyphenToCamelCase(pkg.name),
    indent: false,
    sourcemap: true,
    globals: {
      react: 'React'
    }
  };

  config.plugins.push(
    replace({
      'process.env.NODE_ENV': JSON.stringify(env)
    })
  );
}

if (env === 'production') {
  config.plugins.push(uglify());
}

export default config;
