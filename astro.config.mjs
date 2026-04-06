// @ts-check
import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
  site: 'https://kiiro-blog.vercel.app', // 替换为你的域名
  vite: {
    plugins: [tailwindcss()],
  },
})
