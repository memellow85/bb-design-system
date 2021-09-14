import vue from 'rollup-plugin-vue'
import commonjs from '@rollup/plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
import autoExternal from 'rollup-plugin-auto-external'
import scss from 'rollup-plugin-scss'

export default {
  input: 'src/libs/export.js',
  external: ['vue'],
  output: {
    name: 'bb-design-system',
    file: './package/bb-design-system.bundle.js',
    format: 'umd',
    globals: {
      vue: 'vue',
    },
  },
  plugins: [
    terser({
      module: true,
      toplevel: true,
    }),
    autoExternal(),
    commonjs(),
    vue({
      css: false,
      compileTemplate: true,
    }),
    scss({
      outputStyle: 'compressed',
    }),
  ],
}
