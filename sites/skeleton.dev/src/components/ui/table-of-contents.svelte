<script lang="ts" module>
	function useActiveHeading(headings: MarkdownHeading[]) {
		let activeHeading = $state<MarkdownHeading | undefined>(headings[0]);
		$effect(() => {
			const observer = new IntersectionObserver(
				(entries) => {
					for (const entry of entries) {
						const id = `#${entry.target.getAttribute('id')}`;
						const heading = headings.find((heading) => `#${heading.slug}` === id);
						if (entry?.isIntersecting) {
							activeHeading = heading;
						}
					}
				},
				{
					rootMargin: '0px 0px -60% 0px',
				},
			);
			for (const element of headings
				.map((heading) => document.getElementById(heading.slug))
				.filter((element): element is HTMLElement => element !== null)) {
				observer.observe(element);
			}
			return () => observer.disconnect();
		});
		return () => activeHeading;
	}
</script>

<script lang="ts">
	import { SegmentedControl } from '@skeletonlabs/skeleton-svelte';
	import type { MarkdownHeading } from 'astro';

	interface Props {
		url: URL;
		headings: MarkdownHeading[];
	}

	const { headings }: Props = $props();

	const activeHeading = useActiveHeading(headings);

	function getPaddingFromDepth(depth: number) {
		return {
			1: 'ps-0',
			2: 'ps-2',
			3: 'ps-4',
			4: 'ps-6',
			5: 'ps-8',
			6: 'ps-10',
		}[depth];
	}
</script>

{#if headings.length > 0}
	<nav class="flex flex-col gap-2">
		<span class="font-bold">On This Page</span>
		<SegmentedControl value={activeHeading()?.slug} orientation="vertical">
			<SegmentedControl.Control class="border-none p-0">
				<SegmentedControl.Indicator class="w-0.5" />
				{#each headings as heading (heading)}
					<a href={`#${heading.slug}`}>
						<SegmentedControl.Item value={heading.slug} class="justify-start text-sm p-0 {getPaddingFromDepth(heading.depth)}">
							<SegmentedControl.ItemText class="data-[state=checked]:text-surface-contrast-50-950 data-[state=checked]:font-semibold">
								{heading.text}
							</SegmentedControl.ItemText>
							<SegmentedControl.ItemHiddenInput />
						</SegmentedControl.Item>
					</a>
				{/each}
			</SegmentedControl.Control>
		</SegmentedControl>
	</nav>
{/if}
