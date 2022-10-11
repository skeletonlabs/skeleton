<script lang="ts">
	import { writable, type Writable } from 'svelte/store';

	import DocsShell from '$docs/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings, type DocsShellTable } from '$docs/DocsShell/types';

	import { dialogStore, type DialogAlert, type DialogConfirm, type DialogPrompt } from '$lib/utilities/Dialog/stores';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';
	import TabGroup from '$lib/components/Tab/TabGroup.svelte';
	import Tab from '$lib/components/Tab/Tab.svelte';

	const storeDialogVariants: Writable<string> = writable('alert'); // alert | confirm | prompt

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Utility,
		name: 'Dialogs',
		description: 'High priority overlay notification utilizing a dynamic queue system.',
		imports: ['Dialog', 'dialogStore'],
		types: ['DialogAlert', 'DialogConfirm', 'DialogPrompt'],
		source: 'utilities/Drawer'
	};
	const properties: DocsShellTable[] = [
		{
			headings: ['Prop', 'Type', 'Default', 'Description'],
			source: [
				['<code>backdrop</code>', 'string', 'bg-backdrop-token', 'Provide classes to set the backdrop background color.'],
				['<code>blur</code>', 'string', 'backdrop-blur-xs', 'Provide classes to add a backdrop blur.'],
				['<code>background</code>', 'string', 'bg-surface-50 dark:bg-surface-700', 'Provide classes to set the modal card background styles.'],
				['<code>width</code>', 'string', 'max-w-[640px]', 'Provide classes to set max modal width.'],
				['<code>duration</code>', 'number', '100', 'The animation in/out durations. Set to zero (0) for none.']
			]
		}
	];
	const classes: DocsShellTable[] = [
		{
			description: 'Coming soon.'
			// headings: ['Selector', 'Description'],
			// source: [
			// 	['<code>.foo</code>', '...'],
			// 	['<code>.bar</code>', '...']
			// ]
		}
	];
	const a11y: DocsShellTable[] = [
		{ aria: 'https://www.w3.org/WAI/ARIA/apg/patterns/dialogmodal/' },
		{
			label: 'Keyboard Interactions',
			headings: ['Keys', 'Description'],
			source: [['<kbd>Esc</kbd>', ' Dismisses the foremost dialog.']]
		}
	];

	// Local
	let valueConfirm: boolean = false;
	let valuePrompt: string = 'Skeleton';
	const loremText: string =
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem tempora, aliquam dolore amet laudantium sed numquam cum dignissimos. Illum deleniti expedita nam architecto voluptatem quo.';

	// Trigger Dialogs ---

	function dialogAlertBasic(): void {
		const d: DialogAlert = {
			title: 'Welcome to Skeleton.',
			body: loremText
		};
		dialogStore.trigger(d);
	}

	function dialogAlertIcon(): void {
		const d: DialogAlert = {
			icon: '💀',
			title: 'Welcome to Skeleton.',
			body: loremText
		};
		dialogStore.trigger(d);
	}

	function dialogAlertMultiple(): void {
		dialogStore.trigger({ title: 'Dialog One.', body: loremText });
		dialogStore.trigger({ title: 'Dialog Two.', body: loremText });
		dialogStore.trigger({ title: 'Dialog Three.', body: loremText });
	}

	function dialogConfirm(): void {
		const d: DialogConfirm = {
			type: 'confirm',
			title: 'Please Confirm',
			body: 'Are you sure you wish to proceed?',
			result: (r: boolean) => {
				valueConfirm = r;
			}
		};
		dialogStore.trigger(d);
	}

	function dialogPrompt(): void {
		const d: DialogPrompt = {
			type: 'prompt',
			title: 'Enter Name',
			body: 'Provide your first name in the field below.',
			value: valuePrompt,
			result: (r: string) => {
				if (r) {
					valuePrompt = r;
				}
			}
		};
		dialogStore.trigger(d);
	}

	function dialogImage(): void {
		const d: DialogAlert = {
			title: 'Image Example',
			body: 'See the embedded image below.',
			image: 'https://i.imgur.com/5KWywzz.gif'
		};
		dialogStore.trigger(d);
	}

	function dialogHtml(): void {
		const d: DialogAlert = {
			title: 'HTML Example',
			body: 'See the embedded HTML content below.',
			html: `<div class="bg-green-500 p-4">Hello, Skeleton</div>`
		};
		dialogStore.trigger(d);
	}
</script>

<DocsShell {settings} {properties} {classes} {a11y}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<section class="space-y-4">
			<h2 class="sr-only">Examples</h2>
			<nav class="grid grid-cols-1 lg:grid-cols-2 gap-4">
				<div class="card card-body grid grid-cols-1 gap-4">
					<h3>Alerts</h3>
					<div class="flex justify-between items-center space-x-4">
						<div>
							<h4>Basic</h4>
							<p>The simplest form of a dialog.</p>
						</div>
						<button class="btn btn-ghost" on:click={dialogAlertBasic}>Trigger</button>
					</div>
					<div class="flex justify-between items-center space-x-4">
						<div>
							<h4>Icon</h4>
							<p>Shown with an optional icon.</p>
						</div>
						<button class="btn btn-ghost" on:click={dialogAlertIcon}>Trigger</button>
					</div>
					<div class="flex justify-between items-center space-x-4">
						<div>
							<h4>Multiple</h4>
							<p>Queues a set of three dialogs.</p>
						</div>
						<button class="btn btn-ghost" on:click={dialogAlertMultiple}>Trigger</button>
					</div>
				</div>
				<div class="card card-body grid grid-cols-1 gap-4">
					<h3>Embeds</h3>
					<div class="flex justify-between items-center space-x-4">
						<div>
							<h4>Image</h4>
							<p>Includes an embedded image.</p>
						</div>
						<button class="btn btn-ghost" on:click={dialogImage}>Trigger</button>
					</div>
					<div class="flex justify-between items-center space-x-4">
						<div>
							<h4>HTML</h4>
							<p>Displays embedded an styled HTML markup.</p>
						</div>
						<button class="btn btn-ghost" on:click={dialogHtml}>Trigger</button>
					</div>
				</div>
				<div class="card card-body space-y-4">
					<div class="flex justify-between items-center space-x-4">
						<div class="space-y-2">
							<h3>Confirm</h3>
							<p>Dialog with confirm options.</p>
							<div><code>Response: {JSON.stringify(valueConfirm, null, 2)}</code></div>
						</div>
						<button class="btn btn-ghost" on:click={dialogConfirm}>Trigger</button>
					</div>
				</div>
				<div class="card card-body space-y-4">
					<div class="flex justify-between items-center space-x-4">
						<div class="space-y-2">
							<h3>Prompt</h3>
							<p>Prompts the user to input a value.</p>
							<div><code>Response: {JSON.stringify(valuePrompt, null, 2)}</code></div>
						</div>
						<button class="btn btn-ghost" on:click={dialogPrompt}>Trigger</button>
					</div>
				</div>
			</nav>
		</section>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<section class="space-y-4">
			<p>Add the following to your app's root layout so that the component stays in scope for whenever you might trigger it</p>
			<CodeBlock
				language="html"
				code={`<Dialog backdrop="bg-primary-500/50" blur="backdrop-blur-sm" card="bg-primary-500" duration={250} />
        `}
			/>
		</section>
		<!-- Using the Queue -->
		<section class="space-y-4">
			<h2>Create a Dialog Message</h2>
			<p>Create a new dialog using any available type.</p>
			<TabGroup selected={storeDialogVariants}>
				<Tab value="alert">DialogAlert</Tab>
				<Tab value="confirm">DialogConfirm</Tab>
				<Tab value="prompt">DialogPrompt</Tab>
			</TabGroup>
			<!-- Type: DialogAlert -->
			{#if $storeDialogVariants === 'alert'}
				<CodeBlock
					language="js"
					code={`
const dialogMessage: DialogAlert = {
    title: 'Welcome to <strong>Skeleton</strong>.',
    body: 'This is a standard alert dialog.',
};

				`}
				/>
				<!-- Type: DialogConfirm -->
			{:else if $storeDialogVariants === 'confirm'}
				<CodeBlock
					language="js"
					code={`
const dialogMessage: DialogConfirm = {
    type: 'confirm',
    title: 'Please Confirm',
    body: 'Are you sure you wish to proceed?',
    result: (r: boolean) => { console.log(r); }
};

				`}
				/>
				<!-- Type: DialogPrompt -->
			{:else if $storeDialogVariants === 'prompt'}
				<CodeBlock
					language="js"
					code={`
const dialogMessage: DialogPrompt = {
    type: 'prompt',
    title: 'Enter Name',
    body: 'Provide your first name in the field below.',
    value: valuePrompt,
    result: (r: string) => { if (r) { console.log(r); }; }
};

				`}
				/>
			{/if}
		</section>
		<section class="space-y-4">
			<h2>Using the Dialog Queue</h2>
			<p>Use the following methods to add a dialog to the queue, remove the foremost dialog from the queue, or clear the queue completely.</p>
			<CodeBlock language="js" code={`import { dialogStore } from '@brainandbones/skeleton';`} />
			<CodeBlock
				language="js"
				code={`
// Trigger - pass a Dialog
dialogStore.trigger(dialogMessage);

// Close
dialogStore.close();

// Clear
dialogStore.clear();
			`}
			/>
		</section>
		<!-- Embeds -->
		<section class="space-y-4">
			<h2>Embeds</h2>
			<p>You may optionally extend any type of dialog with the following features.</p>
			<CodeBlock
				language="typescript"
				code={`
const dialogMessage: DialogAlert = {
	// ...
	// Image: Inserts an image within the dialog
	image: 'https://source.unsplash.com/random/480x320?skeleton',
	// HTML: Appends HTML markup within the dialog
	html: \`<div class="bg-green-500 p-4">Hello, Skeleton</div>\`
};
			`}
			/>
		</section>
		<hr />
		<!-- Debugging -->
		<section class="space-y-4">
			<h2>Debugging</h2>
			<h3>Log the Queue</h3>
			<p>Use the following to monitor the queue in your console as it updates. Note that Svelte store contents are only visible for the current logged line.</p>
			<CodeBlock language="js" code={`dialogStore.subscribe(() => { console.log($dialogStore); });`} />
			<h3>Visualize the Queue</h3>
			<p>Use the following to display the queue in your UI. Note some properties may not display, such as response.</p>
			<CodeBlock language="html" code={`<pre>queue: {JSON.stringify($dialogStore, null, 2)}</pre>`} />
		</section>
	</svelte:fragment>
</DocsShell>
