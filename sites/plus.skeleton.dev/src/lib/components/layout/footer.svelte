<script lang="ts">
	import Skeleton from "#lib/components/branding/skeleton.svelte";
	import { routes, type Route } from "#lib/navigation/routes.ts";
	import { resolve } from "$app/paths";
	import DecorCorners from "./decor-corners.svelte";
	import DecorStripes from "./decor-stripes.svelte";
	import ArrowUpRightIcon from "@lucide/svelte/icons/arrow-up-right";

	// A subset of routes in a set order
	const navColuns: Record<string, readonly Route[]> = {
		// TODO
		// overview: routes.overview,
		design: routes.design,
		content: routes.content,
		links: routes.links,
	};
</script>

<footer class="border-surface-200-800 container mx-auto border-t border-r border-l">
	<!-- Navigation Row -->
	<DecorCorners
		corners={["tl", "tr", "bl", "br"]}
		class="container-cell grid grid-cols-2 gap-8 md:grid-cols-3"
	>
		{#each Object.entries(navColuns) as [section, items] (section)}
			<nav class="space-y-4">
				<h2 class="font-bold capitalize">{section}</h2>
				<ul class="space-y-2">
					{#each items as { label, href, icon: Icon, enabled } (label)}
						{@const external = href.startsWith("http")}
						{#if enabled}
							<li>
								<a
									{href}
									class="anchor inline-flex items-center gap-2"
									target={external ? "_blank" : undefined}
									rel={external ? "noopener noreferrer" : undefined}
								>
									{#if Icon}
										<Icon class="size-elem-base" />
									{/if}
									{label}
									{#if external}
										<ArrowUpRightIcon class="size-elem-base" />
									{/if}
								</a>
							</li>{/if}
					{/each}
				</ul>
			</nav>
		{/each}
	</DecorCorners>

	<!-- Decor: Stripes -->
	<DecorStripes class="h-6" />

	<!-- Bottom Row -->
	<div class="container-cell flex items-center justify-between gap-4">
		<div class="flex items-center gap-2">
			<a href={resolve("/(app)")} aria-label="Homepage" title="Homepage" class="inline-flex">
				<Skeleton class="size-elem-2xl fill-current" />
			</a>
			<a href="https://www.skeletonlabs.co/" target="_blank" class="text-xs hover:underline"
				>Skeleton Labs</a
			>
		</div>
		<div class="flex items-center gap-4">
			{#each routes.legal as { label, href } (label)}
				<a {href} class="text-xs hover:underline">{label}</a>
			{/each}
		</div>
	</div>
</footer>
