<script lang="ts">
	import PageHeader from '$lib/components/layout/page-header.svelte';
	import { getCommunityProject } from '$lib/remote/community/get-projects.remote';
	import ArrowUpRightIcon from '@lucide/svelte/icons/arrow-up-right';
	import BadgeCheckIcon from '@lucide/svelte/icons/badge-check';

	const project = $derived(await getCommunityProject());
</script>

{#if project}
	<div>
		<PageHeader title={project.name}>
			{#snippet description()}
				<p class="opacity-60">{project.tagline}</p>
				<div class="flex items-center gap-2 text-sm">
					<img src={project.author.avatar} alt={project.author.handle} class="size-6 rounded-full" />
					<span>by {project.author.handle}</span>
				</div>
			{/snippet}
			{#snippet trail()}
				<a href={project.link} target="_blank" rel="noopener noreferrer" class="btn preset-filled">
					<span>Visit Website</span>
					<ArrowUpRightIcon class="size-elem-sm" />
				</a>
			{/snippet}
		</PageHeader>

		<!-- Hero -->
		<img src={project.images.hero.src} alt={project.images.hero.alt} class="w-full aspect-video border-b border-surface-200-800" />

		<div class="container-page space-y-8">
			<!-- Content + Sidebar -->
			<div class="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_280px] gap-8">
				<!-- Main -->
				<div class="space-y-8">
					<!-- About -->
					<section class="space-y-2">
						<h2 class="h3">About</h2>
						<p class="opacity-60">{project.description}</p>
					</section>

					<!-- Screenshots -->
					<section class="space-y-4">
						<h2 class="h3">Screenshots</h2>
						<div class="grid grid-cols-3 gap-4">
							{#each project.images.screenshots as screenshot, i (i)}
								<a href={screenshot.src} target="_blank">
									<img
										src={screenshot.src}
										alt={screenshot.alt}
										class="w-full aspect-video rounded-container border border-surface-200-800"
									/>
								</a>
							{/each}
						</div>
					</section>
				</div>

				<!-- Sidebar -->
				<aside class="space-y-4">
					<!-- Quick Info -->
					<section class="card bg-surface-50-950 border border-surface-200-800 p-4 space-y-3">
						<dl class="space-y-4 text-sm">
							<div class="space-y-1">
								<dt class="text-xs font-medium uppercase opacity-60">Type</dt>
								<dd class="">{project.quickInfo.type}</dd>
							</div>
							<div class="space-y-1">
								<dt class="text-xs font-medium uppercase opacity-60">Pricing</dt>
								<dd class="">{project.quickInfo.pricing}</dd>
							</div>
							<div class="space-y-1">
								<dt class="text-xs font-medium uppercase opacity-60">License</dt>
								<dd class="">{project.quickInfo.license}</dd>
							</div>
						</dl>
					</section>

					<!-- Links -->
					<section class="card bg-surface-50-950 border border-surface-200-800 p-4 space-y-3">
						<p class="text-xs font-medium uppercase opacity-60">Links</p>
						<ul class="space-y-2 text-sm">
							<li>
								<a href={project.link} target="_blank" rel="noopener noreferrer" class="flex items-center gap-1.5 hover:underline">
									<ArrowUpRightIcon class="size-elem-sm opacity-60 shrink-0" />
									<span>{new URL(project.link).hostname}</span>
								</a>
							</li>
							{#each project.socialLinks as link (link.href)}
								<li>
									<a href={link.href} target="_blank" rel="noopener noreferrer" class="flex items-center gap-1.5 hover:underline">
										<ArrowUpRightIcon class="size-elem-sm opacity-60 shrink-0" />
										<span>{link.label}</span>
									</a>
								</li>
							{/each}
						</ul>
					</section>
				</aside>
			</div>
		</div>
	</div>
{/if}
