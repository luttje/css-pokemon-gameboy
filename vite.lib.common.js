import { resolve, join } from 'path'
import { defineConfig } from 'vite'
import fs from 'fs'

const outDir = 'dist-release'
const outDirCss = `${outDir}/styles`

export default defineConfig({
  build: {
    outDir: outDirCss,
    lib: {
      entry: resolve(__dirname, 'src/lib.ts'),
      name: 'CssPokemonGameboy',
      fileName: 'css-pokemon-gameboy',
    },
    rollupOptions: {
      external: [
        'prismjs', 'redent'
      ],
      output: {
        assetFileNames: "css-pokemon-gameboy.[ext]",
      },
    },
  },
  plugins: [
    {
      // We are only interested in the compiled css
      name: 'postbuild-clear-js',
      closeBundle: async () => {
        const dist = resolve(__dirname, outDirCss)

        fs.readdirSync(dist).forEach(file => {
          if (file.endsWith('.js') || file.endsWith('.cjs')) {
            fs.unlinkSync(join(dist, file))
          }
        })
      }
    },
    {
      name: 'postbuild-copy-template',
      closeBundle: async () => {
        const dist = resolve(__dirname, outDir)
        const template = resolve(__dirname, 'template.html')

        fs.copyFileSync(template, join(dist, 'template.html'))
      }
    },
  ]
})
