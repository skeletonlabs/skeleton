<script lang="ts">
	import PageHeader from '$lib/components/layout/page-header.svelte';
	import { getCommunityProjects } from '$lib/remote/community/get-projects.remote';
	import ArrowRightIcon from '@lucide/svelte/icons/arrow-right';

	const projects = $derived(await getCommunityProjects());
</script>

<div>
	<PageHeader title="Community">
		{#snippet description()}
			<p class="opacity-60">A curated collection of tools maintained by the community.</p>
		{/snippet}
	</PageHeader>

	<div class="container-page">
		<div class="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8">
			<!-- Loop Cards -->
			{#each projects as project (project.slug)}
				<a href="/content/community/{project.slug}" class="card bg-surface-50-950 border border-surface-200-800 overflow-hidden">
					<div class="p-4 space-y-4">
						<!-- Header -->
						<header class="space-y-2">
							<div class="flex items-center gap-2">
								<img src={project.author.avatar} alt={project.name} class="size-6 rounded-full" />
								<h2 class="h3">{project.name}</h2>
							</div>
							<p class="opacity-60">{project.tagline}</p>
						</header>
						<!-- Image -->
						<img
							src={project.images.card.src}
							alt={project.images.card.alt}
							class="w-full aspect-video border border-surface-200-800 rounded-container"
						/>
						<!-- Footer -->
						<footer class="flex justify-between items-center gap-4">
							<!-- Categories -->
							<div class="flex flex-wrap gap-1">
								{#each project.categories as category (category)}
									<span class="badge preset-tonal">{category}</span>
								{/each}
							</div>
							<!-- View Button -->
							<span class="btn preset-filled">
								<span>View</span>
								<ArrowRightIcon class="size-elem-sm" />
							</span>
						</footer>
					</div>
				</a>
			{/each}
		</div>
	</div>
</div>
