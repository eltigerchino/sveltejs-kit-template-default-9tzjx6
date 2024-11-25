import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { enhancedImages } from '@sveltejs/enhanced-img';

export default defineConfig({
  server: {
    host: '0.0.0.0',
    origin: 'http://crispy-enigma-9766jxxrgv9cp4g5.github.dev',
  },
  plugins: [enhancedImages(), sveltekit()],
});
