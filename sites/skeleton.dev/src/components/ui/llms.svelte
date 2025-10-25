<script lang="ts">
	import { ArrowUpRightIcon, ChevronDownIcon } from '@lucide/svelte';
	import { Popover, Portal } from '@skeletonlabs/skeleton-svelte';
	import type { CollectionEntry } from 'astro:content';

	interface Props {
		url: URL;
	}

	const { url }: Props = $props();

	const prompt = $derived(
		`The following is a documentation page from Skeleton UI (a UI-toolkit build on top of Tailwind and provides framework agnostic components): ${url}. Be ready to help answer questions about this page.`,
	);

	const links = $derived([
		{
			title: 'ChatGPT',
			href: new URL('https://chatgpt.com/', new URLSearchParams({ prompt }).toString()),
		},
		{
			title: 'Claude',
			href: new URL('https://claude.ai/new', new URLSearchParams({ q: prompt }).toString()),
		},
	]);
</script>

<Popover>
	<Popover.Trigger class="chip preset-filled-surface-200-800">
		<span>LLM</span>
		<ChevronDownIcon class="size-4 opacity-50" />
	</Popover.Trigger>
	<Portal>
		<Popover.Positioner class="z-[51]!">
			<Popover.Content class="card bg-surface-50-950 border border-surface-200-800 p-4 space-y-4 shadow-xl">
				<nav>
					{#each links as link (link)}
						<a href={link.toString()} target="_blank" rel="noopener noreferrer" class="btn justify-between hover:preset-tonal">
							<span>{link.title}</span>
							<ArrowUpRightIcon class="size-4" />
						</a>
					{/each}
				</nav>
			</Popover.Content>
		</Popover.Positioner>
	</Portal>
</Popover>
