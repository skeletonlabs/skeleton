<script lang="ts">
	// Docs
	import DocsShell from '$lib/layouts/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$lib/layouts/DocsShell/types';
	import DocsPreview from '$lib/components/DocsPreview/DocsPreview.svelte';
	// Modal Examples (see also root layout)
	import ModalExampleForm from '$lib/modals/examples/ModalExampleForm.svelte';
	// Components
	import { CodeBlock, Accordion, AccordionItem, Tab, TabGroup } from '@skeletonlabs/skeleton';

	// Sveld
	import sveldModal from '@skeletonlabs/skeleton/utilities/Modal/Modal.svelte?raw&sveld';

	// Modals Utils
	import type { ModalSettings, ModalComponent } from '@skeletonlabs/skeleton';
	import { getModalStore } from '@skeletonlabs/skeleton';

	const modalStore = getModalStore();

	// Stores
	let tabCustom = 'register';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Utility,
		name: 'Modals',
		description: 'High priority dialogs and modals using a dynamic queue system.',
		imports: ['Modal', 'getModalStore'],
		types: ['ModalSettings', 'ModalComponent', 'ModalStore'],
		source: 'packages/skeleton/src/lib/utilities/Modal',
		aria: 'https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/',
		components: [{ sveld: sveldModal }],
		keyboard: [['<kbd class="kbd">Esc</kbd>', ' Dismisses the foremost modal.']],
		classes: [
			['<code class="code">.w-modal</code>', '-', 'Sets a standard responsive width for modals.'],
			['<code class="code">.w-modal-slim</code>', '-', 'Create a slimmer modal. Great for small component modals.'],
			['<code class="code">.w-modal-wide</code>', '-', 'Create a wider modal. Great for full screen component modals.']
		],
		transitionIn: 'fly',
		transitionOut: 'fly'
	};

	// Demo ---

	function modalDemo(): void {
		const modal: ModalSettings = {
			type: 'alert',
			title: 'Hello Skeleton',
			body: 'This modal example includes a title, body, and image.',
			image: 'https://i.imgur.com/TykCy5e.gif'
			// image: 'https://i.imgur.com/WOgTG96.gif'
		};
		modalStore.trigger(modal);
	}

	// Variants ---

	function modalAlert(): void {
		const modal: ModalSettings = {
			type: 'alert',
			title: 'Hello World!',
			body: 'This simple alert modal uses <code class="code">type: alert</code>.'
		};
		modalStore.trigger(modal);
	}

	function modalConfirm(): void {
		const modal: ModalSettings = {
			type: 'confirm',
			title: 'Please Confirm',
			body: 'Are you sure you wish to proceed?',
			response: (r: boolean) => console.log('response:', r)
		};
		modalStore.trigger(modal);
	}

	function modalPrompt(): void {
		const modal: ModalSettings = {
			type: 'prompt',
			title: 'Enter Name',
			body: 'Provide your first name in the field below.',
			value: 'Skeleton',
			valueAttr: { type: 'text', minlength: 3, maxlength: 10, required: true },
			response: (r: string) => console.log('response:', r)
		};
		modalStore.trigger(modal);
	}

	function modalMultiple(): void {
		[1, 2, 3].forEach((dNum: number) => {
			const modal: ModalSettings = {
				type: 'alert',
				title: `Modal ${dNum}`,
				body: `The modal body of ${dNum}.`
			};
			modalStore.trigger(modal);
		});
	}

	// Custom ---

	function modalComponentForm(): void {
		const c: ModalComponent = { ref: ModalExampleForm };
		const modal: ModalSettings = {
			type: 'component',
			component: c,
			title: 'Custom Form Component',
			body: 'Complete the form below and then press submit.',
			response: (r) => console.log('response:', r)
		};
		modalStore.trigger(modal);
	}

	function modalComponentList(): void {
		const modal: ModalSettings = {
			type: 'component',
			component: 'exampleList',
			title: 'Custom List Component',
			body: 'Make your selection then press submit.',
			response: (r) => console.log('response:', r)
		};
		modalStore.trigger(modal);
	}

	function modalComponentEmbed(): void {
		const modal: ModalSettings = {
			type: 'component',
			component: 'exampleEmbed'
		};
		modalStore.trigger(modal);
	}

	function modalComponentImage(): void {
		const modal: ModalSettings = {
			type: 'component',
			component: 'exampleImage',
			image: 'https://i.imgur.com/WOgTG96.gif',
			meta: { source: 'Silly Symphonies - The Skeleton Dance' }
		};
		modalStore.trigger(modal);
	}
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<DocsPreview>
			<svelte:fragment slot="preview">
				<button class="btn variant-filled" on:click={modalDemo}>Show Modal</button>
			</svelte:fragment>
			<svelte:fragment slot="source">
				<p>There are a several steps involved to utilize this feature. Please refer to the documented instruction below.</p>
			</svelte:fragment>
		</DocsPreview>
	</svelte:fragment>

	<!-- /actions/focus-trap -->

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<!-- prettier-ignore -->
		<aside class="alert alert-message variant-ghost-warning">
			<p>
				This feature uses the <a class="anchor" href="https://en.wikipedia.org/wiki/Singleton_pattern" target="_blank" rel="noreferrer">Singleton pattern</a>, meaning you should aim to implement a <u>single instance of the component per project</u>, but it will remain globally scoped
				and reusable via a Svelte writable store. Do not reimplement this component for each route page.
			</p>
		</aside>
		<section class="space-y-4">
			<h2 class="h2">Prerequisites</h2>
			<h3 class="h3">Initialize Stores</h3>
			<!-- prettier-ignore -->
			<p>
				Implement the following in the root layout of your application. This is required only once when implementing Skeleton's Drawer, Modal, and Toast stores and will prevent known issues with <a class="anchor" href="https://github.com/skeletonlabs/skeleton/wiki/SvelteKit-SSR-Warning" target="_blank">SvelteKit SSR</a>.
			</p>
			<CodeBlock language="ts" code={`import { initializeStores } from '@skeletonlabs/skeleton';\n\ninitializeStores();`} />
			<h3 class="h3">Modal Component</h3>
			<p>Implement a single instance of the modal component in your app's root layout, above the App Shell (if present).</p>
			<CodeBlock language="html" code={`<Modal />\n\n<!-- <AppShell>...</AppShell> -->`} />
		</section>
		<section class="space-y-4">
			<h2 class="h2">Modal Store</h2>
			<p>
				When you wish to trigger a modal, import the <code class="code">getModalStore</code> function and invoke it to retrieve the
				<code class="code">modalStore</code>, which is a Svelte store that acts as the modal queue.
			</p>
			<blockquote class="blockquote">
				NOTE: To retrieve the store, <code class="code">getModalStore</code> must be invoked at the <u>top level</u> of your component!
			</blockquote>
			<CodeBlock
				language="ts"
				code={`
import { getModalStore } from '@skeletonlabs/skeleton';
			
const modalStore = getModalStore();
			`}
			/>
			<h3 class="h3">Trigger</h3>
			<p>
				The <code class="code">title</code>, <code class="code">body</code>, and <code class="code">image</code> are available to all modals.
			</p>
			<!-- Alert -->
			<DocsPreview background="neutral">
				<svelte:fragment slot="preview">
					<div class="flex gap-4">
						<button class="btn variant-filled" on:click={modalAlert}>Alert Modal</button>
						<button class="btn variant-filled" on:click={modalMultiple}>Queue Multiple</button>
					</div>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock
						language="ts"
						code={`
const modal: ModalSettings = {
	type: 'alert',
	// Data
	title: 'Example Alert',
	body: 'This is an example modal.',
	image: 'https://i.imgur.com/WOgTG96.gif',
};
modalStore.trigger(modal);
`}
					/>
				</svelte:fragment>
			</DocsPreview>
			<!-- Confirm -->
			<DocsPreview background="neutral">
				<svelte:fragment slot="preview">
					<button class="btn variant-filled" on:click={modalConfirm}>Confirm Modal</button>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock
						language="ts"
						code={`
const modal: ModalSettings = {
	type: 'confirm',
	// Data
	title: 'Please Confirm',
	body: 'Are you sure you wish to proceed?',
	// TRUE if confirm pressed, FALSE if cancel pressed
	response: (r: boolean) => console.log('response:', r),
};
modalStore.trigger(modal);
`}
					/>
				</svelte:fragment>
			</DocsPreview>
			<!-- Prompt -->
			<DocsPreview background="neutral">
				<svelte:fragment slot="preview">
					<button class="btn variant-filled" on:click={modalPrompt}>Prompt Modal</button>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock
						language="ts"
						code={`
const modal: ModalSettings = {
	type: 'prompt',
	// Data
	title: 'Enter Name',
	body: 'Provide your first name in the field below.',
	// Populates the input value and attributes
	value: 'Skeleton',
	valueAttr: { type: 'text', minlength: 3, maxlength: 10, required: true },
	// Returns the updated response value
	response: (r: string) => console.log('response:', r),
};
modalStore.trigger(modal);
`}
					/>
				</svelte:fragment>
			</DocsPreview>
			<!-- Close -->
			<h3 class="h3">Close</h3>
			<p>Trigger the <code class="code">close()</code> method to remove the first modal in the modal queue.</p>
			<CodeBlock language="ts" code={`modalStore.close();`} />
			<!-- Clear -->
			<h3 class="h3">Clear</h3>
			<p>Trigger the <code class="code">clear()</code> method to completely empty the modal queue.</p>
			<CodeBlock language="ts" code={`modalStore.clear();`} />
		</section>
		<!-- Modal Settings -->
		<section class="space-y-4">
			<div class="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4 items-center">
				<div class="space-y-4">
					<h2 class="h2">Modal Settings</h2>
					<p>
						Define settings <u>per modal instance</u> via the <code class="code">trigger()</code> method. These are similar to modal properties,
						but do not provide the same breath of options.
					</p>
				</div>
				<div>
					<a
						class="btn variant-filled font-bold"
						href="https://github.com/skeletonlabs/skeleton/blob/master/packages/skeleton/src/lib/utilities/Modal/types.ts#L14"
						target="_blank"
						rel="noreferrer"
					>
						<span>Available Settings</span>
						<i class="fa-solid fa-arrow-up-right-from-square" />
					</a>
				</div>
			</div>
			<!-- prettier-ignore -->
			<CodeBlock
				language="ts"
				code={`
const modal: ModalSettings = {\n
	// Provide arbitrary classes to the backdrop and modal elements:
	backdropClasses: '!bg-green-500',
	modalClasses: '!bg-red-500',\n
	// Provide arbitrary metadata to your modal instance:
	meta: { foo: 'bar', fizz: 'buzz', fn: myCustomFunction }\n
};`}
			/>
		</section>
		<!-- Modal Properties -->
		<section class="space-y-4">
			<h2 class="h2">Modal Properties</h2>
			<p>
				Define <u>global settings</u> for all modal instances. Tap the "Props" tab at the top of the page for a full list of options.
			</p>
		</section>
		<!-- Async Response -->
		<section class="space-y-4">
			<h2 class="h2">Async Response</h2>
			<!-- prettier-ignore -->
			<p>You may await a modal response by wrapping it in a <a class="anchor" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank" rel="noreferrer">Javascript Promise</a>, which resolves when the response is triggered.</p>
			<CodeBlock
				language="ts"
				code={`
new Promise<boolean>((resolve) => {
	const modal: ModalSettings = {
		type: 'confirm',
		title: 'Please Confirm',
		body: 'Are you sure you wish to proceed?',
		response: (r: boolean) => {
			resolve(r);
		}
	};
	modalStore.trigger(modal);
}).then((r: any) => {
	console.log('resolved response:', r);
});
	`}
			/>
		</section>
		<!-- Component Modals -->
		<section class="space-y-4">
			<div class="flex items-center space-x-2">
				<h2 class="h2">Component Modals</h2>
				<span class="badge variant-filled-warning">Advanced</span>
			</div>
			<p>Skeleton allows you to generate custom modals using Svelte components.</p>
			<h3 class="sr-only">Example Modals</h3>
			<DocsPreview background="neutral">
				<svelte:fragment slot="preview">
					<div class="grid grid-cols-1 md:grid-cols-4 gap-4 md:max-w-[480px] mx-auto">
						<button class="btn variant-filled" on:click={modalComponentForm}>Form</button>
						<button class="btn variant-filled" on:click={modalComponentList}>List</button>
						<button class="btn variant-filled" on:click={modalComponentEmbed}>Embed</button>
						<button class="btn variant-filled" on:click={modalComponentImage}>Image</button>
					</div>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<div class="text-center">
						<a
							class="btn variant-ghost"
							href="https://github.com/skeletonlabs/skeleton/tree/master/sites/skeleton.dev/src/lib/modals/examples"
							target="_blank"
							rel="noreferrer"
						>
							<i class="fa-brands fa-github" />
							<span>View Source on GitHub</span>
							<i class="fa-solid fa-arrow-up-right-from-square" />
						</a>
					</div>
				</svelte:fragment>
			</DocsPreview>
			<h3 class="h3">Choose a Method</h3>
			<TabGroup regionList="!grid grid-cols-2" regionPanel="space-y-4">
				<Tab bind:group={tabCustom} name="component-modals" value="register">Registry (recommended)</Tab>
				<Tab bind:group={tabCustom} name="component-modals" value="direct">Direct</Tab>
				<!-- Panel -->
				<svelte:fragment slot="panel">
					{#if tabCustom === 'register'}
						<p>
							This will create a set of reusable custom modals that are globally avialable to your application. Add the following to your
							your root layout in <code class="code">/src/routes/+layout.svelte</code>.
						</p>
						<CodeBlock
							language="ts"
							code={`
import ModalComponentOne from '/example/path/here';
import ModalComponentTwo from '/example/path/here';\n
const modalRegistry: Record<string, ModalComponent> = {
	// Set a unique modal ID, then pass the component reference
	modalComponentOne: { ref: ModalComponentOne },
	modalComponentTwo: { ref: ModalComponentTwo },
	// ...
};
							`}
						/>
						<p>Provide the <code class="code">modalRegistry</code> to the modal component, which also resides in your root layout.</p>
						<CodeBlock language="html" code={`<Modal components={modalRegistry} />`} />
						<p>
							Then, when triggering a new component, set the value of <code class="code">component</code> to the unique modal ID as registered
							above.
						</p>
						<CodeBlock
							language="ts"
							code={`
const modal: ModalSettings = {
	type: 'component',
	component: 'modalComponentOne',
};
modalStore.trigger(modal);
							`}
						/>
					{:else if tabCustom === 'direct'}
						<p>This will implement a single component for a one-off modal instance.</p>
						<CodeBlock
							language="ts"
							code={`
import MyCustomComponent from '/example/path/here';\n
const modalComponent: ModalComponent = { ref: MyCustomComponent };\n
const modal: ModalSettings = {
	type: 'component',
	component: modalComponent,
};
modalStore.trigger(modal);
							`}
						/>
					{/if}
				</svelte:fragment>
			</TabGroup>
			<h3 class="h3">Creating a Component</h3>
			<p>Learn more about how to construct a custom modal component via the tips below.</p>
			<Accordion autocollapse class="card variant-glass p-4">
				<AccordionItem open>
					<svelte:fragment slot="summary"><h3 class="h3" data-toc-ignore>Accessing Modal Store Data</h3></svelte:fragment>
					<svelte:fragment slot="content">
						<p>When creating a custom component, make sure to import the modal store. This should proceed all following tips.</p>
						<CodeBlock
							language="ts"
							code={`
import { getModalStore } from '@skeletonlabs/skeleton';\n
const modalStore = getModalStore();
							`}
						/>
					</svelte:fragment>
				</AccordionItem>
				<AccordionItem>
					<svelte:fragment slot="summary"><h3 class="h3" data-toc-ignore>Determining the Active Modal</h3></svelte:fragment>
					<svelte:fragment slot="content">
						<p>
							The active and visible modal in your queue is always available at the zero index: <code class="code">$modalStore[0]</code>.
						</p>
						<CodeBlock language="ts" code={`if ($modalStore[0]) console.log($modalStore[0].title);`} />
					</svelte:fragment>
				</AccordionItem>
				<AccordionItem>
					<svelte:fragment slot="summary"><h3 class="h3" data-toc-ignore>Template Conditional</h3></svelte:fragment>
					<svelte:fragment slot="content">
						<p>
							Wrap your component template markup in an <code class="code">#if</code> statement before accessing modal store values.
						</p>
						<CodeBlock
							language="html"
							code={`
{#if $modalStore[0]}
	<header>{$modalStore[0].title}</header>
	<article>{$modalStore[0].body}</article>
{/if}
						`}
						/>
					</svelte:fragment>
				</AccordionItem>
				<AccordionItem>
					<svelte:fragment slot="summary"><h3 class="h3" data-toc-ignore>Inherit Modal Component Props</h3></svelte:fragment>
					<svelte:fragment slot="content">
						<p>
							The modal component in your root layout is considered the "parent" component, which includes a set of global configuration
							properties. For example:
						</p>
						<CodeBlock language="html" code={`<Modal background="bg-green-500" />`} />
						<blockquote class="blockquote">
							TIP: tap the <u>Props</u> tab at the top of this page for a full list of available properties.
						</blockquote>
						<p>
							Custom modal components are then generated within this using <code class="code">svelte:component</code>. By default, Skeleton
							provides all parent props to your custom component using a
							<code class="code">parent</code>
							prop. This can be enabled by adding the following to your custom component.
						</p>
						<CodeBlock language="ts" code={`export let parent: any;`} />
						<p>You may then access and use any parent value.</p>
						<CodeBlock language="html" code={`<pre class="pre">{JSON.stringify(parent)}</pre>`} />
						<CodeBlock language="html" code={`<pre class="pre">background: {parent.background}</pre>`} />
					</svelte:fragment>
				</AccordionItem>
				<AccordionItem>
					<svelte:fragment slot="summary"><h3 class="h3" data-toc-ignore>Returning a Response Value</h3></svelte:fragment>
					<svelte:fragment slot="content">
						<p>
							Use the <code class="code">$modalStore[0].response()</code> callback method to return a modal response value.
						</p>
						<CodeBlock language="ts" code={`$modalStore[0].response({ foo: 'bar' });`} />
					</svelte:fragment>
				</AccordionItem>
				<AccordionItem>
					<svelte:fragment slot="summary"><h3 class="h3" data-toc-ignore>Passing Arbitrary Data</h3></svelte:fragment>
					<svelte:fragment slot="content">
						<p>When triggering a component, use the Modal Settings <code class="code">meta</code> key to pass arbitrary data.</p>
						<CodeBlock
							language="ts"
							code={`
const modal: ModalSettings = {
	// ...
	meta: { foo: 'bar', fizz: 'buzz', fn: myCustomFunction }
};
							`}
						/>
						<p>You can then use <code class="code">$modalStore[0].meta</code> within your custom component to retrieve this data.</p>
						<CodeBlock language="html" code={`<pre class="pre">{JSON.stringify($modalStore[0].meta)}</pre>`} />
						<CodeBlock language="html" code={`<pre class="pre">foo: {$modalStore[0].meta.foo}</pre>`} />
					</svelte:fragment>
				</AccordionItem>
				<AccordionItem>
					<svelte:fragment slot="summary"><h3 class="h3" data-toc-ignore>Component Props and Slots</h3></svelte:fragment>
					<svelte:fragment slot="content">
						<p>
							When creating a <code class="code">ModalComponent</code> instance, you can <u>optionally</u> pass
							<code class="code">props</code>
							and default
							<code class="code">slot</code> values as shown.
						</p>
						<CodeBlock
							language="ts"
							code={`
import MyCustomComponent from '/example/path/here';\n
const modalComponent: ModalComponent = {
	ref: MyCustomComponent
	props: { foo: 'bar' },
	slot: '<p>Skeleton</p>'
};
							`}
						/>
						<p>These values be utilized per standard Svelte component conventions.</p>
						<CodeBlock language="ts" code={`export let foo = 'fizzbuzz';`} />
						<CodeBlock language="html" code={`<slot />`} />
					</svelte:fragment>
				</AccordionItem>
				<AccordionItem>
					<svelte:fragment slot="summary"><h3 class="h3" data-toc-ignore>Setting the Modal Width</h3></svelte:fragment>
					<svelte:fragment slot="content">
						<p>
							Skeleton's modal component uses a <code class="code">width</code> property, which can use either an arbitrary width class, or any
							of the canned options provided below:
						</p>
						<ul class="list-disc list-outside ml-4 space-y-1">
							<li><code class="code">.w-modal</code> - the standard modal size.</li>
							<li><code class="code">.w-modal-slim</code> - the smaller modal width.</li>
							<li><code class="code">.w-modal-wide</code> - the larger modal width.</li>
						</ul>
						<p>Your custom component can either inherit this from the <code class="code">parent.width</code> property.</p>
						<CodeBlock
							language="html"
							code={`
{#if $modalStore[0]}
	<div class="{parent.width}">
		<h2 class="h2">Wide Modal</h2>
		<p>This will be a wide modal.</p>
	</div>
{/if}
						`}
						/>
						<p>Likewise these classes can be defined directly into the template.</p>
						<CodeBlock
							language="html"
							code={`
{#if $modalStore[0]}
	<div class="w-modal-wide">
		<h2 class="h2">Wide Modal</h2>
		<p>This will be a wide modal.</p>
	</div>
{/if}
						`}
						/>
					</svelte:fragment>
				</AccordionItem>
				<AccordionItem>
					<svelte:fragment slot="summary"><h3 class="h3" data-toc-ignore>Closing a Modal</h3></svelte:fragment>
					<svelte:fragment slot="content">
						<p>You can use either method below to close self close the modal. Use this for "cancel" actions.</p>
						<CodeBlock language="ts" code={`parent.onClose();`} />
						<CodeBlock language="ts" code={`modalStore.close();`} />
					</svelte:fragment>
				</AccordionItem>
			</Accordion>
		</section>
		<section class="space-y-4">
			<h2 class="h2">Accessibility</h2>
			<!-- prettier-ignore -->
			<p>Skeleton <u>does not</u> provide a means to disable the backdrop's click to close feature, as this would be harmful to accessibility. View the <a class="anchor" href="https://www.w3.org/WAI/ARIA/apg/patterns/dialogmodal/" target="_blank" rel="noreferrer">ARIA APG guidelines</a> to learn more about modal accessibility.</p>
		</section>
	</svelte:fragment>
</DocsShell>
