<script lang="ts">
	import Skeleton from '../Branding/Skeleton.svelte';
	import ArrowUpRightIcon from '@lucide/svelte/icons/arrow-up-right';

	const navigation = {
		resources: [
			{ label: 'About', href: '/overview/about' },
			{ label: 'Pricing', href: '/overview/pricing' },
		],
		services: [
			{ label: 'Blocks', href: '/content/blocks' },
			{ label: 'Templates', href: '/content/templates' },
			{ label: 'UI Kit', href: '/content/ui-kit' },
			{ label: 'Tutorials', href: '/content/tutorials' },
			{ label: 'Community', href: '/content/community' },
		],
		design: [
			{ label: 'Theme Studio', href: '/design/themes' },
			{ label: 'Preset Studio', href: '/design/presets' },
			{ label: 'Mesh Studio', href: '/design/mesh' },
		],
		links: [
			{ label: 'Skeleton', href: 'https://www.skeleton.dev' },
			{ label: 'GitHub', href: 'https://github.com/skeletonlabs/skeleton' },
			{ label: 'Discord', href: 'https://discord.gg/EXqV7W8MtY' },
			{ label: 'Bluesky', href: 'https://bsky.app/profile/skeleton.dev' },
			{ label: 'Ko-Fi', href: 'https://ko-fi.com/skeletonlabs' },
		],
	};
	const navigationLegal = [
		{ label: 'License', href: '/legal/license' },
		{ label: 'Privacy', href: '/legal/privacy' },
		{ label: 'Terms', href: '/legal/terms' },
	];
</script>

<footer class="container mx-auto border-t border-l border-r border-surface-200-800">
	<!-- Navigation -->
	<div class="grid grid-cols-2 md:grid-cols-4 gap-8 p-8">
		{#each Object.entries(navigation) as [section, items] (section)}
			<nav class="space-y-4">
				<h2 class="font-bold capitalize">{section}</h2>
				<ul class="space-y-2">
					{#each items as { label, href } (label)}
						{@const external = href.startsWith('http')}
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
						</li>
					{/each}
				</ul>
			</nav>
		{/each}
	</div>

	<!-- Branding -->
	<div class="border-t border-surface-200-800 flex justify-between items-center gap-4 p-8">
		<div class="flex items-center gap-2">
			<a href="/" aria-label="Homepage" title="Homepage" class="inline-flex">
				<Skeleton class="fill-current size-elem-2xl" />
			</a>
			<a href="https://www.skeletonlabs.co/" target="_blank" class="text-xs hover:underline">Skeleton Labs</a>
		</div>
		<div class="flex items-center gap-4">
			{#each navigationLegal as { label, href } (label)}
				<a {href} class="text-xs hover:underline">{label}</a>
			{/each}
		</div>
	</div>
</footer>
