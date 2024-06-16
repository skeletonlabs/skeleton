import { defineConfig } from 'vitest/config';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig(({ mode }) => ({
  plugins: [svelte()],
  resolve: {
    conditions: mode === 'test' ? ['browser'] : []
  },
  test: {
    environment: 'jsdom',
    setupFiles: ['./vitest-setup.js'],
    exclude: [
      '**/node_modules/**',
      '**/tests/**',
      '**/build/**',
      '**/coverage/**',
      '**/.svelte-kit/**',
      '**/src/lib/icons/**',
      '**/.eslintrc.cjs',
      '**/vite.config.ts',
      '**/tailwind.config.ts',
      '**/postcss.config.cjs',
      '**/playwright.config.ts',
      '**/svelte.config.js',
      '**/src/app.d.ts',
      '**/+page.svelte',
      '**/+layout.svelte',
      '**/+error.svelte',
      '**/+page.server.ts',
      '**/hooks.server.ts'
    ]
  }
}));
