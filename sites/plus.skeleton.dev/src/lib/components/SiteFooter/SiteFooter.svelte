<script lang="ts">
	import ArrowUpRightIcon from '@lucide/svelte/icons/arrow-up-right';
	import SkullIcon from '@lucide/svelte/icons/skull';

	const resources = [
		{ label: 'Skeleton', href: 'https://www.skeleton.dev', external: true },
		{ label: 'About', href: '/overview/about' },
		{ label: 'Pricing', href: '/overview/pricing' },
		{ label: 'License', href: '/legal/license' },
		{ label: 'Privacy', href: '/legal/privacy' },
		{ label: 'Terms', href: '/legal/terms' },
	];
	const tools = [
		{ label: 'Blocks', href: '/content/blocks' },
		{ label: 'Templates', href: '/content/templates' },
		{ label: 'UI Kit', href: '/content/ui-kit' },
		{ label: 'Tutorials', href: '/content/tutorials' },
		{ label: 'Community', href: '/content/community' },
	];
	const community = [
		{ label: 'GitHub', href: 'https://github.com/skeletonlabs/skeleton' },
		{ label: 'Discord', href: 'https://discord.gg/EXqV7W8MtY' },
		{ label: 'Bluesky', href: 'https://bsky.app/profile/skeleton.dev' },
		{ label: 'Ko-Fi', href: 'https://ko-fi.com/skeletonlabs' },
	];
</script>

<footer class="container mx-auto border-t border-l border-r border-surface-200-800">
	<div class="grid grid-cols-4 gap-4 p-4">
		<!-- Branding -->
		<div class="space-y-4">
			<a href="/" aria-label="Homepage" title="Homepage" class="inline-flex">
				<SkullIcon class="size-elem-5xl" />
			</a>
			<p class="text-sm text-surface-600-400">
				Powered by <strong class="font-semibold text-surface-950-50">Skeleton Labs</strong>.
			</p>
		</div>

		<!-- Resources -->
		<nav class="space-y-4">
			<h2 class="text-sm font-bold">Resources</h2>
			<ul class="space-y-2">
				{#each resources as { label, href, external } (label)}
					<li>
						<a
							{href}
							class="inline-flex items-center gap-1 text-sm text-surface-600-400 hover:text-surface-950-50"
							target={external ? '_blank' : undefined}
							rel={external ? 'noopener noreferrer' : undefined}
						>
							{label}
							{#if external}<ArrowUpRightIcon class="size-3.5" />{/if}
						</a>
					</li>
				{/each}
			</ul>
		</nav>

		<!-- Tools -->
		<nav class="space-y-4">
			<h2 class="text-sm font-bold">Tools</h2>
			<ul class="space-y-2">
				{#each tools as { label, href } (label)}
					<li>
						<a {href} class="text-sm text-surface-600-400 hover:text-surface-950-50">{label}</a>
					</li>
				{/each}
			</ul>
		</nav>

		<!-- Community -->
		<nav class="space-y-4">
			<h2 class="text-sm font-bold">Community</h2>
			<ul class="space-y-2">
				{#each community as { label, href } (label)}
					<li>
						<a
							{href}
							class="inline-flex items-center gap-1 text-sm text-surface-600-400 hover:text-surface-950-50"
							target="_blank"
							rel="noopener noreferrer"
						>
							{label}
							<ArrowUpRightIcon class="size-3.5" />
						</a>
					</li>
				{/each}
			</ul>
		</nav>
	</div>
</footer>
