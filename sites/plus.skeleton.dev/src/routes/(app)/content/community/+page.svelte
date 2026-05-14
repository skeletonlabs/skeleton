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
		<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
			<!-- Loop Cards -->
			{#each projects as project (project.slug)}
				<a href="/content/community/{project.slug}" class="card bg-surface-50-950 border border-surface-200-800 overflow-hidden">
					<!-- Image -->
					<img
						src={project.images.hero.src}
						alt={project.images.hero.alt}
						class="w-full aspect-video object-cover border-b border-surface-200-800"
					/>
					<div class="flex items-end justify-between gap-4 p-4">
						<!-- Content -->
						<header class="space-y-2">
							<div class="flex items-center gap-2">
								<img src={project.author.avatar} alt={project.name} class="size-6 rounded-full" />
								<h2 class="h3">{project.name}</h2>
							</div>
							<p class="opacity-60">{project.tagline}</p>
							<div class="flex flex-wrap gap-1">
								{#each project.categories as category (category)}
									<span class="badge preset-outlined-surface-200-800">{category}</span>
								{/each}
							</div>
						</header>
						<!-- View Button -->
						<span class="btn preset-filled">
							<span>View</span>
							<ArrowRightIcon class="size-elem-sm" />
						</span>
					</div>
				</a>
			{/each}
		</div>
	</div>
</div>
