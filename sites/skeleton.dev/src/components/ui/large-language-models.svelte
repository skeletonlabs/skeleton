<script lang="ts">
	import chatgpt from '@/assets/logos/chatgpt.svg?raw';
	import claude from '@/assets/logos/claude.svg?raw';
	import markdown from '@/assets/logos/markdown.svg?raw';
	import { ChevronDownIcon, FileTextIcon } from '@lucide/svelte';
	import { Popover, Portal } from '@skeletonlabs/skeleton-svelte';

	interface Props {
		url: URL;
	}

	const { url }: Props = $props();

	const prompt = $derived(
		`The following is a documentation page from Skeleton UI (a UI-toolkit build on top of Tailwind and provides framework agnostic components): ${url}. Be ready to help answer questions about this page.`,
	);

	const links = $derived([
		{
			title: 'View Markdown',
			icon: markdown,
			attributes: {
				href: `${url.toString()}.md`,
			},
		},
		{
			title: 'Open in ChatGPT',
			icon: chatgpt,
			attributes: {
				href: `https://chatgpt.com/?${new URLSearchParams({ prompt })}`,
				target: '_blank',
				rel: 'noopener noreferrer',
			},
		},
		{
			title: 'Open in Claude',
			icon: claude,
			attributes: {
				href: `https://claude.ai/new?${new URLSearchParams({ q: prompt })}`,
				target: '_blank',
				rel: 'noopener noreferrer',
			},
		},
	]);
</script>

<Popover positioning={{ placement: 'bottom-end' }}>
	<Popover.Trigger class="hidden lg:flex btn btn-sm preset-outlined-surface-200-800 data-[state=open]:brightness-75">
		<FileTextIcon class="size-4" />
		<span>LLM</span>
		<ChevronDownIcon class="size-4 opacity-50" />
	</Popover.Trigger>
	<Portal>
		<Popover.Positioner>
			<Popover.Content class="card bg-surface-50-950 border border-surface-200-800 p-2 shadow-xl">
				<nav class="flex flex-col gap-1">
					{#each links as link (link)}
						<a class="btn-sm flex justify-start items-center gap-2 hover:preset-tonal" {...link.attributes}>
							{@html link.icon}
							<span>{link.title}</span>
						</a>
					{/each}
				</nav>
			</Popover.Content>
		</Popover.Positioner>
	</Portal>
</Popover>
