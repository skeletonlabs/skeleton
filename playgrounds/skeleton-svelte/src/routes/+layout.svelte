<script lang="ts">
	import { resolve } from '$app/paths';
	import './layout.css';
	import LightSwitch from './light-switch.svelte';

	const { children } = $props();

	const components = Object.keys(import.meta.glob('/src/routes/components/*/+page.svelte')).map((path) => {
		const href = path.replace('/src/routes', '').replace('/+page.svelte', '');
		const name = href
			.split('/')
			.pop()!
			.split('-')
			.map((str) => str.charAt(0).toUpperCase() + str.slice(1))
			.join(' ');
		return { href, name };
	});
</script>

<div class="grid h-screen grid-cols-[320px_minmax(0,1fr)]">
	<div class="bg-surface-100-900 space-y-8 overflow-y-auto p-8">
		<header class="flex justify-between items-center">
			<a class="inline-block text-sm bg-orange-500 p-2 font-mono font-bold text-white" href={resolve('/')}>skeleton-svelte</a>
			<LightSwitch />
		</header>
		<hr class="hr" />
		<div class="flex flex-col gap-4">
			<div class="font-bold">Components</div>
			<nav class="text-sm flex flex-col gap-1">
				{#each components as component (component.href)}
					<a class="anchor" href={component.href}> {component.name} </a>
				{/each}
			</nav>
		</div>
	</div>
	<main class="space-y-8 overflow-y-auto p-8 pb-96">
		{@render children?.()}
	</main>
</div>
