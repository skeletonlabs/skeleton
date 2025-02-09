import type { APIRoute } from 'astro';
import { experimental_AstroContainer } from 'astro/container';

// Manually import the server renderers for each framework.
import svelteRenderer from '@astrojs/svelte/server.js';
import mdxRenderer from '@astrojs/mdx/server.js';
import reactRenderer from '@astrojs/react/server.js';

// Import your component.
import testComp from 'src/content/docs/components/accordion/svelte.mdx';

// Create the container.
const container = await experimental_AstroContainer.create();

// Add the server renderers for MDX, Svelte, and React.
container.addServerRenderer({ renderer: mdxRenderer } as never);
container.addServerRenderer({ renderer: svelteRenderer } as never);
container.addServerRenderer({ renderer: reactRenderer } as never);

// If you need client-side hydration for React components, add the React client renderer.
// container.addClientRenderer({
// 	name: '@astrojs/react',
// 	entrypoint: '@astrojs/react/client.js'
// });

export const GET: APIRoute = async () => {
	// Render the component to a string.
	const result = await container.renderToString(testComp as never, {
        partial: true
    });

	return new Response(result, {
		headers: { 'Content-Type': 'text/plain; charset=utf-8' }
	});
};
