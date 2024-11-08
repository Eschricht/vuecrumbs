import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    { input: './src/', outDir: 'dist', format: 'cjs' },
    { input: './src/', outDir: 'dist', format: 'esm' },
  ],
  declaration: true,
  clean: true,
  externals: [
    'vue-router',
    'vue',
  ],
})
