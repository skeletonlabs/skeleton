<script lang="ts">
	import DocsShell from '$docs/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/DocsShell/types';

	// Utilities
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

	// @ts-ignore
	import sveldDialog from '$lib/utilities/Dialog/Dialog.svelte?raw&sveld';

	// Dialogs Utils
	import type { Dialog, DialogComponent } from '$lib/utilities/Dialog/stores';
	import { dialogStore } from '$lib/utilities/Dialog/stores';
	import DialogExampleForm from '$lib/utilities/Dialog/examples/DialogExampleForm.svelte';
	import DialogExampleList from '$lib/utilities/Dialog/examples/DialogExampleList.svelte';
	import DialogExampleEmbed from '$lib/utilities/Dialog/examples/DialogExampleEmbed.svelte';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Utility,
		name: 'Dialogs',
		description: 'High priority overlay notification utilizing a dynamic queue system.',
		imports: ['Dialog', 'dialogStore'],
		types: ['DialogAlert', 'DialogConfirm', 'DialogPrompt'],
		source: 'utilities/Dailog',
		aria: 'https://www.w3.org/WAI/ARIA/apg/patterns/dialogmodal/',
		components: [{ sveld: sveldDialog }],
		keyboard: [['<kbd>Esc</kbd>', ' Dismisses the foremost dialog.']]
	};

	// Local
	let valueConfirm: boolean = false;

	function dialogAlert(): void {
		const d: Dialog = {
			type: 'alert',
			title: 'Welcome to Skeleton',
			body: 'This simple alert dialog examples uses <code>type: alert</code> and makes use of the optional <code>title</code>, <code>body</code>, and <code>image</code> values.',
			image: 'https://i.imgur.com/WOgTG96.gif'
		};
		dialogStore.trigger(d);
	}

	function dialogConfirm(): void {
		const d: Dialog = {
			type: 'confirm',
			title: 'Please Confirm',
			body: 'Are you sure you wish to proceed?',
			response: (r: boolean) => {
				valueConfirm = r;
				console.log('response:', r);
			}
		};
		dialogStore.trigger(d);
	}

	function dialogPrompt(): void {
		const d: Dialog = {
			type: 'prompt',
			title: 'Enter Name',
			body: 'Provide your first name in the field below.',
			value: 'Skeleton',
			response: (r: string) => {
				if (r) console.log('response:', r);
			}
		};
		dialogStore.trigger(d);
	}

	function dialogComponentForm(): void {
		const c: DialogComponent = { ref: DialogExampleForm };
		const d: Dialog = {
			type: 'component',
			title: 'Custom Form Component',
			body: 'Complete the form below and then press submit.',
			component: c,
			response: (r: any) => {
				if (r) console.log('response:', r);
			}
		};
		dialogStore.trigger(d);
	}

	function dialogComponentList(): void {
		const c: DialogComponent = { ref: DialogExampleList };
		const d: Dialog = {
			type: 'component',
			title: 'Custom List Component',
			body: 'Make your selection then press submit.',
			component: c,
			response: (r: any) => {
				if (r) console.log('response:', r);
			}
		};
		dialogStore.trigger(d);
	}

	function dialogComponentEmbed(): void {
		const c: DialogComponent = { ref: DialogExampleEmbed };
		const d: Dialog = {
			type: 'component',
			component: c,
			response: (r: any) => {
				if (r) console.log('response:', r);
			}
		};
		dialogStore.trigger(d);
	}
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<section class="space-y-4">
			<div class="card card-body flex justify-center space-x-2">
				<button class="btn btn-ghost-surface" on:click={dialogAlert}>Alert</button>
				<button class="btn btn-ghost-surface" on:click={dialogConfirm}>Confirm</button>
				<button class="btn btn-ghost-surface" on:click={dialogPrompt}>Prompt</button>
			</div>
			<h2>Custom Components</h2>
			<div class="card card-body flex justify-center space-x-2">
				<button class="btn btn-ghost-surface" on:click={dialogComponentForm}>Form</button>
				<button class="btn btn-ghost-surface" on:click={dialogComponentList}>List</button>
				<button class="btn btn-ghost-surface" on:click={dialogComponentEmbed}>Embed</button>
			</div>
		</section>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<section class="space-y-4">
			<p>Add the following to your app's root layout, above the App Shell (if present). This will ensure dialogs can be used from any route in your application.</p>
			<CodeBlock language="html" code={`<Dialog />`} />
		</section>
		<!--
		<section class="space-y-4">
			<h2>Create a Dialog Message</h2>
			<p>Create a new dialog using any available type.</p>
			<TabGroup selected={storeDialogVariants}>
				<Tab value="alert">DialogAlert</Tab>
				<Tab value="confirm">DialogConfirm</Tab>
				<Tab value="prompt">DialogPrompt</Tab>
			</TabGroup>
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
		<section class="space-y-4">
			<h2>Embeds</h2>
			<p>You may optionally extend any type of dialog with the following features.</p>
			<CodeBlock
				language="typescript"
				code={`
const dialogMessage: DialogAlert = {
	// ...(title, body, etc)...
	// Image: Inserts an image within the dialog
	image: 'https://source.unsplash.com/random/480x320?skeleton',
	// HTML: Appends HTML markup within the dialog
	html: \`<div class="bg-green-500 p-4">Hello, Skeleton</div>\`
	// Component: Appends any valid Svelte component
	component: {
		element: GradientHeading,
		props: { tag: 'h1', direction: 'bg-gradient-to-r', from: 'from-primary-500', to: 'to-accent-500' },
		slot: 'Hello Skeleton.'
	}
};
			`}
			/>
		</section>
		<hr />
		<section class="space-y-4">
			<h2>Debugging</h2>
			<h3>Log the Queue</h3>
			<p>Use the following to monitor the queue in your console as it updates. Note that Svelte store contents are only visible for the current logged line.</p>
			<CodeBlock language="js" code={`dialogStore.subscribe(() => { console.log($dialogStore); });`} />
			<h3>Visualize the Queue</h3>
			<p>Use the following to display the queue in your UI. Note some properties may not display, such as response.</p>
			<CodeBlock language="html" code={`<pre>queue: {JSON.stringify($dialogStore, null, 2)}</pre>`} />
		</section> -->
	</svelte:fragment>
</DocsShell>
