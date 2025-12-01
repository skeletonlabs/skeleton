<script lang="ts" module>
	function useActiveHeading(headings: MarkdownHeading[]) {
		let activeHeading = $state<MarkdownHeading>();
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
					rootMargin: '0px 0px -85% 0px',
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
	import { scrollY } from 'svelte/reactivity/window';

	interface Props {
		headings: MarkdownHeading[];
	}

	const { headings }: Props = $props();

	const activeHeading = useActiveHeading(headings);

	const scrollTop = $derived(scrollY.current ?? 0);

	function getPaddingFromDepth(depth: number) {
		return {
			1: 'ps-0',
			2: 'ps-4',
			3: 'ps-8',
			4: 'ps-12',
			5: 'ps-16',
			6: 'ps-20',
		}[depth];
	}
</script>

{#if headings.length > 0}
	<nav class="flex flex-col gap-4">
		<!-- Label -->
		<span class="font-bold flex items-center gap-2">On This Page</span>
		<!-- Links -->
		<SegmentedControl value={scrollTop > 32 ? activeHeading()?.slug : undefined} orientation="vertical" class="-ml-4">
			<SegmentedControl.Control class="border-none p-0">
				<SegmentedControl.Indicator class="w-0.5" />
				{#each headings as heading (heading)}
					<SegmentedControl.Item value={heading.slug} class="justify-start p-0 {getPaddingFromDepth(heading.depth)}">
						{#snippet element(attributes: Record)}
							<a {...attributes} href={`#${heading.slug}`}>
								<SegmentedControl.ItemText
									class="text-sm text-surface-contrast-50-950/50 data-[state=checked]:text-surface-contrast-50-950"
								>
									{heading.text}
								</SegmentedControl.ItemText>
								<SegmentedControl.ItemHiddenInput />
							</a>
						{/snippet}
					</SegmentedControl.Item>
				{/each}
			</SegmentedControl.Control>
		</SegmentedControl>
	</nav>
{/if}
