<script lang="ts">
	import DocsShell from '$docs/layouts/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/layouts/DocsShell/types';
	import DocsPreview from '$docs/components/DocsPreview/DocsPreview.svelte';
	// Components
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';
	import ListBox from '$lib/components/ListBox/ListBox.svelte';
	import ListBoxItem from '$lib/components/ListBox/ListBoxItem.svelte';
	import Avatar from '$lib/components/Avatar/Avatar.svelte';
	import TabGroup from '$lib/components/Tab/TabGroup.svelte';
	import Tab from '$lib/components/Tab/Tab.svelte';
	// Popups
	import { popup } from '$lib/utilities/Popup/popup';
	import type { PopupSettings } from '$lib/utilities/Popup/types';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Utility,
		name: 'Popups',
		description:
			'Create floating menus and tooltips using <a href="https://floating-ui.com/" target="_blank" rel="noreferrer">Floating UI</a>.',
		imports: ['popup'],
		types: ['PopupSettings'],
		stylesheetIncludes: ['all', 'elements'],
		stylesheets: ['elements/popups'],
		source: 'utilities/Popup',
		aria: 'https://www.w3.org/WAI/ARIA/apg/patterns/menu/',
		classes: [
			['<code>[data-popup]</code>', '', `Follows Floating UI's best practices, sets hidden by default.`],
			['<code>[data-popup] .arrow</code>', '', 'Provides base styles to the arrow element.']
		],
		parameters: [
			['<code>event</code>', 'string', 'click', 'click | hover | hover-click', 'Provide the event type'],
			['<code>target</code>', 'string', '-', '-', 'Match the popup data value of <code>[data-popup]</code>'],
			['<code>placement</code>', 'string', '-', 'bottom', 'Set the placement position.'],
			['<code>closeQuery</code>', 'string', 'a[href], button', '-', 'Query list of elements that will close the popup.'],
			['<code>middleware</code>', 'object', '-', '-', 'Provide Floating UI middleware settings.'],
			['<code>state</code>', 'function', '-', '-', 'Provide an optional callback function to monitor open/close state.']
		],
		keyboard: [
			['<kbd>Enter</kbd>', 'When trigger is focused, toggles the popup open/close.'],
			// ['<kbd>Space</kbd>', 'When trigger is focused, toggles the popup open/close.'],
			// ['<kbd>Tab</kbd>', 'When trigger is focused, closes the popup.'],
			['<kbd>Esc</kbd>', 'Closes all open popups at once.'],
			['<kbd>↑</kbd>', 'Move upwards to the next item in the popup.'],
			['<kbd>↓</kbd>', 'Move downwards to the next item in the popup.']
		],
		dependencies: [{ label: 'Floating UI', url: 'https://floating-ui.com/' }]
	};

	// Local
	let tabSettings: number = 0;
	let comboboxValue: string;
	let popupCombobox: PopupSettings = {
		event: 'click',
		target: 'combobox',
		placement: 'bottom',
		closeQuery: '.listbox-item'
		// state: (e: any) => console.log('tooltip', e)
	};
	let exampleTooltip: PopupSettings = {
		event: 'hover',
		target: 'exampleTooltip',
		placement: 'top'
	};
	let exampleMenu: PopupSettings = {
		event: 'click',
		target: 'exampleMenu',
		placement: 'bottom'
		// state: (e: any) => console.log('tooltip', e)
	};
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<DocsPreview>
			<svelte:fragment slot="preview">
				<div class="flex gap-4 text-token py-4">
					<div>
						<button class="btn variant-filled" use:popup={exampleTooltip}>Hover</button>
						<div class="text-xs text-center card variant-filled p-2 whitespace-nowrap shadow-xl" data-popup="exampleTooltip">
							This is an example tooltip.
							<!-- Arrow -->
							<div class="arrow variant-filled" />
						</div>
					</div>
					<div>
						<button class="btn variant-filled" use:popup={exampleMenu}>Click</button>
						<div class="card p-4 w-72 shadow-xl" data-popup="exampleMenu">
							<!-- NOTE: Keep this wrapper, .space-y will affect the arrow -->
							<div class="space-y-4">
								<Avatar src="https://pbs.twimg.com/profile_images/1587479781544759297/TINbbJLC_400x400.png" width="w-16" />
								<div>
									<p class="font-bold">Skeleton</p>
									<p class="opacity-50">@SkeletonUI</p>
								</div>
								<p>Skeleton is a fully featured UI component library using the power of Svelte + Tailwind.</p>
								<div class="flex gap-4">
									<small><strong>50</strong> <span class="opacity-50">Following</span></small>
									<small><strong>440</strong> <span class="opacity-50">Followers</span></small>
								</div>
								<a class="btn variant-soft w-full" href="https://twitter.com/SkeletonUI" target="_blank" rel="noreferrer">
									View on Twitter
								</a>
							</div>
							<!-- Arrow -->
							<div class="arrow bg-surface-100-800-token" />
						</div>
					</div>
				</div>
			</svelte:fragment>
			<svelte:fragment slot="source">
				<!-- prettier-ignore -->
				<p>Create a <code>PopupSettings</code> object that maps to <a href="https://floating-ui.com/" target="_blank" rel="noreferrer">Floating UI</a> settings.</p>
				<CodeBlock
					language="ts"
					code={`
let popupSettings: PopupSettings = {
	// Set the event as: click | hover | hover-click
	event: 'click',
	// Provide a matching 'data-popup' value.
	target: 'examplePopup'
};
			`}
				/>
				<p>Apply the <code>use:popup</code> action to your trigger element.</p>
				<CodeBlock language="html" code={`<button ... use:popup={popupSettings}>Trigger</button>`} />
				<p>Apply a <code>data-popup</code> attribute to your desired popup element.</p>
				<CodeBlock language="html" code={`<div ... data-popup="examplePopup">(popup)</div>`} />
				<p>
					You may optionally append a <code>.arrow</code> element within the popup to add an arrow. Match your popup's background color!
				</p>
				<CodeBlock
					language="html"
					code={`
<div class="card variant-filled-secondary p-4" data-popup="examplePopup">
	Some text goes here.
	<!-- Append the arrow element -->
	<div class="arrow variant-filled-secondary" />
</div>
			`}
				/>
			</svelte:fragment>
		</DocsPreview>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<!-- Getting Started -->
		<section class="space-y-4">
			<h2>Getting Started</h2>
			<p>Install <a href="https://floating-ui.com/" target="_blank" rel="noreferrer">Floating UI</a> from NPM. <u>This is required.</u></p>
			<CodeBlock language="console" code={`npm install @floating-ui/dom`} />
			<p>Import Floating UI into your application's root layout <code>/src/routes/+layout.svelte</code>.</p>
			<CodeBlock language="ts" code={`import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';`} />
			<p>Then import <code>storePopup</code> in your root layout as well.</p>
			<CodeBlock language="ts" code={`import { storePopup } from '@skeletonlabs/skeleton';`} />
			<p>Finally, pass an object containing each of the Floating UI modules to the store.</p>
			<CodeBlock language="ts" code={`storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });`} />
		</section>
		<!-- PopupSettings -->
		<section class="space-y-4">
			<h2>Popup Settings</h2>
			<TabGroup regionPanel="space-y-4">
				<Tab bind:group={tabSettings} name="settings" value={0}>Placement</Tab>
				<Tab bind:group={tabSettings} name="settings" value={1}>State</Tab>
				<Tab bind:group={tabSettings} name="settings" value={2}>Close Query</Tab>
				<Tab bind:group={tabSettings} name="settings" value={3}>Middlware</Tab>
				<!-- Tab Panels --->
				<svelte:fragment slot="panel">
					{#if tabSettings === 0}
						<!-- Placement -->
						<!-- prettier-ignore -->
						<p>
						Reference the available <a href="https://floating-ui.com/docs/computePosition#placement" target="_blank" rel="noreferrer">placement</a> options. This setting defaults to <code>bottom</code>.
					</p>
						<CodeBlock
							language="ts"
							code={`
let popupSettings: PopupSettings = {
	placement: 'bottom'
};
					`}
						/>
					{:else if tabSettings === 1}
						<!-- State Handler -->
						<p>You can optionally monitor the show and hide state of a popup using <code>state</code>.</p>
						<CodeBlock
							language="ts"
							code={`
let popupSettings: PopupSettings = {
	state: (e) => console.log(e)
};
					`}
						/>
					{:else if tabSettings === 3}
						<!-- Middlware -->
						<!-- prettier-ignore -->
						<p>
						You can provide <a href="https://floating-ui.com/docs/middleware" target="_blank" rel="noreferrer">Floating UI middleware</a> settings within <code>PopupSettings</code>. These settings are passed verbatim.
					</p>
						<CodeBlock
							language="ts"
							code={`
let popupSettings: PopupSettings = {
	middleware: {
		// Floating UI Middlware
		/** https://floating-ui.com/docs/offset */
		offset: 24, // or { ... }
		/** https://floating-ui.com/docs/shift */
		shift: { ... },
		/** https://floating-ui.com/docs/flip */
		flip: { ... },
		/** https://floating-ui.com/docs/arrow */
		arrow: { ... }
	}
};
					`}
						/>
					{:else if tabSettings === 2}
						<!-- Close Query -->
						<!-- prettier-ignore -->
						<p>Query the list of elements that will close the drawer when clicked. This is set to <code>'a[href], button'</code> by default.</p>
						<CodeBlock
							language="ts"
							code={`
let popupSettings: PopupSettings = {
	// Limit to listbox items only:
	closeQuery: '.listbox-item',
};
					`}
						/>
					{/if}
				</svelte:fragment>
			</TabGroup>
		</section>
		<!-- Combobox -->
		<section class="space-y-4">
			<h2>Combobox</h2>
			<p>By combining popups and Skeleton listboxes we can create a functional combobox element.</p>
			<DocsPreview background="neutral">
				<svelte:fragment slot="preview">
					<!-- Combobox -->
					<div class="text-token">
						<button class="btn variant-filled w-48 justify-between" use:popup={popupCombobox}>
							<span class="capitalize">{comboboxValue ?? 'Trigger'}</span>
							<i class="fa-solid fa-caret-down opacity-50" />
						</button>
						<div class="card w-48 shadow-xl py-2" data-popup="combobox">
							<ListBox rounded="rounded-none">
								<ListBoxItem bind:group={comboboxValue} name="medium" value="books">Books</ListBoxItem>
								<ListBoxItem bind:group={comboboxValue} name="medium" value="movies">Movies</ListBoxItem>
								<ListBoxItem bind:group={comboboxValue} name="medium" value="television">Television</ListBoxItem>
							</ListBox>
							<!-- Append the arrow element -->
							<div class="arrow bg-surface-100-800-token" />
						</div>
					</div>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock language="ts" code={`let comboboxValue: string;`} />
					<CodeBlock
						language="ts"
						code={`
let popupCombobox: PopupSettings = {
	event: 'click',
	target: 'combobox',
	placement: 'bottom',
	// Close the popup when the item is clicked
	closeQuery: '.listbox-item'
};
					`}
					/>
					<CodeBlock
						language="html"
						code={`
<button class="btn variant-filled w-48" use:popup={popupCombobox}>
	{comboboxValue ?? 'Trigger'}
</button>
					`}
					/>
					<CodeBlock
						language="html"
						code={`
<div class="card w-48 shadow-xl py-2" data-popup="combobox">
	<!-- Listbox -->
	<ListBox rounded="rounded-none">
		<ListBoxItem bind:group={comboboxValue} name="medium" value="books">
			Books
		</ListBoxItem>
		<ListBoxItem bind:group={comboboxValue} name="medium" value="movies">
			Movies
		</ListBoxItem>
		<ListBoxItem bind:group={comboboxValue} name="medium" value="television">
			Television
		</ListBoxItem>
	</ListBox>
	<!-- Arrow -->
	<div class="arrow bg-surface-100-800-token" />
</div>
					`}
					/>
				</svelte:fragment>
			</DocsPreview>
		</section>
		<!-- Browser Support -->
		<section class="space-y-4">
			<h2>Browser Support</h2>
			<p>
				Please be aware that there is a z-index bug for popups rendered over elements using <code>backdrop-blur</code> in some browsers. The
				popup will appear to be rendered behind the blurred element, even with an elevated z-index.
			</p>
		</section>
		<!-- Accessibility -->
		<section class="space-y-4">
			<h2>Accessibility</h2>
			<p>We recommend you favor the <code>click</code> event for mobile devices, as <code>hover</code> is not well supported.</p>
		</section>
		<hr />
	</svelte:fragment>
</DocsShell>
