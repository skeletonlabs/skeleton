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

	function triggerAlert(): void {
		console.log('working!');
	}

	function modalComponentForm(): void {
		const c: ModalComponent = { ref: ModalExampleForm };
		const d: ModalSettings = {
			type: 'component',
			title: 'Custom Form Component',
			body: 'Complete the form below and then press submit.',
			component: c,
			response: (r: any) => {
				if (r) console.log('response:', r);
			},
			meta: {
				foo: 'bar',
				fizz: 'buzz',
				fn: triggerAlert
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
			modalClasses: '!p-0 !bg-black !max-w-[75%] !overflow-visible'
		};
		modalStore.trigger(d);
	}
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<section class="space-y-4">
			<div class="card p-4 space-y-4">
				<p class="text-center font-bold">Dialog Modals</p>
				<div class="grid grid-cols-1 md:grid-cols-4 gap-4 md:max-w-[480px] mx-auto">
					<button class="btn btn-ghost-surface" on:click={modalAlert}>Alert</button>
					<button class="btn btn-ghost-surface" on:click={modalConfirm}>Confirm</button>
					<button class="btn btn-ghost-surface" on:click={modalPrompt}>Prompt</button>
					<button class="btn btn-ghost-surface" on:click={modalMultiple}>Multiple</button>
				</div>
			</div>
			<div class="card p-4 space-y-4">
				<p class="text-center font-bold">Custom Component Modals</p>
				<div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:max-w-[320px] mx-auto">
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
				Import and add a single instance of the Modal component in your app's root layout. Since this is in global scope it will be possible
				to reuse this feature throughout your entire application.
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
		image: 'https://i.imgur.com/WOgTG96.gif',
		// Optionally override buttont text
		buttonTextCancel: 'Cancel'
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
		// Optionally override the button text
		buttonTextCancel: 'Cancel',
		buttonTextSubmit: 'Submit',
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
	backdropClasses: '!items-start'
	modalClasses: '!p-0 !bg-green-500 !max-w-[75%]'
};
				`}
			/>
			<p>Note that <code>!</code> (important) may be required to override some styles.</p>
		</section>
		<!-- Component Modals -->
		<section class="space-y-4">
			<div class="flex items-center space-x-2">
				<h2>Component Modals</h2>
				<span class="badge badge-filled-warning">Advanced</span>
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
		// NOTE: title, body, response, etc are supported!
		component: modalComponent,
		// Pass abitrary data to the component
		meta: { foo: 'bar', fizz: 'buzz', fn: myCustomFunction }
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
				class="btn btn-filled-secondary"
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
		<!-- Abitrary Data -->
		<section class="space-y-4">
			<div class="flex items-center space-x-2">
				<h2>Abitrary Data</h2>
				<span class="badge badge-filled-warning">Advanced</span>
			</div>
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
			<p>You can retrieve the data as follows. Note the wrapping <code>#if</code> conditional to prevent console errors on modal close.</p>
			<CodeBlock
				language="html"
				code={`
{#if $modalStore[0]}
	<pre>{$modalStore[0].meta?.foo}</pre>
{/if}
				`}
			/>
		</section>
		<hr />
		<!-- SSR Warning -->
		<section class="space-y-4">
			<h2>SvelteKit SSR Warning</h2>
			<p>
				Be aware that there are <a
					href="https://github.com/sveltejs/kit/discussions/4339#discussioncomment-2384978"
					target="_blank"
					rel="noreferrer">known issues when using Svelte stores with SSR</a
				>, such as our modal store. To prevent these issues please avoid the use of the modal store within any SvelteKit Load function.
				Likewise, if you need a modal to open on route initilization we advise triggering the <code>open()</code> method after the
				<a href="https://kit.svelte.dev/docs/modules#$app-environment" target="_blank" rel="noreferrer"
					>SvelteKit Browser environment context</a
				> is available.
			</p>
			<CodeBlock
				language="typescript"
				code={`
import { browser } from '$app/environment';\n
if (browser) modalStore.trigger({...});
				`}
			/>
			<p>
				For additional context please see this <a href="https://github.com/skeletonlabs/skeleton/pull/580" target="_blank" rel="noreferrer"
					>thread</a
				>.
			</p>
		</section>
	</svelte:fragment>
</DocsShell>
