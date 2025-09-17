<script lang="ts">
	import { resolve } from '$app/paths';
	import type { RouteId } from '$app/types';
	import '../app.css';
	import LightSwitch from './light-switch.svelte';

	let { children } = $props();

	function kebabToPascalCase(str: string) {
		return str
			.split('-')
			.map((part) => part.charAt(0).toUpperCase() + part.slice(1))
			.join('');
	}

	const routes = Object.keys(import.meta.glob('./**/*/+page.svelte')).map((route) => {
		const href = resolve(route.replace(/^\.\//, '/').replace(/\/\+page\.svelte$/, '') as RouteId);
		const name = kebabToPascalCase(href.split('/').pop()!);
		return { href, name };
	});
</script>

<div class="grid h-screen grid-cols-[320px_minmax(0,_1fr)]">
	<div class="bg-surface-100-900 space-y-8 overflow-y-auto p-8">
		<header class="flex justify-between items-center">
			<a class="inline-block text-sm bg-orange-500 p-2 font-mono font-bold text-white" href={resolve('/')}>skeleton-svelte</a>
			<LightSwitch />
		</header>
		<hr class="hr" />
		<div class="flex flex-col gap-4">
			<div class="font-bold">Components</div>
			<nav class="text-sm flex flex-col gap-1">
				{#each routes as route (route.href)}
					<a class="anchor" href={route.href}> {route.name} </a>
				{/each}
			</nav>
		</div>
	</div>
	<main class="space-y-8 overflow-y-auto p-8">
		{@render children?.()}
	</main>
</div>
