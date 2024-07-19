import { server } from 'typescript'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/css-pokemon-gameboy/',
  build: {
    outDir: 'dist',
  }
})
