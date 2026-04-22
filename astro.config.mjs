import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://client.baller.software',
  base: '/texan-vapor',
  vite: {
    plugins: [tailwindcss()],
  },
});
