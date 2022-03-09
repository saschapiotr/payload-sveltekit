import adapter from '@sveltejs/adapter-node';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess({ postcss: true }),

	kit: {
		adapter: adapter(),
		// hydrate the <div id="svelte"> element in src/app.html
		vite: {
      server: {
        watch: {
          usePolling: true,
        },
      },
    },
	}
};

export default config;
