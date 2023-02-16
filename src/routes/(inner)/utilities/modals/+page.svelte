<script lang="ts">
	// Docs
	import DocsShell from '$docs/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/DocsShell/types';
	// Modal Examples
	// (NOTE: see other examplpes registered in root +layout.svelte)
	import ModalExampleForm from '$docs/DocsModals/ModalExampleForm.svelte';

	// Utilities
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

	// Sveld
	import sveldModal from '$lib/utilities/Modal/Modal.svelte?raw&sveld';

	// Modals Utils
	import type { ModalSettings, ModalComponent } from '$lib/utilities/Modal/types';
	import { modalStore } from '$lib/utilities/Modal/stores';
	import TabGroup from '$lib/components/Tab/TabGroup.svelte';
	import Tab from '$lib/components/Tab/Tab.svelte';

	// Stores
	let tabPresets: string = 'alert';
	let tabCustom: string = 'register';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Utility,
		name: 'Modals',
		description: 'High priority dialogs and modals using a dynamic queue system.',
		imports: ['Modal', 'modalStore'],
		types: ['ModalSettings', 'ModalComponent'],
		source: 'utilities/Modal',
		aria: 'https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/',
		components: [{ sveld: sveldModal }],
		keyboard: [['<kbd>Esc</kbd>', ' Dismisses the foremost modal.']],
		classes: [
			['<code>.w-modal</code>', '-', 'Sets a standard responsive width for modals.'],
			['<code>.w-modal-slim</code>', '-', 'Create a slimmer modal. Great for small component modals.'],
			['<code>.w-modal-wide</code>', '-', 'Create a wider modal. Great for full screen component modals.']
		]
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
			valueAttr: { type: 'text', minlength: 3, maxlength: 10, required: true },
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
			component: c,
			title: 'Custom Form Component',
			body: 'Complete the form below and then press submit.',
			response: (r: any) => {
				if (r) console.log('response:', r);
			}
		};
		modalStore.trigger(d);
	}

	function modalComponentList(): void {
		const d: ModalSettings = {
			type: 'component',
			component: 'exampleList',
			title: 'Custom List Component',
			body: 'Make your selection then press submit.',
			response: (r: any) => {
				if (r) console.log('response:', r);
			}
		};
		modalStore.trigger(d);
	}

	function modalComponentEmbed(): void {
		const d: ModalSettings = {
			type: 'component',
			component: 'exampleEmbed'
		};
		modalStore.trigger(d);
	}

	function modalComponentImage(): void {
		const d: ModalSettings = {
			type: 'component',
			component: 'exampleImage',
			image: 'https://i.imgur.com/WOgTG96.gif',
			meta: { source: 'Silly Symphonies - The Skeleton Dance' }
		};
		modalStore.trigger(d);
	}
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<section class="space-y-4">
			<div class="card variant-glass p-4 space-y-4">
				<p class="text-center font-bold">Basic Modals</p>
				<div class="grid grid-cols-1 md:grid-cols-4 gap-4 md:max-w-[480px] mx-auto">
					<button class="btn variant-filled" on:click={modalAlert}>Alert</button>
					<button class="btn variant-filled" on:click={modalConfirm}>Confirm</button>
					<button class="btn variant-filled" on:click={modalPrompt}>Prompt</button>
					<button class="btn variant-filled" on:click={modalMultiple}>Multiple</button>
				</div>
			</div>
			<div class="card variant-glass p-4 space-y-4">
				<p class="text-center font-bold">Component Modals</p>
				<div class="grid grid-cols-1 md:grid-cols-4 gap-4 md:max-w-[480px] mx-auto">
					<button class="btn variant-filled" on:click={modalComponentForm}>Form</button>
					<button class="btn variant-filled" on:click={modalComponentList}>List</button>
					<button class="btn variant-filled" on:click={modalComponentEmbed}>Embed</button>
					<button class="btn variant-filled" on:click={modalComponentImage}>Image</button>
				</div>
			</div>
		</section>
	</svelte:fragment>

	<!-- /actions/focus-trap -->

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<!-- prettier-ignore -->
		<aside class="alert alert-message variant-ghost-warning">
			<p>
				This feature uses a <a href="https://en.wikipedia.org/wiki/Singleton_pattern" target="_blank" rel="noreferrer">Singleton pattern</a>. Meaning you should aim to implement a <u>single instance of the component per project</u>, but it will remain globally scoped
				and reusable via a Svelte writable store. Do not reimplement this component for each route page.
			</p>
		</aside>
		<section class="space-y-4">
			<p>Import and add a single instance of the Modal component in your app's root layout.</p>
			<CodeBlock language="html" code={`<Modal />`} />
		</section>
		<!-- Modal Store -->
		<section class="space-y-4">
			<h2>Modal Store</h2>
			<p>When you wish to trigger a modal, import the <code>modalStore</code>, which acts as the modal queue.</p>
			<CodeBlock language="ts" code={`import { modalStore } from '@skeletonlabs/skeleton';`} />
			<h3>Trigger</h3>
			<p>Note that <code>title</code>, <code>body</code>, and <code>image</code> are optional for <u>all</u> modal types.</p>
			<TabGroup regionPanel="space-y-4">
				<Tab bind:group={tabPresets} name="alert" value="alert">Alert</Tab>
				<Tab bind:group={tabPresets} name="confirm" value="confirm">Confirm</Tab>
				<Tab bind:group={tabPresets} name="prompt" value="prompt">Prompt</Tab>
				<!-- Panel -->
				<svelte:fragment slot="panel">
					{#if tabPresets === 'alert'}
						<CodeBlock
							language="ts"
							code={`
function triggerAlert(): void {
	const alert: ModalSettings = {
		type: 'alert',
		title: 'Example Alert',
		body: 'This is an example modal.',
		image: 'https://i.imgur.com/WOgTG96.gif',
		// Optionally override buttont text
		buttonTextCancel: 'Cancel'
	};
	modalStore.trigger(alert);
}
						`}
						/>
					{:else if tabPresets === 'confirm'}
						<CodeBlock
							language="ts"
							code={`
function triggerConfirm(): void {
	const confirm: ModalSettings = {
		type: 'confirm',
		title: 'Please Confirm',
		body: 'Are you sure you wish to proceed?',
		// TRUE if confirm pressed, FALSE if cancel pressed
		response: (r: boolean) => console.log('response:', r),
		// Optionally override the button text
		buttonTextCancel: 'Cancel',
		buttonTextConfirm: 'Confirm',
	};
	modalStore.trigger(confirm);
}
						`}
						/>
					{:else if tabPresets === 'prompt'}
						<CodeBlock
							language="ts"
							code={`
function triggerPrompt(): void {
	const prompt: ModalSettings = {
		type: 'prompt',
		title: 'Enter Name',
		body: 'Provide your first name in the field below.',
		// Populates the input value and attributes
		value: 'Skeleton',
		valueAttr: { type: 'text', minlength: 3, maxlength: 10, required: true },
		// Returns the updated response value
		response: (r: string) => console.log('response:', r),
		// Optionally override the button text
		buttonTextCancel: 'Cancel',
		buttonTextSubmit: 'Submit',
	};
	modalStore.trigger(prompt);
}
						`}
						/>
					{/if}
				</svelte:fragment>
			</TabGroup>
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
		<!-- Modal Settings -->
		<section class="space-y-4">
			<h2>Modal Settings</h2>
			<!-- Instance Classes -->
			<h3>Instance Classes</h3>
			<!-- prettier-ignore -->
			<p>
				Use the <code>backdropClasses</code> or <code>modalClasses</code> settings to provide abitrary classes per component instance. Note that <code>!</code> (important) may be required to override some styles.
			</p>
			<CodeBlock
				language="ts"
				code={`
const d: ModalSettings = {
	// ...
	backdropClasses: '!bg-green-500',
	modalClasses: '!bg-red-500',
};`}
			/>
			<!-- Abitrary Metadata -->
			<h3>Abitrary Metadata</h3>
			<p>You can pass abitrary metadata to your modal via the <code>meta</code> setting. All data types are supported.</p>
			<CodeBlock
				language="ts"
				code={`
const d: ModalSettings = {
	// ...
	meta: { foo: 'bar', fizz: 'buzz', fn: myCustomFunction }
};
modalStore.trigger(d);
				`}
			/>
		</section>
		<!-- Component Modals -->
		<section class="space-y-4">
			<div class="flex items-center space-x-2">
				<h2>Component Modals</h2>
				<span class="badge variant-filled-warning">Advanced</span>
			</div>
			<p>Use the following techniques to create custom modals using components.</p>
			<TabGroup regionPanel="space-y-4">
				<Tab bind:group={tabCustom} name="component-modals" value="register">Registry Method</Tab>
				<Tab bind:group={tabCustom} name="component-modals" value="direct">Direct Method</Tab>
				<!-- Panel -->
				<svelte:fragment slot="panel">
					{#if tabCustom === 'register'}
						<!-- prettier-ignore -->
						<p>
							Import custom components in your root layout, create a modal registry object, then pass this object to the Modal <code>components</code> property.
						</p>
						<CodeBlock
							language="ts"
							code={`
// import ModalComponentOne from '...';
// import ModalComponentTwo from '...';\n
const modalComponentRegistry: Record<string, ModalComponent> = {
	modalComponentOne: {
		// Pass a reference to your custom component
		ref: ModalComponentOne,
		// Add the component properties as key/value pairs
		props: { background: 'bg-red-500' },
		// Provide a template literal for the default component slot
		slot: '<p>Skeleton</p>'
	},
	modalComponentTwo: { ref: ModalComponentTwo },
	// ...
};
							`}
						/>
						<CodeBlock language="html" code={`<Modal components={modalComponentRegistry} />`} />
						<p>When triggeing a component, pass <code>component: string</code>, where the value represents the registry object key.</p>
						<CodeBlock
							language="ts"
							code={`
function triggerCustomModal(): void {
	const d: ModalSettings = {
		type: 'component',
		// The component registry reference key
		component: 'modalComponentOne',
	};
	modalStore.trigger(d);
}
							`}
						/>
					{:else if tabCustom === 'direct'}
						<p>
							For one-off components you can create a <code>ModalComponent</code> object containing your component, props, and slot values.
						</p>
						<CodeBlock
							language="ts"
							code={`
// import MyCustomComponent from '...';\n
const modalComponent: ModalComponent = {
	// Pass a reference to your custom component
	ref: MyCustomComponent,
	// Add the component properties as key/value pairs
	props: { background: 'bg-red-500' },
	// Provide a template literal for the default component slot
	slot: '<p>Skeleton</p>'
};
							`}
						/>
						<p>
							When triggeing a component, pass the <code>component: ModalComponent</code> directly to <code>ModalSettings</code>.
						</p>
						<CodeBlock
							language="ts"
							code={`
function triggerCustomModal(): void {
	const d: ModalSettings = {
		type: 'component',
		// Pass the ModalComponent object
		component: modalComponent,
	};
	modalStore.trigger(d);
}
							`}
						/>
					{/if}
				</svelte:fragment>
			</TabGroup>
			<!-- Best Practices -->
			<h3>Best Practices</h3>
			<!-- prettier-ignore -->
			<ul class="list-disc list-inside space-y-1">
				<li>Import and use the <code>modalStore</code> to interface directly with the active modal queue.</li>
				<li>The visible modal uses index zero, ex: <code>$modalStore[0]</code>.</li>
				<li>All data provided to <code>ModalSettings</code> is available via <code>$modalStore[0]</code> inside your component.</li>
				<li>
					The Modal component props are available via <code>parent</code> - ex: <code>parent.background</code> will provide the
					<code>background</code> property value.
				</li>
				<li>Tap the <em>Props</em> tab on this page to view a full list of <code>parent</code> props available.</li>
				<li>Use the <code>$modalStore[0].response('myResponseDataHere');</code> method to return a response value.</li>
				<li>Use the <code>parent.onClose()</code> or <code>modalStore.close()</code> methods to close the modal.</li>
				<li>Abitrary metadata is available using <code>$modalStore[0].meta?.someKey</code>.</li>
			</ul>
			<!-- Examples -->
			<h3>Examples</h3>
			<aside class="alert variant-ghost">
				<div class="alert-message">
					<p>
						To make this process easier to understand, please review the source code for each of the examples feature at the top of this
						page. These components are registered in <code>/src/routes/+layout.svelte</code>.
					</p>
				</div>
				<div class="alert-actions">
					<a
						class="btn variant-filled-secondary"
						href="https://github.com/skeletonlabs/skeleton/tree/master/src/docs/DocsModals/"
						target="_blank"
						rel="noreferrer">View Example Modals</a
					>
				</div>
			</aside>
		</section>
	</svelte:fragment>
</DocsShell>
