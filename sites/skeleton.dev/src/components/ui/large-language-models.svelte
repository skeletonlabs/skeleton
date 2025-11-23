<script lang="ts">
	import chatgpt from '@/assets/logos/chatgpt.svg?raw';
	import claude from '@/assets/logos/claude.svg?raw';
	import markdown from '@/assets/logos/markdown.svg?raw';
	import { ChevronDownIcon, FileTextIcon } from '@lucide/svelte';
	import { Menu, Portal } from '@skeletonlabs/skeleton-svelte';

	interface Props {
		url: URL;
	}

	const { url }: Props = $props();

	const prompt = $derived(
		`The following is a documentation page from Skeleton UI (a UI-toolkit build on top of Tailwind and provides framework agnostic components): ${url}.md. Be ready to help answer questions about this page.`,
	);

	const links = $derived([
		{
			title: 'View Markdown',
			icon: markdown,
			attributes: {
				href: `${url}.md`,
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

<Menu positioning={{ placement: 'bottom-end' }}>
	<Menu.Trigger class="hidden lg:flex btn btn-sm preset-outlined-surface-200-800 data-[state=open]:brightness-75">
		<FileTextIcon class="size-4" />
		<span>LLM</span>
		<ChevronDownIcon class="size-4 opacity-50" />
	</Menu.Trigger>
	<Portal>
		<Menu.Positioner>
			<Menu.Content class="z-50">
				{#each links as link (link)}
					<Menu.Item class="aria-[current=page]:preset-filled" value={link.attributes.href} closeOnSelect={!!link.attributes.target}>
						{#snippet element(attributes: Record<string, unknown>)}
							<a {...attributes} {...link.attributes}>
								<Menu.ItemText>{link.title}</Menu.ItemText>
								<Menu.ItemIndicator>
									{@html link.icon}
								</Menu.ItemIndicator>
							</a>
						{/snippet}
					</Menu.Item>
				{/each}
			</Menu.Content>
		</Menu.Positioner>
	</Portal>
</Menu>
