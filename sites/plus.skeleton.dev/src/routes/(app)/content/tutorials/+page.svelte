<script lang="ts">
	import { page } from '$app/state';
	import PageHeader from '$lib/components/layout/page-header.svelte';
	import ArrowRightIcon from '@lucide/svelte/icons/arrow-right';
	import BookOpenIcon from '@lucide/svelte/icons/book-open';
	import ChevronDownIcon from '@lucide/svelte/icons/chevron-down';
	import LockIcon from '@lucide/svelte/icons/lock';
	import { Accordion, SegmentedControl } from '@skeletonlabs/skeleton-svelte';

	let tier = $state(page.url.searchParams.get('tier') ?? 'beginner');

	const placeholderDescription = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.';
	const placeholderLessons = [
		{ title: 'Lesson 1', description: placeholderDescription, href: '/content/tutorials/beginner/fundamentals/lession-1' },
		{ title: 'Lesson 2', description: placeholderDescription, href: '/content/tutorials/beginner/fundamentals/lession-2' },
		{ title: 'Lesson 3', description: placeholderDescription, href: '/content/tutorials/beginner/fundamentals/lession-3' },
	];
	const tiers = {
		beginner: [
			{ value: 'fundamentals', title: 'Fundamentals', lessons: placeholderLessons },
			{ value: 'integrations', title: 'Integrations', lessons: placeholderLessons },
		],
		advanced: [
			{ value: 'dynamic-theme-loading', title: 'Dynamic Theme Loading', lessons: placeholderLessons },
			{ value: 'light-switch', title: 'Light Switch', lessons: placeholderLessons },
			{ value: 'table-of-contents', title: 'Table of Contents', lessons: placeholderLessons },
			{ value: 'floating-ui-attachments', title: 'Floating UI Attachments', lessons: placeholderLessons },
		],
	};
</script>

<PageHeader title="Tutorials">
	{#snippet description()}
		<p class="opacity-60">Learn how to Skeleton works, from fundamentals to advanced usage</p>
	{/snippet}
	{#snippet trail()}
		{#if tier === 'advanced'}
			<a href="/overview/pricing" class="btn preset-filled" aria-label="Unlock with Plus">
				<LockIcon />
				<span>Unlock with Plus</span>
			</a>
		{/if}
	{/snippet}
</PageHeader>

<div class="container-page">
	<!-- Tier Selection -->
	<header class="flex justify-between items-center gap-4">
		<SegmentedControl value={tier} onValueChange={(details) => (tier = details.value ?? tier)} class="inline-block">
			<SegmentedControl.Control>
				<SegmentedControl.Indicator />
				<SegmentedControl.Item value="beginner">
					<SegmentedControl.ItemText>Beginner</SegmentedControl.ItemText>
					<SegmentedControl.ItemHiddenInput />
				</SegmentedControl.Item>
				<SegmentedControl.Item value="advanced">
					<SegmentedControl.ItemText>Advanced</SegmentedControl.ItemText>
					<SegmentedControl.ItemHiddenInput />
				</SegmentedControl.Item>
			</SegmentedControl.Control>
		</SegmentedControl>
		<div>
			<label class="label">
				<span class="sr-only">Search</span>
				<input type="search" class="input" placeholder="Search..." />
			</label>
		</div>
	</header>
	<!-- Content -->
	<section class="space-y-2">
		<!-- Chapters -->
		<Accordion collapsible>
			{#each tiers[tier as keyof typeof tiers] as chapter (chapter.value)}
				<Accordion.Item value={chapter.value} disabled={tier === 'advanced'}>
					<Accordion.ItemTrigger
						class="card bg-surface-100-900 border border-surface-200-800 p-4 grid grid-cols-[auto_1fr_auto] items-center gap-4"
					>
						<figure class="h-full aspect-square preset-filled-primary-500 flex justify-center items-center rounded-container">
							<BookOpenIcon class="size-[50%]" />
						</figure>
						<h3 class="h3">{chapter.title}</h3>
						<div class="flex items-center gap-4">
							<span class="text-sm opacity-60">{chapter.lessons.length} Lessons</span>
							<Accordion.ItemIndicator>
								<ChevronDownIcon class="size-4 transition-transform group-data-[state=open]:rotate-180" />
							</Accordion.ItemIndicator>
						</div>
					</Accordion.ItemTrigger>
					{#if tier !== 'advanced'}
						<Accordion.ItemContent class="space-y-4">
							{#each chapter.lessons as lesson, i}
								{#if i > 0}<hr class="hr" />{/if}
								<a href={lesson.href} class="flex justify-between items-center gap-4">
									<div>
										<h4 class="h4">{lesson.title}</h4>
										<p class="opacity-60">{lesson.description}</p>
									</div>
									<span class="btn preset-filled">
										<span>Start</span>
										<ArrowRightIcon />
									</span>
								</a>
							{/each}
						</Accordion.ItemContent>
					{/if}
				</Accordion.Item>
			{/each}
		</Accordion>
	</section>
</div>
