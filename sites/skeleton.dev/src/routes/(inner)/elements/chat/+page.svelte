<script lang="ts">
	import { faker } from '@faker-js/faker';
	import { onMount } from 'svelte/internal';
	// DocShell
	import DocsShell from '$lib/layouts/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$lib/layouts/DocsShell/types';
	import DocsPreview from '$lib/components/DocsPreview/DocsPreview.svelte';
	// Components
	import { Avatar, CodeBlock, ListBox, ListBoxItem } from '@skeletonlabs/skeleton';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Element,
		name: 'Chat',
		description: 'Create a custom chat feed or AI prompt interface using features provided by Skeleton and Tailwind.'
	};

	// Types
	interface Person {
		id: number;
		avatar: number;
		name: string;
	}
	interface MessageFeed {
		id: number;
		host: boolean;
		avatar: number;
		name: string;
		timestamp: string;
		message: string;
		color: string;
	}

	let elemChat: HTMLElement;
	const lorem = faker.lorem.paragraph();

	// Navigation List
	const people: Person[] = [
		{ id: 0, avatar: 14, name: 'Michael' },
		{ id: 1, avatar: 40, name: 'Janet' },
		{ id: 2, avatar: 31, name: 'Susan' },
		{ id: 3, avatar: 56, name: 'Joey' },
		{ id: 4, avatar: 24, name: 'Lara' },
		{ id: 5, avatar: 9, name: 'Melissa' }
	];
	let currentPerson: Person = people[0];

	// Messages
	let messageFeed: MessageFeed[] = [
		{
			id: 0,
			host: true,
			avatar: 48,
			name: 'Jane',
			timestamp: 'Yesterday @ 2:30pm',
			message: lorem,
			color: 'variant-soft-primary'
		},
		{
			id: 1,
			host: false,
			avatar: 14,
			name: 'Michael',
			timestamp: 'Yesterday @ 2:45pm',
			message: lorem,
			color: 'variant-soft-primary'
		},
		{
			id: 2,
			host: true,
			avatar: 48,
			name: 'Jane',
			timestamp: 'Yesterday @ 2:50pm',
			message: lorem,
			color: 'variant-soft-primary'
		},
		{
			id: 3,
			host: false,
			avatar: 14,
			name: 'Michael',
			timestamp: 'Yesterday @ 2:52pm',
			message: lorem,
			color: 'variant-soft-primary'
		}
	];
	let currentMessage = '';

	function scrollChatBottom(behavior?: ScrollBehavior): void {
		elemChat.scrollTo({ top: elemChat.scrollHeight, behavior });
	}

	function getCurrentTimestamp(): string {
		return new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
	}

	function addMessage(): void {
		const newMessage = {
			id: messageFeed.length,
			host: true,
			avatar: 48,
			name: 'Jane',
			timestamp: `Today @ ${getCurrentTimestamp()}`,
			message: currentMessage,
			color: 'variant-soft-primary'
		};
		// Update the message feed
		messageFeed = [...messageFeed, newMessage];
		// Clear prompt
		currentMessage = '';
		// Smooth scroll to bottom
		// Timeout prevents race condition
		setTimeout(() => {
			scrollChatBottom('smooth');
		}, 0);
	}

	function onPromptKeydown(event: KeyboardEvent): void {
		if (['Enter'].includes(event.code)) {
			event.preventDefault();
			addMessage();
		}
	}

	// When DOM mounted, scroll to bottom
	onMount(() => {
		scrollChatBottom();
	});
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<section class="card">
			<div class="chat w-full h-full grid grid-cols-1 lg:grid-cols-[30%_1fr]">
				<!-- Navigation -->
				<div class="hidden lg:grid grid-rows-[auto_1fr_auto] border-r border-surface-500/30">
					<!-- Header -->
					<header class="border-b border-surface-500/30 p-4">
						<input class="input" type="search" placeholder="Search..." />
					</header>
					<!-- List -->
					<div class="p-4 space-y-4 overflow-y-auto">
						<small class="opacity-50">Contacts</small>
						<ListBox active="variant-filled-primary">
							{#each people as person, i}
								<ListBoxItem bind:group={currentPerson} name="people" value={person}>
									<svelte:fragment slot="lead">
										<Avatar src="https://i.pravatar.cc/?img={person.avatar}" width="w-8" />
									</svelte:fragment>
									{person.name}
								</ListBoxItem>
							{/each}
						</ListBox>
					</div>
					<!-- Footer -->
					<!-- <footer class="border-t border-surface-500/30 p-4">(footer)</footer> -->
				</div>
				<!-- Chat -->
				<div class="grid grid-row-[1fr_auto]">
					<!-- Conversation -->
					<section bind:this={elemChat} class="max-h-[500px] p-4 overflow-y-auto space-y-4">
						{#each messageFeed as bubble, i}
							{#if bubble.host === true}
								<div class="grid grid-cols-[auto_1fr] gap-2">
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
								<div class="grid grid-cols-[1fr_auto] gap-2">
									<div class="card p-4 rounded-tr-none space-y-2 {bubble.color}">
										<header class="flex justify-between items-center">
											<p class="font-bold">{bubble.name}</p>
											<small class="opacity-50">{bubble.timestamp}</small>
										</header>
										<p>{bubble.message}</p>
									</div>
									<Avatar src="https://i.pravatar.cc/?img={bubble.avatar}" width="w-12" />
								</div>
							{/if}
						{/each}
					</section>
					<!-- Prompt -->
					<section class="border-t border-surface-500/30 p-4">
						<div class="input-group input-group-divider grid-cols-[auto_1fr_auto] rounded-container-token">
							<button class="input-group-shim">+</button>
							<textarea
								bind:value={currentMessage}
								class="bg-transparent border-0 ring-0"
								name="prompt"
								id="prompt"
								placeholder="Write a message..."
								rows="1"
								on:keydown={onPromptKeydown}
							/>
							<button class={currentMessage ? 'variant-filled-primary' : 'input-group-shim'} on:click={addMessage}>
								<i class="fa-solid fa-paper-plane" />
							</button>
						</div>
					</section>
				</div>
			</div>
		</section>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<p>
			If you wish to review the source for the complete example above, please tap the <em>Page Source</em> button near the top of the page. We'll
			cover each core principle in the sections below.
		</p>

		<section class="space-y-4">
			<h2 class="h2">Layout Columns</h2>
			<!-- prettier-ignore -->
			<p>
				We recommend using <a class="anchor" href="https://tailwindcss.com/docs/grid-template-columns" target="_blank" rel="noreferrer">Tailwind's grid column utility classes</a> to define horizontal columns for your layout.
			</p>
			<DocsPreview background="neutral">
				<svelte:fragment slot="preview">
					<div class="w-full space-y-4">
						<div class="w-full grid grid-cols-[auto_1fr_auto] gap-1">
							<div class="bg-surface-500/30 p-4">(nav)</div>
							<div class="bg-surface-500/30 p-4">(feed)</div>
							<div class="bg-surface-500/30 p-4">(online)</div>
						</div>
						<div class="w-full grid grid-cols-[auto_1fr] gap-1">
							<div class="bg-surface-500/30 p-4">(nav)</div>
							<div class="bg-surface-500/30 p-4">(feed)</div>
						</div>
					</div>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<p>
						For a fix column width, replace <code class="code">auto</code> with a specific amount, such as
						<code class="code">320px</code>, then <code class="code">1fr</code> will fill remaining space.
					</p>
					<p class="font-bold">Three Column Layout</p>
					<CodeBlock
						language="html"
						code={`
<div class="w-full grid grid-cols-[auto_1fr_auto] gap-1">
	<div class="bg-surface-500/30 p-4">(nav)</div>
	<div class="bg-surface-500/30 p-4">(feed)</div>
	<div class="bg-surface-500/30 p-4">(online)</div>
</div>
					`}
					/>
					<p class="font-bold">Two Column Layout</p>
					<CodeBlock
						language="html"
						code={`
<div class="w-full grid grid-cols-[auto_1fr] gap-1">
	<div class="bg-surface-500/30 p-4">(nav)</div>
	<div class="bg-surface-500/30 p-4">(feed)</div>
</div>
					`}
					/>
				</svelte:fragment>
			</DocsPreview>
		</section>

		<section class="space-y-4">
			<h2 class="h2">Layout Rows</h2>
			<!-- prettier-ignore -->
			<p>
				We recommend using <a class="anchor" href="https://tailwindcss.com/docs/grid-template-rows" target="_blank" rel="noreferrer">Tailwind's grid row utility classes</a> to define vertical layout rows for your layout.
			</p>
			<DocsPreview background="neutral">
				<svelte:fragment slot="preview">
					<div class="w-full grid grid-cols-2 gap-10">
						<div class="h-[240px] grid grid-rows-[auto_1fr_auto] gap-1">
							<div class="bg-surface-500/30 p-4">(search)</div>
							<div class="bg-surface-500/30 p-4">(list)</div>
							<div class="bg-surface-500/30 p-4">(footer)</div>
						</div>
						<div class="h-[240px] grid grid-rows-[1fr_auto] gap-1">
							<div class="bg-surface-500/30 p-4 space-y-4 overflow-y-auto">
								<p>(feed)</p>
								<p>{faker.lorem.paragraph(10)}</p>
							</div>
							<div class="bg-surface-500/30 p-4">(prompt)</div>
						</div>
					</div>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<p class="font-bold">Three Row Layout</p>
					<CodeBlock
						language="html"
						code={`
<div class="h-full grid grid-rows-[auto_1fr_auto] gap-1">
	<div class="bg-surface-500/30 p-4">(search)</div>
	<div class="bg-surface-500/30 p-4">(list)</div>
	<div class="bg-surface-500/30 p-4">(footer)</div>
</div>
					`}
					/>
					<p class="font-bold">Two Row Layout</p>
					<p>
						Note that we've set <a class="anchor" href="https://tailwindcss.com/docs/overflow" target="_blank" rel="noreferrer"
							>overflow-y-auto</a
						> for the chat feed element to enable vertical scrolling.
					</p>
					<CodeBlock
						language="html"
						code={`
<div class="h-full grid grid-rows-[1fr_auto] gap-1">
	<div class="bg-surface-500/30 p-4 overflow-y-auto">(feed)</div>
	<div class="bg-surface-500/30 p-4">(prompt)</div>
</div>
					`}
					/>
				</svelte:fragment>
			</DocsPreview>
		</section>

		<section class="space-y-4">
			<h2 class="h2">Message Feed</h2>
			<p>
				Within our feed element, we'll generate a feed of messages. Note that we'll replace the <em>pre</em> tags in the next section.
			</p>
			<DocsPreview background="neutral">
				<svelte:fragment slot="preview">
					<section class="w-full max-h-[400px] p-4 overflow-y-auto space-y-4">
						{#each messageFeed.slice(0, 2) as bubble, i}
							{#if bubble.host === true}
								<pre class="pre">host: {JSON.stringify(bubble, null, 2)}</pre>
							{:else}
								<pre class="pre">guest: {JSON.stringify(bubble, null, 2)}</pre>
							{/if}
						{/each}
					</section>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<p>
						First, we need source data to work with. The following represents a trivial example with some preformatted fields, such as
						timestamps. In a real world example you might fetch this data from a server.
					</p>
					<CodeBlock
						language="ts"
						code={`
let messageFeed = [
	{
		id: 0,
		host: true,
		avatar: 48,
		name: 'Jane',
		timestamp: 'Yesterday @ 2:30pm',
		message: 'Some message text.',
		color: 'variant-soft-primary'
	},
	{
		id: 1,
		host: false,
		avatar: 14,
		name: 'Michael',
		timestamp: 'Yesterday @ 2:45pm',
		message: 'Some message text.',
		color: 'variant-soft-primary'
	}
];
					`}
					/>
					<p>
						We'll then iterate through our message feed, using a conditional to determine who is the host (read: you) and who is the guest
						you are speaking to. In this simple example we'll use a boolean value called <code class="code">host</code> to determine this.
					</p>
					<CodeBlock
						language="html"
						code={`
<section class="w-full max-h-[400px] p-4 overflow-y-auto space-y-4">
	{#each messageFeed as bubble, i}
		{#if bubble.host === true}
			<!-- Host Message Bubble -->
			<pre>host: {JSON.stringify(bubble, null, 2)}</pre>
		{:else}
			<!-- Guest Message Bubble -->
			<pre>guest: {JSON.stringify(bubble, null, 2)}</pre>
		{/if}
	{/each}
</section>
					`}
					/>
				</svelte:fragment>
			</DocsPreview>
		</section>

		<section class="space-y-4">
			<h2 class="h2">Message Bubbles</h2>
			<p>By mixing Skeleton features with Tailwind styling, we can provided message bubble interfaces for each type of feed post.</p>
			<DocsPreview background="neutral">
				<svelte:fragment slot="preview">
					<!-- Conversation -->
					<section class="max-h-[500px] p-4 overflow-y-auto space-y-4">
						{#each messageFeed.slice(0, 2) as bubble, i}
							{#if bubble.host === true}
								<div class="grid grid-cols-[auto_1fr] gap-2">
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
								<div class="grid grid-cols-[1fr_auto] gap-2">
									<div class="card p-4 rounded-tr-none space-y-2 {bubble.color}">
										<header class="flex justify-between items-center">
											<p class="font-bold">{bubble.name}</p>
											<small class="opacity-50">{bubble.timestamp}</small>
										</header>
										<p>{bubble.message}</p>
									</div>
									<Avatar src="https://i.pravatar.cc/?img={bubble.avatar}" width="w-12" />
								</div>
							{/if}
						{/each}
					</section>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<p class="font-bold">Host Bubble Template</p>
					<p>
						Note our use of the Avatar component and Card element here. We also use <code class="code">rounded-tl-none</code> to ensure the top-left
						corner is pointing at the avatar. This card uses a neutral background color.
					</p>
					<CodeBlock
						language="html"
						code={`
<div class="grid grid-cols-[auto_1fr] gap-2">
	<Avatar src="https://i.pravatar.cc/?img={bubble.avatar}" width="w-12" />
	<div class="card p-4 variant-soft rounded-tl-none space-y-2">
		<header class="flex justify-between items-center">
			<p class="font-bold">{bubble.name}</p>
			<small class="opacity-50">{bubble.timestamp}</small>
		</header>
		<p>{bubble.message}</p>
	</div>
</div>
					`}
					/>
					<p class="font-bold">Guest Bubble Template</p>
					<p>
						We move the avatar to appear on the right and alter the matching corner border radius style. This card utilizes the color class
						provided from the message data.
					</p>
					<CodeBlock
						language="html"
						code={`
<div class="grid grid-cols-[1fr_auto] gap-2">
	<div class="card p-4 rounded-tr-none space-y-2 {bubble.color}">
		<header class="flex justify-between items-center">
			<p class="font-bold">{bubble.name}</p>
			<small class="opacity-50">{bubble.timestamp}</small>
		</header>
		<p>{bubble.message}</p>
	</div>
	<Avatar src="https://i.pravatar.cc/?img={bubble.avatar}" width="w-12" />
</div>
					`}
					/>
				</svelte:fragment>
			</DocsPreview>
		</section>

		<section class="space-y-4">
			<h2 class="h2">Prompt</h2>
			<p>
				We can utilize a Skeleton <a class="anchor" href="/elements/forms">Input Group</a> to create a custom text prompt.
			</p>
			<DocsPreview background="neutral">
				<svelte:fragment slot="preview">
					<div class="input-group input-group-divider grid-cols-[auto_1fr_auto] rounded-container-token">
						<button class="input-group-shim">+</button>
						<textarea
							bind:value={currentMessage}
							class="bg-transparent border-0 ring-0"
							name="prompt"
							id="prompt"
							placeholder="Write a message..."
							rows="1"
						/>
						<button class="variant-filled-primary">Send</button>
					</div>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock language="ts" code={`let currentMessage = '';`} />
					<CodeBlock
						language="html"
						code={`
<div class="input-group input-group-divider grid-cols-[auto_1fr_auto] rounded-container-token">
	<button class="input-group-shim">+</button>
	<textarea
		bind:value={currentMessage}
		class="bg-transparent border-0 ring-0"
		name="prompt"
		id="prompt"
		placeholder="Write a message..."
		rows="1"
	/>
	<button class="variant-filled-primary">Send</button>
</div>
					`}
					/>
				</svelte:fragment>
			</DocsPreview>
		</section>

		<hr />

		<section class="space-y-4">
			<h2 class="h2">Scroll to Bottom</h2>
			<p>
				Chat windows typically remain fixed at the bottom of the scrollable pane. This can be triggered on page load and when a new message
				is added.
			</p>
			<p>Use <code class="code">bind:this</code> to bind your scrollable feed element.</p>
			<CodeBlock language="ts" code={`let elemChat: HTMLElement;`} />
			<CodeBlock language="html" code={`<div bind:this={elemChat} class="overflow-y-auto">(chat)</div>`} />
			<p>
				Then use Javascript's <a
					class="anchor"
					href="https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollTo"
					target="_blank"
					rel="noreferrer">scrollTo</a
				>
				method to scroll the binded element to the bottom on demand. You may also set smooth scrolling via
				<code class="code">behavior: 'smooth'</code>.
			</p>
			<CodeBlock
				language="ts"
				code={`
function scrollChatBottom(behavior?: ScrollBehavior): void {
	elemChat.scrollTo({ top: elemChat.scrollHeight, behavior });
}
				`}
			/>
		</section>
		<section class="space-y-4">
			<h2 class="h2">Add a Message</h2>
			<p>Below we'll cover how to append the message feed with a new message from the host user.</p>
			<p>Per our above examples, we'll use the same <code class="code">messageFeed</code> data structure.</p>
			<CodeBlock language="ts" code={`let messageFeed = [ /* ...*/ ];`} />
			<p>Then bind to the textarea for your prompt in order to capture any message typed by the user.</p>
			<CodeBlock language="ts" code={`let currentMessage = '';`} />
			<CodeBlock
				language="html"
				code={`
<textarea
	bind:value={currentMessage} name="prompt" id="prompt"
	placeholder="Write a message..."
/>
					`}
			/>
			<p>Here's an example of how we might append a new message to the <code class="code">messageFeed</code> array.</p>
			<CodeBlock
				language="ts"
				code={`
function addMessage(): void {
	const newMessage = {
		id: messages.length,
		host: true,
		avatar: 48,
		name: 'Jane',
		timestamp: new date(),
		message: currentMessage,
		color: 'variant-soft-primary'
	};
	// Append the new message to the message feed
	messages = [...messages, newMessage];
	// Clear the textarea message
	currentMessage = '';
	// Smoothly scroll to the bottom of the feed
	setTimeout(() => { scrollChatBottom('smooth'); }, 0);
}
					`}
			/>
			<p>This can be triggered when the prompt's SEND button is clicked.</p>
			<CodeBlock language="html" code={`<button ... on:click={addMessage}>Send</button>`} />
		</section>
	</svelte:fragment>
</DocsShell>
