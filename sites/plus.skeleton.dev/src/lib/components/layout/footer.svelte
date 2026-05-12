<script lang="ts">
	import { routes } from '$lib/client/navigation/routes';
	import Skeleton from '$lib/components/branding/skeleton.svelte';
	import ArrowUpRightIcon from '@lucide/svelte/icons/arrow-up-right';
</script>

<footer class="container mx-auto border-t border-l border-r border-surface-200-800">
	<!-- Navigation Row -->
	<div class="grid grid-cols-2 md:grid-cols-4 gap-8 p-8">
		{#each Object.entries(routes) as [section, items] (section)}
			<nav class="space-y-4">
				<h2 class="font-bold capitalize">{section}</h2>
				<ul class="space-y-2">
					{#each items as { label, href, enabled } (label)}
						{@const external = href.startsWith('http')}
						{#if enabled}
							<li>
								<a
									{href}
									class="inline-flex items-center gap-1 anchor"
									target={external ? '_blank' : undefined}
									rel={external ? 'noopener noreferrer' : undefined}
								>
									{label}
									{#if external}
										<ArrowUpRightIcon class="size-elem-sm" />
									{/if}
								</a>
							</li>{/if}
					{/each}
				</ul>
			</nav>
		{/each}
	</div>
	<!-- Bottom Row -->
	<div class="border-t border-surface-200-800 flex justify-between items-center gap-4 p-8">
		<div class="flex items-center gap-2">
			<a href="/" aria-label="Homepage" title="Homepage" class="inline-flex">
				<Skeleton class="fill-current size-elem-2xl" />
			</a>
			<a href="https://www.skeletonlabs.co/" target="_blank" class="text-xs hover:underline">Skeleton Labs</a>
		</div>
		<div class="flex items-center gap-4">
			{#each routes.legal as { label, href } (label)}
				<a {href} class="text-xs hover:underline">{label}</a>
			{/each}
		</div>
	</div>
</footer>
