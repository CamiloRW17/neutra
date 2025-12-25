import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss()],
  base: '/https://github.com/CamiloRW17/portfolio-camilorw/',
})