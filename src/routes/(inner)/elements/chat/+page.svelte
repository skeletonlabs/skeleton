<script lang="ts">
	import { onMount } from 'svelte/internal';
	// DocShell
	import DocsShell from '$docs/layouts/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/layouts/DocsShell/types';
	import DocsPreview from '$docs/components/DocsPreview/DocsPreview.svelte';
	// Components
	import Avatar from '$lib/components/Avatar/Avatar.svelte';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';
	import ListBox from '$lib/components/ListBox/ListBox.svelte';
	import ListBoxItem from '$lib/components/ListBox/ListBoxItem.svelte';
	// Sveld
	// import sveldComp from '$lib/.../Component.svelte?raw&sveld';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Element,
		name: 'Chat',
		// cspell:disable-next-line
		description: 'Provides a means to create chat or AI prompt interfaces.'
		// imports: ['Template'],
		// types: ['Template'],
		// stylesheetIncludes: ['all', 'elements'],
		// stylesheets: ['elements/template'],
		// source: 'components/Template',
		// aria: 'https://www.w3.org/WAI/ARIA/apg/'
		// dependencies: [{ label: 'Highlight.js', url: 'https://highlightjs.org/' }],
		// components: [{sveld: sveldComp}],
		// classes: [
		// 	['<code>.foo</code>', '-', '...'],
		// 	['<code>.bar</code>', '-', '...']
		// ],
		// keyboard: [
		// 	['<code>foo</code>', '-', '-', '-', '...'],
		// 	['<code>bar</code>', '-', '-', '-', '...']
		// ]
	};

	let elemChat: HTMLElement;
	const lorem =
		'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem, itaque omnis, vel eos minima exercitationem ipsa obcaecati cum veritatis debitis, quia officiis. Temporibus omnis saepe non natus.';
	let currentPerson: number = 0;
	const people: any = [
		{ id: 0, avatar: 14, name: 'Michael' },
		{ id: 1, avatar: 40, name: 'Janet' },
		{ id: 2, avatar: 31, name: 'Susan' },
		{ id: 3, avatar: 56, name: 'Joey' },
		{ id: 4, avatar: 24, name: 'Lara' },
		{ id: 5, avatar: 9, name: 'Melissa' }
	];
	let message = '';
	// prettier-ignore
	let messages: any = [
		{ id: 0, host: true, avatar: 48, name: 'Jane', timestamp: 'Yesterday @ 2:30pm', message: lorem, emotes: [], color: 'variant-soft-primary', },
		{ id: 1, host: false, avatar: 14, name: 'Michael', timestamp: 'Yesterday @ 2:45pm', message: lorem, emotes: [], color: 'variant-soft-primary' },
		{ id: 2, host: true, avatar: 48, name: 'Jane', timestamp: 'Yesterday @ 2:50pm', message: lorem, emotes: [], color: 'variant-soft-primary', },
		{ id: 3, host: false, avatar: 14, name: 'Michael', timestamp: 'Yesterday @ 2:52pm', message: lorem, emotes: ['🚀', '👍'], color: 'variant-soft-primary' },
	];

	function scrollChatBottom(behavior?: ScrollBehavior): void {
		elemChat.scrollTo({ top: elemChat.scrollHeight, behavior });
	}

	function getCurrentTimestamp(): string {
		return new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
	}

	function addMessage(): void {
		const newMessage = {
			id: messages.length,
			host: true,
			avatar: 48,
			name: 'Jane',
			timestamp: `Today @ ${getCurrentTimestamp()}`,
			message,
			emotes: [],
			color: 'variant-soft-primary'
		};
		// Update messages array
		messages = [...messages, newMessage];
		// Clear prompt
		message = '';
		// Scroll to bottom
		setTimeout(() => {
			scrollChatBottom('smooth');
		}, 0);
	}

	function onPromptKeydown(event: any): void {
		if (['Enter'].includes(event.code)) {
			event.preventDefault();
			addMessage();
		}
	}

	// Lifecycle
	onMount(() => {
		scrollChatBottom();
	});
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<DocsPreview background="neutral" regionViewport="!p-0">
			<svelte:fragment slot="preview">
				<div class="chat w-full h-full grid grid-cols-1 lg:grid-cols-[30%_1fr]">
					<!-- Navigation -->
					<div class="hidden lg:grid grid-rows-[auto_1fr_auto] border-r border-surface-500/50">
						<!-- Header -->
						<header class="border-b border-surface-500/50 p-4">
							<input class="input" type="search" placeholder="Search..." />
						</header>
						<!-- List -->
						<div class="p-4 space-y-4 overflow-y-auto">
							<small class="opacity-50">Contacts</small>
							<ListBox active="variant-filled-primary">
								{#each people as person, i}
									<ListBoxItem bind:group={currentPerson} name="people" value={person.id}>
										<svelte:fragment slot="lead">
											<Avatar src="https://i.pravatar.cc/?img={person.avatar}" width="w-6" />
										</svelte:fragment>
										{person.name}
									</ListBoxItem>
								{/each}
							</ListBox>
						</div>
						<!-- Footer -->
						<!-- <footer class="border-t border-surface-500/50 p-4">(footer)</footer> -->
					</div>
					<!-- Chat -->
					<div class="grid grid-row-[1fr_auto]">
						<!-- Conversation -->
						<section bind:this={elemChat} class="max-h-[500px] p-4 overflow-y-auto space-y-4">
							{#each messages as bubble, i}
								{#if bubble.host === true}
									<div class="grid grid-cols-[48px_1fr] gap-2">
										<Avatar src="https://i.pravatar.cc/?img={bubble.avatar}" width="w-12" />
										<div class="card p-4 variant-soft rounded-tl-none space-y-2">
											<header class="flex justify-between items-center">
												<p class="font-bold">{bubble.name}</p>
												<small class="opacity-50">{bubble.timestamp}</small>
											</header>
											<p>{bubble.message}</p>
										</div>
									</div>
								{:else}
									<div class="grid grid-cols-[1fr_48px] gap-2">
										<div class="card p-4 rounded-tr-none space-y-2 {bubble.color}">
											<header class="flex justify-between items-center">
												<p class="font-bold">{bubble.name}</p>
												<small class="opacity-50">{bubble.timestamp}</small>
											</header>
											<p>{bubble.message}</p>
											<footer class="flex items-center gap-2 -mb-4">
												<button class="btn-icon btn-icon-sm variant-soft">+</button>
												{#each bubble.emotes as emote, i}<span>{emote}</span>{/each}
											</footer>
										</div>
										<Avatar src="https://i.pravatar.cc/?img={bubble.avatar}" width="w-12" />
									</div>
								{/if}
							{/each}
						</section>
						<!-- Prompt -->
						<section class="border-t border-surface-500/50 p-4">
							<div class="input-group input-group-divider grid-cols-[auto_1fr_auto] rounded-container-token">
								<button class="input-group-shim">+</button>
								<textarea
									bind:value={message}
									class="bg-transparent border-0"
									name="prompt"
									id="prompt"
									placeholder="Write a message..."
									rows="1"
									on:keydown={onPromptKeydown}
								/>
								<button class={message ? 'variant-filled-primary' : 'input-group-shim'} on:click={addMessage}>
									<i class="fa-solid fa-paper-plane" />
								</button>
							</div>
						</section>
					</div>
				</div>
			</svelte:fragment>
			<svelte:fragment slot="source">
				<p>
					Given the complexity of the chat interface, we'll cover each feature in detail below. Tap the "page source" button near the top of
					the page to view how this was constructed.
				</p>
				<!-- <CodeBlock language="html" code={`(code snippet)`} /> -->
			</svelte:fragment>
		</DocsPreview>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<section class="space-y-4">
			<h2>Title 1</h2>
			<p>Describe how to use the feature.</p>
			<CodeBlock language="html" code={`(code)`} />
		</section>
		<section class="space-y-4">
			<h2>Title 2</h2>
			<p>Describe how to use the feature.</p>
			<CodeBlock language="html" code={`(code)`} />
		</section>
	</svelte:fragment>
</DocsShell>
