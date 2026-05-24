<script lang="ts">
	import DecorStripes from '$lib/components/layout/decor-stripes.svelte';
	import PageHeader from '$lib/components/layout/page-header.svelte';
	import { getTemplate } from '$lib/remote/templates/get-templates.remote';
	import { plusState } from '$lib/state/plus.svelte';
	import ArrowUpRightIcon from '@lucide/svelte/icons/arrow-up-right';
	import ChevronDownIcon from '@lucide/svelte/icons/chevron-down';
	import DownloadIcon from '@lucide/svelte/icons/download';
	import LockIcon from '@lucide/svelte/icons/lock';
	import { Menu, Portal } from '@skeletonlabs/skeleton-svelte';

	const template = $derived(await getTemplate());
	const locked = $derived(!!template?.isPremium && !plusState.unlocked);
</script>

{#if template}
	<PageHeader title={template.name}>
		{#snippet description()}
			<p class="opacity-60">{template.tagline}</p>
		{/snippet}
		{#snippet trail()}
			<a href={template.previewUrl} target="_blank" rel="noopener noreferrer" class="btn preset-outlined">
				<ArrowUpRightIcon />
				<span>Preview</span>
			</a>
			{#if locked}
				<a href="/overview/pricing" class="btn preset-filled">
					<LockIcon />
					<span>Unlock with Plus</span>
				</a>
			{:else}
				<Menu positioning={{ placement: 'bottom-end' }}>
					<Menu.Trigger class="btn preset-filled">
						<DownloadIcon />
						<span>Download</span>
						<ChevronDownIcon class="size-elem-sm opacity-60" />
					</Menu.Trigger>
					<Portal>
						<Menu.Positioner>
							<Menu.Content class="z-50">
								<Menu.ItemGroup>
									<Menu.ItemGroupLabel>Choose your framework</Menu.ItemGroupLabel>
									{#each template.downloads as fw (fw.key)}
										<Menu.Item value={fw.key}>
											{#snippet element(attributes: Record<string, unknown>)}
												<a {...attributes} href={fw.href} download>
													<Menu.ItemText>{fw.label}</Menu.ItemText>
												</a>
											{/snippet}
										</Menu.Item>
									{/each}
								</Menu.ItemGroup>
							</Menu.Content>
						</Menu.Positioner>
					</Portal>
				</Menu>
			{/if}
		{/snippet}
	</PageHeader>

	<!-- Hero Screenshot -->
	<img src={template.images.hero.src} alt={template.images.hero.alt} class="w-full aspect-video border-b border-surface-200-800" />

	<!-- Decor: Stripes -->
	<DecorStripes class="h-6" />

	<!-- Screenshot Grid -->
	{#if template.images.screenshots.length > 0}
		<div
			class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 border-t border-b border-surface-200-800 divide-x divide-y lg:divide-y-0 divide-surface-200-800"
		>
			{#each template.images.screenshots as screenshot (screenshot.src)}
				<img src={screenshot.src} alt={screenshot.alt} class="w-full aspect-square" />
			{/each}
		</div>
	{/if}

	<div class="grid grid-cols-1 lg:grid-cols-[75%_25%] divide-y lg:divide-y-0 lg:divide-x divide-surface-200-800">
		<!-- About -->
		<section class="container-cell space-y-2">
			<h2 class="h2">About</h2>
			<p class="opacity-60">{template.description}</p>
		</section>

		<!-- Stack -->
		<section class="container-cell space-y-4" aria-label="Stack">
			{#each template.stack as name (name)}
				<p class="font-medium">{name}</p>
			{/each}
		</section>
	</div>
{/if}
