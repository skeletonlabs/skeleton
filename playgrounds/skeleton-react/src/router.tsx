import { routeTree } from './routeTree.gen';
import { createRouter } from '@tanstack/react-router';

export function getRouter() {
	const router = createRouter({
		routeTree,
		scrollRestoration: true,
	});
	return router;
}
