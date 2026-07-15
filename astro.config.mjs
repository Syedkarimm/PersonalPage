// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // imageService "compile" generates optimized images at build time (sharp)
  // instead of routing them through Cloudflare Images at request time.
  adapter: cloudflare({ imageService: 'compile' }),
  vite: {
    plugins: [tailwindcss()]
  }
});
