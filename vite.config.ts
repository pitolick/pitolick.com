import { sveltekit } from '@sveltejs/kit/vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import { defineConfig } from 'vitest/config';

export default defineConfig(({ mode }) => ({
	plugins: [enhancedImages(), sveltekit()],
	resolve: {
		conditions: mode === 'test' ? ['browser'] : []
	},
	test: {
		environment: 'jsdom',
		setupFiles: ['./vitest-setup.js']
	}
}));
