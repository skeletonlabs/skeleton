/// <reference types="vite/client" />
import { createServerFn } from '@tanstack/react-start';

function capitalize(str: string) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

export const getComponents = createServerFn().handler(async () => {
	return Object.keys(import.meta.glob('/src/routes/components/*/index.tsx')).map((path) => {
		const href = path.replace('/src/routes', '').replace('/index.tsx', '');
		const name = href.split('/').pop()!.split('-').map(capitalize).join(' ');
		return { href, name };
	});
});
