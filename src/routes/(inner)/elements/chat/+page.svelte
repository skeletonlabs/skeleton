<script lang="ts">
	import { faker } from '@faker-js/faker';
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
		description: 'Create a custom chat or AI prompt interface using Skeleton features paired with Tailwind styling.'
	};

	let elemChat: HTMLElement;
	const lorem =
		'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem, itaque omnis, vel eos minima exercitationem ipsa obcaecati cum veritatis debitis, quia officiis. Temporibus omnis saepe non natus.';

	// Navigation List
	const people: any = [
		{ id: 0, avatar: 14, name: 'Michael' },
		{ id: 1, avatar: 40, name: 'Janet' },
		{ id: 2, avatar: 31, name: 'Susan' },
		{ id: 3, avatar: 56, name: 'Joey' },
		{ id: 4, avatar: 24, name: 'Lara' },
		{ id: 5, avatar: 9, name: 'Melissa' }
	];
	let currentPerson: number = 0;

	// Messages
	let messages: any = [
		{
			id: 0,
			host: true,
			avatar: 48,
			name: 'Jane',
			timestamp: 'Yesterday @ 2:30pm',
			message: lorem,
			emotes: [],
			color: 'variant-soft-primary'
		},
		{
			id: 1,
			host: false,
			avatar: 14,
			name: 'Michael',
			timestamp: 'Yesterday @ 2:45pm',
			message: lorem,
			emotes: [],
			color: 'variant-soft-primary'
		},
		{
			id: 2,
			host: true,
			avatar: 48,
			name: 'Jane',
			timestamp: 'Yesterday @ 2:50pm',
			message: lorem,
			emotes: [],
			color: 'variant-soft-primary'
		},
		{
			id: 3,
			host: false,
			avatar: 14,
			name: 'Michael',
			timestamp: 'Yesterday @ 2:52pm',
			message: lorem,
			emotes: ['🚀', '👍'],
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
			id: messages.length,
			host: true,
			avatar: 48,
			name: 'Jane',
			timestamp: `Today @ ${getCurrentTimestamp()}`,
			message: currentMessage,
			emotes: [],
			color: 'variant-soft-primary'
		};
		// Update messages array
		messages = [...messages, newMessage];
		// Clear prompt
		currentMessage = '';
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
						<!-- <footer class="border-t border-surface-500/30 p-4">(footer)</footer> -->
					</div>
					<!-- Chat -->
					<div class="grid grid-row-[1fr_auto]">
						<!-- Conversation -->
						<section bind:this={elemChat} class="max-h-[500px] p-4 overflow-y-auto space-y-4">
							{#each messages as bubble, i}
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
		<p>
			To view how we constructed the above example, tap the <em>Page Source</em> button near the top of this page. We'll cover how each portion
			of this was setup below.
		</p>
		<section class="space-y-4">
			<h2>Layout Columns</h2>
			<!-- prettier-ignore -->
			<p>
				We recommend using <a class="anchor" href="https://tailwindcss.com/docs/grid-template-columns" target="_blank" rel="noreferrer">Tailwind's grid column styling</a> to define horzontal layout columns.
			</p>
			<DocsPreview background="neutral">
				<svelte:fragment slot="preview">
					<div class="w-full space-y-4">
						<div class="w-full grid grid-cols-[auto_1fr_auto] gap-1">
							<div class="bg-surface-500/30 p-4">(nav)</div>
							<div class="bg-surface-500/30 p-4">(chat)</div>
							<div class="bg-surface-500/30 p-4">(online)</div>
						</div>
						<div class="w-full grid grid-cols-[auto_1fr] gap-1">
							<div class="bg-surface-500/30 p-4">(nav)</div>
							<div class="bg-surface-500/30 p-4">(chat)</div>
						</div>
					</div>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<p>
						For a fix column width, replace <code class="code">auto</code> with the amount, such as
						<code class="code">320px</code>. Then <code>1fr</code> will fill remaining space. In the featured example at the top of the page
						we dropped the <code class="code">gap</code> size and implemented a right border on the navigation column.
					</p>
					<p class="font-bold">Three Column Layout</p>
					<CodeBlock
						language="html"
						code={`
<div class="w-full grid grid-cols-[auto_1fr_auto] gap-1">
	<div class="bg-surface-500/30 p-4">(nav)</div>
	<div class="bg-surface-500/30 p-4">(chat)</div>
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
	<div class="bg-surface-500/30 p-4">(chat)</div>
</div>
					`}
					/>
				</svelte:fragment>
			</DocsPreview>
		</section>
		<section class="space-y-4">
			<h2>Layout Rows</h2>
			<!-- prettier-ignore -->
			<p>
				We recommend using <a class="anchor" href="https://tailwindcss.com/docs/grid-template-rows" target="_blank" rel="noreferrer">Tailwind's grid row styling</a> to define vertical layout rows.
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
								<p>(chat)</p>
								<p>{faker.lorem.paragraph(10)}</p>
							</div>
							<div class="bg-surface-500/30 p-4">(prompt)</div>
						</div>
					</div>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<p>
						Similar to columns you can use <code class="code">auto</code> or a fixed amount and optionally exclude the <code>gap</code>.
					</p>
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
						Note that we've set <a href="https://tailwindcss.com/docs/overflow" target="_blank" rel="noreferrer">overflow-y-auto</a> on the chat
						region to enable vertical scrolling.
					</p>
					<CodeBlock
						language="html"
						code={`
<div class="h-full grid grid-rows-[1fr_auto] gap-1">
	<div class="bg-surface-500/30 p-4 overflow-y-auto">(chat)</div>
	<div class="bg-surface-500/30 p-4">(prompt)</div>
</div>
					`}
					/>
				</svelte:fragment>
			</DocsPreview>
		</section>
		<section class="space-y-4">
			<h2>Message Bubbles</h2>
			<p>
				By mixing our own custom message array, Svelte's <code>#each</code> iterator block, and Skeleton Avatar and Card features, we can create
				our own responsive message bubbles.
			</p>
			<DocsPreview background="neutral">
				<svelte:fragment slot="preview">
					<!-- Conversation -->
					<section bind:this={elemChat} class="max-h-[500px] p-4 overflow-y-auto space-y-4">
						{#each messages.slice(0, 2) as bubble, i}
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
					<p>First, we need source data to work with. You might fetch this from a remote server in a real world application.</p>
					<CodeBlock
						language="ts"
						code={`
let messages = [
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
	}
];
					`}
					/>
					<p>
						Next, we'll iterate through our message and provide a unique template per either the <em>host</em> user or <em>guest</em> user.
						Obviously you may need to tailor this logic based on your data structure, as you may not have a <code class="code">host</code> key.
					</p>
					<CodeBlock
						language="html"
						code={`
<section bind:this={elemChat} class="h-full p-4 overflow-y-auto space-y-4">
	{#each messages as bubble, i}
		{#if bubble.host === true}
			<!-- host bubble here -->
		{:else}
			<!-- guest bubble here -->
		{/if}
	{/each}
</section>
					`}
					/>
					<p>
						Here's the host bubble template. Note our use of the Avatar component and Card element here. We also use <code class="code"
							>rounded-tl-none</code
						> to set the top-left corner to always be pointy.
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
					<p>Here's the guest bubble template. We flip the Avatar to appear on the right and set a different pointy corner.</p>
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
			<h2>Prompt</h2>
			<p>
				We can utlize Skeleton's <a href="/elements/forms" class="anchor">Input Group</a> element to create a custom text prompt.
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
		<section class="space-y-4">
			<h2>Scroll to Bottom</h2>
			<p>Use <code class="code">bind:this</code> to create an element binding for your scrollable chat element.</p>
			<CodeBlock language="ts" code={`let elemChat: HTMLElement;`} />
			<CodeBlock language="html" code={`<div bind:this={elemChat} class="overflow-y-auto">(chat)</div>`} />
			<p>
				You may then utilize the Javascript <a
					class="anchor"
					href="https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollTo"
					target="_blank"
					rel="noreferrer">scrollTo</a
				>
				method to scroll to the bottom of the viewable area. Use
				<code class="code">behavior: 'smooth'</code> to optionally enable smooth scrolling.
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
			<h2>Add a Message</h2>
			<p>First, ensure you have a set of messsage data. We'll provide a static example below.</p>
			<CodeBlock
				language="ts"
				code={`
let messages = [
	{
		id: 0,
		host: true,
		avatar: 48,
		name: 'Jane',
		timestamp: 'Yesterday @ 2:30pm',
		message: lorem,
		color: 'variant-soft-primary'
	},
	// ...
];
					`}
			/>
			<p>Bind to your prompt textarea to be able to capture the contents on demand.</p>
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
			<p>Use the following function to append a new message to the <code class="code">messages</code> array.</p>
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
	// Append the new message to the messages array
	messages = [...messages, newMessage];
	// Clear prompt textarea
	currentMessage = '';
	// Trigger scroll to bottom
	setTimeout(() => { scrollChatBottom('smooth'); }, 0);
}
					`}
			/>
			<p>Trigger this method using a button click or when ENTER is pressed on the textarea.</p>
			<CodeBlock language="html" code={`<button ... on:click={addMessage}>Send</button>`} />
		</section>
	</svelte:fragment>
</DocsShell>
