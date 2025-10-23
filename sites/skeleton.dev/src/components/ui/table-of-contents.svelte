<script lang="ts" module>
	function useTocObserver(headings: MarkdownHeading[]) {
		let activeHeading = $state<MarkdownHeading | undefined>(headings[0]);
		let previousActiveHeading = $state<MarkdownHeading>();

		$effect(() => {
			const observer = new IntersectionObserver((entries) => {
				for (const entry of entries) {
					const id = `#${entry.target.getAttribute('id')}`;
					const heading = headings.find((heading) => `#${heading.slug}` === id);
					if (entry?.isIntersecting) {
						previousActiveHeading = activeHeading;
						activeHeading = heading;
					} else {
						if (heading === previousActiveHeading) {
							previousActiveHeading = undefined;
						}
						if (activeHeading === heading && previousActiveHeading) {
							activeHeading = previousActiveHeading;
						}
					}
				}
			});

			for (const element of headings.map((heading) => document.getElementById(heading.slug))) {
				if (element) observer.observe(element);
			}

			return () => observer.disconnect();
		});

		return {
			get activeHeading() {
				return activeHeading;
			},
			get previousActiveHeading() {
				return previousActiveHeading;
			},
		};
	}
</script>

<script lang="ts">
	import { SegmentedControl } from '@skeletonlabs/skeleton-svelte';
	import type { MarkdownHeading } from 'astro';

	interface Props {
		url: URL;
		headings: MarkdownHeading[];
	}

	const { url, headings }: Props = $props();

	function getMarginFromDepth(depth: number) {
		return {
			3: 'ml-4',
			4: 'ml-6',
			5: 'ml-8',
			6: 'ml-10',
		}[depth];
	}

	const observer = useTocObserver(headings);
</script>

{#if headings.length > 0}
	<nav class="flex flex-col gap-2">
		<span class="font-bold">On This Page</span>
		<SegmentedControl value={observer.activeHeading?.slug} orientation="vertical">
			<SegmentedControl.Control class="border-none">
				<SegmentedControl.Indicator class="w-0.5" />
				{#each headings as heading (heading)}
					<a href={`#${heading.slug}`} class={`block ${getMarginFromDepth(heading.depth)}`}>
						<SegmentedControl.Item value={heading.slug} class="justify-start">
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
