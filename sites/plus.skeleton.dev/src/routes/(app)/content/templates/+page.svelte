<script lang="ts">
	import PageHeader from '$lib/components/layout/page-header.svelte';
	import { getTemplates } from '$lib/remote/templates/get-templates.remote';
	import { plusState } from '$lib/state/plus.svelte';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import ArrowUpRightIcon from '@lucide/svelte/icons/arrow-up-right';
	import LockIcon from '@lucide/svelte/icons/lock';

	const templates = $derived(await getTemplates());
</script>

<PageHeader title="Templates">
	{#snippet description()}
		<p class="opacity-60">Ready-to-use website templates built with Skeleton.</p>
	{/snippet}
</PageHeader>

<div class="container-page">
	<div class="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8">
		{#each templates as template (template.slug)}
			{@const locked = template.isPremium && !plusState.unlocked}
			<article class="card bg-surface-50-950 border border-surface-200-800 overflow-hidden">
				<!-- Image -->
				<a href="/content/templates/{template.slug}" class="block p-4 pb-0">
					<img
						src={template.images.card.src}
						alt={template.images.card.alt}
						class="w-full aspect-video rounded-container border border-surface-200-800"
					/>
				</a>
				<!-- Footer -->
				<footer class="p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
					<!-- Title + Category -->
					<a href="/content/templates/{template.slug}" class="space-y-0.5">
						<div class="flex items-center gap-2">
							<h2 class="h4">{template.name}</h2>
							{#if template.isPremium}
								<span class="badge preset-tonal">PLUS</span>
							{/if}
						</div>
						<p class="text-sm opacity-60">{template.category}</p>
					</a>
					<!-- Actions -->
					<div class="flex items-center gap-2">
						<a
							href={template.previewUrl}
							target="_blank"
							rel="noopener noreferrer"
							class="btn preset-tonal"
							aria-label="Preview {template.name}"
						>
							<span>Preview</span>
							<ArrowUpRightIcon />
						</a>
						{#if locked}
							<a href="/overview/pricing" class="btn preset-filled" aria-label="Unlock {template.name} with Plus">
								<LockIcon />
								<span>Unlock with Plus</span>
							</a>
						{:else}
							<a href="/content/templates/{template.slug}" class="btn preset-filled" aria-label="Download {template.name}">
								<span>View</span>
								<ArrowRight />
							</a>
						{/if}
					</div>
				</footer>
			</article>
		{/each}
	</div>
</div>
