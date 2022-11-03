<script lang="ts">
	import { writable, type Writable } from 'svelte/store';

	// DocShell
	import DocsShell from '$docs/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/DocsShell/types';

	// Utilities
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

	// @ts-ignore
	import sveldDialog from '$lib/utilities/Dialog/Dialog.svelte?raw&sveld';

	// Dialogs Utils
	import type { DialogSettings, DialogComponent } from '$lib/utilities/Dialog/types';
	import { dialogStore } from '$lib/utilities/Dialog/stores';
	import DialogExampleForm from '$lib/utilities/Dialog/examples/DialogExampleForm.svelte';
	import DialogExampleList from '$lib/utilities/Dialog/examples/DialogExampleList.svelte';
	import DialogExampleEmbed from '$lib/utilities/Dialog/examples/DialogExampleEmbed.svelte';
	import TabGroup from '$lib/components/Tab/TabGroup.svelte';
	import Tab from '$lib/components/Tab/Tab.svelte';

	// Stores
	const storeDialogStandard: Writable<string> = writable('alert');

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Utility,
		name: 'Dialogs',
		description: 'High priority overlay notification utilizing a dynamic queue system.',
		imports: ['Dialog', 'dialogStore'],
		types: ['DialogSettings', 'DialogComponent'],
		source: 'utilities/Dailog',
		aria: 'https://www.w3.org/WAI/ARIA/apg/patterns/dialogmodal/',
		components: [{ sveld: sveldDialog }],
		keyboard: [['<kbd>Esc</kbd>', ' Dismisses the foremost dialog.']]
	};

	// Standard ---

	function dialogAlert(): void {
		const d: DialogSettings = {
			type: 'alert',
			title: 'Welcome to Skeleton',
			body: 'This simple alert dialog examples uses <code>type: alert</code> and makes use of the optional <code>title</code>, <code>body</code>, and <code>image</code> values.',
			image: 'https://i.imgur.com/WOgTG96.gif'
		};
		dialogStore.trigger(d);
	}

	function dialogConfirm(): void {
		const d: DialogSettings = {
			type: 'confirm',
			title: 'Please Confirm',
			body: 'Are you sure you wish to proceed?',
			response: (r: boolean) => {
				if (r) console.log('response:', r);
			}
		};
		dialogStore.trigger(d);
	}

	function dialogPrompt(): void {
		const d: DialogSettings = {
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

	function dialogMultiple(): void {
		[1, 2, 3].forEach((dNum: number) => {
			const d: DialogSettings = {
				type: 'alert',
				title: `Dialog ${dNum}`,
				body: `The dialog body of ${dNum}.`
			};
			dialogStore.trigger(d);
		});
	}

	// Custom ---

	function dialogComponentForm(): void {
		const c: DialogComponent = { ref: DialogExampleForm };
		const d: DialogSettings = {
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
		const d: DialogSettings = {
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
		const d: DialogSettings = {
			type: 'component',
			component: c,
			classes: '!p-0 !bg-black !max-w-[75%]'
		};
		dialogStore.trigger(d);
	}
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<section class="space-y-4">
			<div class="card card-body space-y-4">
				<p class="text-center font-bold">Standard Dialogs</p>
				<div class="flex justify-center space-x-2">
					<button class="btn btn-ghost-surface" on:click={dialogAlert}>Alert</button>
					<button class="btn btn-ghost-surface" on:click={dialogConfirm}>Confirm</button>
					<button class="btn btn-ghost-surface" on:click={dialogPrompt}>Prompt</button>
					<button class="btn btn-ghost-surface" on:click={dialogMultiple}>Multiple</button>
				</div>
			</div>
			<div class="card card-body space-y-4">
				<p class="text-center font-bold">Component Dialog Examples</p>
				<div class="flex justify-center space-x-2">
					<button class="btn btn-ghost-surface" on:click={dialogComponentForm}>Form</button>
					<button class="btn btn-ghost-surface" on:click={dialogComponentList}>List</button>
					<button class="btn btn-ghost-surface" on:click={dialogComponentEmbed}>Embed</button>
				</div>
			</div>
		</section>
	</svelte:fragment>

	<!-- /actions/focus-trap -->

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<section class="space-y-4">
			<p>Import and add a single instance of the Dialog component in your app's root layout. This is only required <u>ONCE</u> per app since it exists in global scope.</p>
			<CodeBlock language="html" code={`<Dialog />`} />
		</section>
		<!-- Dialog Store -->
		<section class="space-y-4">
			<h2>Dialog Store</h2>
			<p>When you wish to trigger a dialog, import the <code>dialogStore</code>, which acts as the dialog queue.</p>
			<CodeBlock language="ts" code={`import { dialogStore } from '@brainandbones/skeleton';`} />
			<h3>Trigger</h3>
			<p>Note that <code>title</code>, <code>body</code>, and <code>image</code> are optional for <u>all</u> dialog types.</p>
			<TabGroup selected={storeDialogStandard}>
				<Tab value="alert">Alert</Tab>
				<Tab value="confirm">Confirm</Tab>
				<Tab value="prompt">Prompt</Tab>
			</TabGroup>
			{#if $storeDialogStandard === 'alert'}
				<CodeBlock
					language="ts"
					code={`
function dialogAlert(): void {
	const d: DialogSettings = {
		type: 'alert',
		title: 'Example Alert',
		body: 'This is an example dialog.',
		image: 'https://i.imgur.com/WOgTG96.gif'
	};
	dialogStore.trigger(d);
}
				`}
				/>
			{:else if $storeDialogStandard === 'confirm'}
				<CodeBlock
					language="ts"
					code={`
function dialogConfirm(): void {
	const d: DialogSettings = {
		type: 'confirm',
		title: 'Please Confirm',
		body: 'Are you sure you wish to proceed?',
		// true = confirm | false = cancel
		response: (r: boolean) => { console.log('response:', r); }
	};
	dialogStore.trigger(d);
}
				`}
				/>
			{:else if $storeDialogStandard === 'prompt'}
				<CodeBlock
					language="ts"
					code={`
function dialogPrompt(): void {
	const d: DialogSettings = {
		type: 'prompt',
		title: 'Enter Name',
		body: 'Provide your first name in the field below.',
		// Populates the initial value
		value: 'Skeleton',
		// Returns the updated value in the response
		response: (r: string) => { console.log('response:', r); }
	};
	dialogStore.trigger(d);
}
				`}
				/>
			{/if}
			<!-- Close -->
			<h3>Close</h3>
			<p>Trigger the <code>close()</code> method to remove the first dialog in the queue.</p>
			<CodeBlock language="ts" code={`dialogStore.close();`} />
			<!-- Clear -->
			<h3>Clear</h3>
			<p>Trigger the <code>clear()</code> method completely empty the store queue.</p>
			<CodeBlock language="ts" code={`dialogStore.clear();`} />
			<!-- Debugging -->
			<h3>Debugging the Queue</h3>
			<p>You can visualize the contents of the store at any time, which can be helpful for debugging.</p>
			<CodeBlock language="html" code={`<pre>queue: {JSON.stringify($dialogStore, null, 2)}</pre>`} />
		</section>
		<!-- Customizing Dialogs -->
		<section class="space-y-4">
			<h2>Customizing Dialogs</h2>
			<p>To customize an individual dialog, append <code>classes</code> to your settings and add the classes you wish to be applied to the dialog modal.</p>
			<CodeBlock
				language="ts"
				code={`
const d: DialogSettings = {
	type: 'alert',
	// ...
	classes: '!p-0 !bg-green-500 !max-w-[75%]'
};
				`}
			/>
			<p>Note that <code>!</code> (important) may be required to override some styles.</p>
		</section>
		<!-- Component Dialogs -->
		<section class="space-y-4">
			<div class="flex items-center space-x-2">
				<span class="badge bg-warning-500">Advanced</span>
				<h2>Component Dialogs</h2>
			</div>
			<p>To create a custom dialog, import and pass a reference to any Svelte component. This will construct and display the contents of the component within the dialog modal window.</p>
			<CodeBlock
				language="ts"
				code={`
function dialogComponent(): void {
	const comp: DialogComponent = {
		// Pass a reference to your custom component
		ref: MyCustomComponent,
		// Add props as key/value pairs
		props: { background: 'bg-red-500' },
		// Provide your 'default' slot content as a template literal
		slot: '<p>Skeleton</p>'
	};
	const d: DialogSettings = {
		type: 'component',
		component: comp
		// NOTE: title, body, response, etc are supported!
	};
	dialogStore.trigger(d);
}
				`}
			/>
			<h3>Constructing a Dialog Component</h3>
			<p>
				When constructing your these components you'll need to implement your options for close/submit buttons, and trigger the dialog response values. To make this process easier, we've provided a
				few examples to demonstrate the process.
			</p>
			<a class="btn btn-filled-accent" href="https://github.com/Brain-Bones/skeleton/tree/feature/master/src/lib/utilities/Dialog/examples" target="_blank" rel="noreferrer">View Component Examples</a>
			<p>A few things to note:</p>
			<ul class="list-disc list-inside space-y-1">
				<li>Import and use the <code>dialogStore</code> to interface directly with the active dialog queue.</li>
				<li>Most Dialog component props are available via the <code>parent</code> prop - ex: <code>parent.background</code> will provide the background color.</li>
				<li>
					You can reference the full list of <a href="https://github.com/Brain-Bones/skeleton/blob/feature/master/src/lib/utilities/Dialog/Dialog.svelte#L95" target="_blank" rel="noreferrer"
						>available parent prop values</a
					>.
				</li>
				<li>Use the <code>parent.onClose()</code> or <code>dialogStore.close()</code> methods to close the dialog.</li>
				<li>Use the <code>$dialogStore[0].response('someDataHere');</code> method to return a response value.</li>
			</ul>
		</section>
	</svelte:fragment>
</DocsShell>
