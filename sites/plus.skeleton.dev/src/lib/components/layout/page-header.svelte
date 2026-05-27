<script lang="ts">
	import { page } from '$app/state';
	import DecorCorners from './decor-corners.svelte';
	import DecorStripes from './decor-stripes.svelte';
	import ChevronRightIcon from '@lucide/svelte/icons/chevron-right';
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	interface Props extends HTMLAttributes<HTMLElement> {
		title?: string;
		lead?: Snippet;
		description?: Snippet;
		trail?: Snippet;
	}

	const { title, lead, description, trail, class: classes, ...rest }: Props = $props();

	function formatLabel(segment: string): string {
		return segment.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
	}

	// Exclude leading paths such as `/content`
	const crumbExclusions = ['content'];

	const crumbs = $derived.by(() => {
		const segments = page.url.pathname.split('/').filter((s) => s);
		const withHrefs = segments.map((segment, i) => ({
			segment,
			href: '/' + segments.slice(0, i + 1).join('/'),
		}));
		const visible = withHrefs.filter(({ segment }) => !crumbExclusions.includes(segment));
		return visible.map(({ segment, href }, i) => ({
			label: formatLabel(segment),
			href,
			current: i === visible.length - 1,
		}));
	});

	const currentLabel = $derived(crumbs.findLast((c) => c.current)?.label);
</script>

<DecorCorners corners={['bl', 'br']}>
	<header class="container-cell border-b border-surface-200-800 flex flex-col lg:flex-row lg:items-center gap-4 {classes}">
		<!-- Lead -->
		{#if lead}
			<div>{@render lead()}</div>
		{/if}
		<!-- Content -->
		<div class="flex-1 space-y-1">
			<!-- Breadcrumbs -->
			{#if crumbs.length > 1}
				<nav aria-label="Breadcrumb">
					<ol class="flex items-center gap-2 text-sm">
						{#each crumbs as crumb, i (crumb.href)}
							{#if i > 0}
								<li aria-hidden="true">
									<ChevronRightIcon class="opacity-50 size-elem-sm" />
								</li>
							{/if}
							<li>
								{#if crumb.current}
									<span aria-current="page">{crumb.label}</span>
								{:else}
									<a class="opacity-60 hover:underline" href={crumb.href}>{crumb.label}</a>
								{/if}
							</li>
						{/each}
					</ol>
				</nav>
			{/if}
			<!-- Title -->
			<h1 class="h1">{title ?? currentLabel}</h1>
			<!-- Description -->
			{#if description}
				<div class="space-y-2">
					{@render description()}
				</div>
			{/if}
		</div>
		<!-- Trail -->
		{#if trail}
			<div class="lg:self-end flex items-center gap-2">{@render trail()}</div>
		{/if}
	</header>
</DecorCorners>

<!-- Decor: Stripes -->
<DecorStripes class="h-6" />
