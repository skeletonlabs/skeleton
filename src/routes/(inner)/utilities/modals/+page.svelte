<script lang="ts">
	import { writable, type Writable } from 'svelte/store';

	// DocShell
	import DocsShell from '$docs/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/DocsShell/types';

	// Utilities
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

	// @ts-expect-error sveld import
	import sveldModal from '$lib/utilities/Modal/Modal.svelte?raw&sveld';

	// Modals Utils
	import type { ModalSettings, ModalComponent } from '$lib/utilities/Modal/types';
	import { modalStore } from '$lib/utilities/Modal/stores';
	import ModalExampleForm from '$lib/utilities/Modal/examples/ModalExampleForm.svelte';
	import ModalExampleList from '$lib/utilities/Modal/examples/ModalExampleList.svelte';
	import ModalExampleEmbed from '$lib/utilities/Modal/examples/ModalExampleEmbed.svelte';
	import TabGroup from '$lib/components/Tab/TabGroup.svelte';
	import Tab from '$lib/components/Tab/Tab.svelte';

	// Stores
	const storeModalStandard: Writable<string> = writable('alert');

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Utility,
		name: 'Modals',
		description: 'High priority dialogs and modals using a dynamic queue system.',
		imports: ['Modal', 'modalStore'],
		types: ['ModalSettings', 'ModalComponent'],
		source: 'utilities/Modal',
		aria: 'https://www.w3.org/WAI/ARIA/apg/patterns/modalmodal/',
		components: [{ sveld: sveldModal }],
		keyboard: [['<kbd>Esc</kbd>', ' Dismisses the foremost modal.']]
	};

	// Standard ---

	function modalAlert(): void {
		const d: ModalSettings = {
			type: 'alert',
			title: 'Welcome to Skeleton',
			body: 'This simple alert modal examples uses <code>type: alert</code> and makes use of the optional <code>title</code>, <code>body</code>, and <code>image</code> values.',
			image: 'https://i.imgur.com/WOgTG96.gif'
		};
		modalStore.trigger(d);
	}

	function modalConfirm(): void {
		const d: ModalSettings = {
			type: 'confirm',
			title: 'Please Confirm',
			body: 'Are you sure you wish to proceed?',
			response: (r: boolean) => {
				if (r) console.log('response:', r);
			}
		};
		modalStore.trigger(d);
	}

	function modalPrompt(): void {
		const d: ModalSettings = {
			type: 'prompt',
			title: 'Enter Name',
			body: 'Provide your first name in the field below.',
			value: 'Skeleton',
			response: (r: string) => {
				if (r) console.log('response:', r);
			}
		};
		modalStore.trigger(d);
	}

	function modalMultiple(): void {
		[1, 2, 3].forEach((dNum: number) => {
			const d: ModalSettings = {
				type: 'alert',
				title: `Modal ${dNum}`,
				body: `The modal body of ${dNum}.`
			};
			modalStore.trigger(d);
		});
	}

	// Custom ---

	function modalComponentForm(): void {
		const c: ModalComponent = { ref: ModalExampleForm };
		const d: ModalSettings = {
			type: 'component',
			title: 'Custom Form Component',
			body: 'Complete the form below and then press submit.',
			component: c,
			response: (r: any) => {
				if (r) console.log('response:', r);
			}
		};
		modalStore.trigger(d);
	}

	function modalComponentList(): void {
		const c: ModalComponent = { ref: ModalExampleList };
		const d: ModalSettings = {
			type: 'component',
			title: 'Custom List Component',
			body: 'Make your selection then press submit.',
			component: c,
			response: (r: any) => {
				if (r) console.log('response:', r);
			}
		};
		modalStore.trigger(d);
	}

	function modalComponentEmbed(): void {
		const c: ModalComponent = { ref: ModalExampleEmbed };
		const d: ModalSettings = {
			type: 'component',
			component: c,
			classes: '!p-0 !bg-black !max-w-[75%]'
		};
		modalStore.trigger(d);
	}
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<section class="space-y-4">
			<div class="card card-body space-y-4">
				<p class="text-center font-bold">Dialog Modals</p>
				<div class="flex justify-center space-x-2">
					<button class="btn btn-ghost-surface" on:click={modalAlert}>Alert</button>
					<button class="btn btn-ghost-surface" on:click={modalConfirm}>Confirm</button>
					<button class="btn btn-ghost-surface" on:click={modalPrompt}>Prompt</button>
					<button class="btn btn-ghost-surface" on:click={modalMultiple}>Multiple</button>
				</div>
			</div>
			<div class="card card-body space-y-4">
				<p class="text-center font-bold">Custom Component Modals</p>
				<div class="flex justify-center space-x-2">
					<button class="btn btn-ghost-surface" on:click={modalComponentForm}>Form</button>
					<button class="btn btn-ghost-surface" on:click={modalComponentList}>List</button>
					<button class="btn btn-ghost-surface" on:click={modalComponentEmbed}>Embed</button>
				</div>
			</div>
		</section>
	</svelte:fragment>

	<!-- /actions/focus-trap -->

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<section class="space-y-4">
			<p>
				Import and add a single instance of the Modal component in your app's root layout. We recommend only adding this <u>ONCE</u> per app
				since it exists in global scope.
			</p>
			<CodeBlock language="html" code={`<Modal />`} />
		</section>
		<!-- Modal Store -->
		<section class="space-y-4">
			<h2>Modal Store</h2>
			<p>When you wish to trigger a modal, import the <code>modalStore</code>, which acts as the modal queue.</p>
			<CodeBlock language="ts" code={`import { modalStore } from '@skeletonlabs/skeleton';`} />
			<h3>Trigger</h3>
			<p>Note that <code>title</code>, <code>body</code>, and <code>image</code> are optional for <u>all</u> modal types.</p>
			<TabGroup selected={storeModalStandard}>
				<Tab value="alert">Alert</Tab>
				<Tab value="confirm">Confirm</Tab>
				<Tab value="prompt">Prompt</Tab>
			</TabGroup>
			{#if $storeModalStandard === 'alert'}
				<CodeBlock
					language="ts"
					code={`
function triggerAlert(): void {
	const alert: ModalSettings = {
		type: 'alert',
		title: 'Example Alert',
		body: 'This is an example modal.',
		image: 'https://i.imgur.com/WOgTG96.gif'
	};
	modalStore.trigger(alert);
}
				`}
				/>
			{:else if $storeModalStandard === 'confirm'}
				<CodeBlock
					language="ts"
					code={`
function triggerConfirm(): void {
	const confirm: ModalSettings = {
		type: 'confirm',
		title: 'Please Confirm',
		body: 'Are you sure you wish to proceed?',
		// confirm = TRUE | cancel = FALSE
		response: (r: boolean) => console.log('response:', r)
	};
	modalStore.trigger(confirm);
}
				`}
				/>
			{:else if $storeModalStandard === 'prompt'}
				<CodeBlock
					language="ts"
					code={`
function triggerPrompt(): void {
	const prompt: ModalSettings = {
		type: 'prompt',
		title: 'Enter Name',
		body: 'Provide your first name in the field below.',
		// Populates the initial input value
		value: 'Skeleton',
		// Returns the updated response value
		response: (r: string) => console.log('response:', r)
	};
	modalStore.trigger(prompt);
}
				`}
				/>
			{/if}
			<!-- Close -->
			<h3>Close</h3>
			<p>Trigger the <code>close()</code> method to remove the first modal in the modal queue.</p>
			<CodeBlock language="ts" code={`modalStore.close();`} />
			<!-- Clear -->
			<h3>Clear</h3>
			<p>Trigger the <code>clear()</code> method completely empty the modal queue.</p>
			<CodeBlock language="ts" code={`modalStore.clear();`} />
			<!-- Debugging -->
			<h3>Debugging the Queue</h3>
			<p>Use the following technique to visualize the contents of the store for debugging.</p>
			<CodeBlock language="html" code={`<pre>queue: {JSON.stringify($modalStore, null, 2)}</pre>`} />
		</section>
		<!-- Customizing Modals -->
		<section class="space-y-4">
			<h2>Customizing Modals</h2>
			<p>
				To customize an individual modal, append <code>classes</code> and provide the classes you wish to be applied to the modal window.
			</p>
			<CodeBlock
				language="ts"
				code={`
const d: ModalSettings = {
	type: 'alert',
	// ...
	classes: '!p-0 !bg-green-500 !max-w-[75%]'
};
				`}
			/>
			<p>Note that <code>!</code> (important) may be required to override some styles.</p>
		</section>
		<!-- Component Modals -->
		<section class="space-y-4">
			<div class="flex items-center space-x-2">
				<span class="badge bg-warning-500">Advanced</span>
				<h2>Component Modals</h2>
			</div>
			<p>You can create a custom modal by passing a <code>ModalComponent</code> object, which includes any Svelte component.</p>
			<CodeBlock
				language="ts"
				code={`
// import MyCustomComponent from '...';\n
function triggerCustomModal(): void {
	const modalComponent: ModalComponent = {
		// Pass a reference to your custom component
		ref: MyCustomComponent,
		// Add your props as key/value pairs
		props: { background: 'bg-red-500' },
		// Provide default slot content as a template literal
		slot: '<p>Skeleton</p>'
	};
	const d: ModalSettings = {
		type: 'component',
		component: modalComponent
		// NOTE: title, body, response, etc are supported!
	};
	modalStore.trigger(d);
}
				`}
			/>
			<p>
				When constructing custom modals, you are responsible for implementing close/submit buttons, as well as triggering the response
				method as needed. To make this process easier to understand, we have provided a few examples to demonstrate the process.
			</p>
			<a
				class="btn btn-filled-accent"
				href="https://github.com/skeletonlabs/skeleton/tree/master/src/lib/utilities/Modal/examples"
				target="_blank"
				rel="noreferrer">View Example Modals</a
			>
			<p>Below are a few tips and recommendations for custom modals:</p>
			<ul class="list-disc list-inside space-y-1">
				<li>
					Import and use the <code>modalStore</code> to interface directly with the active modal queue. <code>$modalStore[0]</code> is the visible
					modal index.
				</li>
				<li>
					Parent props are available via <code>parent</code> - ex: <code>parent.background</code> will provide the background color prop.
				</li>
				<li>
					You can inspect the full list of <a
						href="https://github.com/skeletonlabs/skeleton/blob/master/src/lib/utilities/Modal/Modal.svelte#L95"
						target="_blank"
						rel="noreferrer">available parent prop values</a
					> in the source code.
				</li>
				<li>Use the <code>parent.onClose()</code> or <code>modalStore.close()</code> methods to close the modal.</li>
				<li>Use the <code>$modalStore[0].response('myResponseDataHere');</code> method to return a response value.</li>
			</ul>
		</section>
	</svelte:fragment>
</DocsShell>
