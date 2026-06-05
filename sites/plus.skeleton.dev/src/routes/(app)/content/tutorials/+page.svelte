<script lang="ts">
	import { page } from '$app/state';
	import PageHeader from '$lib/components/layout/page-header.svelte';
	import { getTutorialsList, type TutorialListChapter, type TutorialList } from '$lib/remote/tutorials/get-tutorials.remote';
	import ArrowRightIcon from '@lucide/svelte/icons/arrow-right';
	import BookOpenIcon from '@lucide/svelte/icons/book-open';
	import ChevronDownIcon from '@lucide/svelte/icons/chevron-down';
	import LockIcon from '@lucide/svelte/icons/lock';
	import { Accordion, SegmentedControl } from '@skeletonlabs/skeleton-svelte';

	let tier = $state(page.url.searchParams.get('tier') ?? 'beginner');
	let search = $state('');

	const locked = $derived(tier == 'advanced');
	const tutorialsList = $derived(await getTutorialsList());
	const filteredTiers = $derived(
		(Object.entries(tutorialsList) as [string, TutorialListChapter[]][]).reduce((acc, [key, chapters]) => {
			acc[key] = chapters
				.map((chapter) => ({
					...chapter,
					lessons: fuzzyMatch(search, chapter.title) ? chapter.lessons : chapter.lessons.filter((l) => fuzzyMatch(search, l.title)),
				}))
				.filter((chapter) => fuzzyMatch(search, chapter.title) || chapter.lessons.length > 0);
			return acc;
		}, {} as TutorialList),
	);

	function fuzzyMatch(query: string, target: string): boolean {
		if (!query) return true;
		const q = query.toLowerCase();
		const t = target.toLowerCase();
		let qi = 0;
		for (let i = 0; i < t.length && qi < q.length; i++) {
			if (t[i] === q[qi]) qi++;
		}
		return qi === q.length;
	}
</script>

<PageHeader title="Tutorials">
	{#snippet description()}
		<p class="opacity-60">Learn how to use Skeleton using our guided tutorials.</p>
	{/snippet}
	{#snippet trail()}
		{#if locked}
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
		<!-- Search -->
		<div>
			<label class="label">
				<span class="sr-only">Search</span>
				<input type="search" class="input" placeholder="Search..." bind:value={search} />
			</label>
		</div>
	</header>
	<!-- Content -->
	<section class="space-y-2">
		<!-- Chapters List -->
		<Accordion collapsible>
			{#each filteredTiers[tier] as chapter (chapter.value)}
				<Accordion.Item value={chapter.value} disabled={tier === 'advanced'}>
					<!-- Chapter Card -->
					<Accordion.ItemTrigger
						class="card bg-surface-50-950 border border-surface-200-800 p-4 grid grid-cols-[auto_1fr_auto] items-center gap-4"
					>
						<figure class="h-full max-h-8 aspect-square preset-filled-primary-500 flex justify-center items-center rounded-container">
							<BookOpenIcon class="size-[50%]" />
						</figure>
						<h3 class="h5 md:h3">{chapter.title}</h3>
						<div class="flex items-center gap-4">
							<span class="text-sm opacity-60">{chapter.lessons.length} Lessons</span>
							{#if !locked}
								<Accordion.ItemIndicator>
									<ChevronDownIcon class="size-4 transition-transform group-data-[state=open]:rotate-180" />
								</Accordion.ItemIndicator>
							{/if}
						</div>
					</Accordion.ItemTrigger>
					<!-- Lessons List -->
					{#if !locked}
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
