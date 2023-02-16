<script lang="ts">
	import DocsShell from '$docs/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/DocsShell/types';

	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';
	import ListBox from '$lib/components/ListBox/ListBox.svelte';
	import ListBoxItem from '$lib/components/ListBox/ListBoxItem.svelte';

	import { popup } from '$lib/utilities/popup/popup';
	import type { PopupSettings } from '$lib/utilities/popup/types';

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
			['<code>middleware</code>', 'object', '-', '-', 'Provide options for each middleware.'],
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
	let exampleTooltip: PopupSettings = {
		event: 'hover',
		target: 'exampleTooltip',
		placement: 'top'
	};
	let exampleMenu: PopupSettings = {
		event: 'click',
		target: 'exampleMenu',
		placement: 'top'
		// state: (e: any) => console.log('tooltip', e)
	};
	let exampleCombobox: PopupSettings = {
		event: 'click',
		target: 'exampleCombobox',
		placement: 'bottom'
		// state: (e: any) => console.log('tooltip', e)
	};
	let listboxValue: string;
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<section class="card variant-glass p-4 md:py-10 flex flex-col md:flex-row justify-center items-center gap-4">
			<!-- Tooltip -->
			<div>
				<button class="btn variant-filled" use:popup={exampleTooltip}>
					<span>Tooltip</span>
					<span class="badge bg-white/10 dark:bg-black/10">Hover</span>
				</button>
				<div class="card variant-filled-primary p-4 w-72 shadow-xl" data-popup="exampleTooltip">
					This is a tooltip.
					<div class="arrow variant-filled-primary" />
				</div>
			</div>
			<!-- Card -->
			<div>
				<button class="btn variant-filled" use:popup={exampleMenu}>
					<span>Menu</span>
					<span class="badge bg-white/10 dark:bg-black/10">Tap</span>
				</button>
				<div class="card variant-filled-secondary p-4 w-72 shadow-xl" data-popup="exampleMenu">
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta amet nam hic aspernatur cum porro praesentium. Voluptates velit
						ex ad eius sit! Sit deserunt ex accusamus quod fugit enim in?
					</p>
					<div class="arrow variant-filled-secondary" />
				</div>
			</div>
			<!-- Combobox -->
			<div>
				<button class="btn variant-filled w-48 justify-between" use:popup={exampleCombobox}>
					<span class="capitalize">{listboxValue ?? 'Combobox'}</span>
					<i class="fa-solid fa-caret-down opacity-50" />
				</button>
				<div class="card w-48 shadow-xl overflow-hidden" data-popup="exampleCombobox">
					<ListBox rounded="rounded-none">
						<ListBoxItem bind:group={listboxValue} name="medium" value="books">Books</ListBoxItem>
						<ListBoxItem bind:group={listboxValue} name="medium" value="movies">Movies</ListBoxItem>
						<ListBoxItem bind:group={listboxValue} name="medium" value="television">Television</ListBoxItem>
					</ListBox>
				</div>
			</div>
		</section>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<!-- Install Floating UI -->
		<section class="space-y-4">
			<p>
				<a href="https://floating-ui.com/" target="_blank" rel="noreferrer">Floating UI</a> is a required dependency to enable Skeleton popup
				features.
			</p>
			<CodeBlock language="console" code={`npm install @floating-ui/dom`} />
		</section>
		<!-- Configure Your Project -->
		<section class="space-y-4">
			<h2>Configure Your Project</h2>
			<p>Import Floating UI into your root layout in <code>/src/routes/+layout.svelte</code>.</p>
			<CodeBlock language="ts" code={`import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';`} />
			<p>Then import <code>storePopup</code> from Skeleton.</p>
			<CodeBlock language="ts" code={`import { storePopup } from '@skeletonlabs/skeleton';`} />
			<p>Finally, pass an object containing each of the Floating UI features to the store.</p>
			<CodeBlock language="ts" code={`storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });`} />
		</section>
		<!-- Create a Popup -->
		<section class="space-y-4">
			<h2>Create a Popup</h2>
			<!-- prettier-ignore -->
			<p>Create a <code>PopupSettings</code> object that maps to <a href="https://floating-ui.com/" target="_blank" rel="noreferrer">Floating UI</a> settings.</p>
			<CodeBlock
				language="ts"
				code={`
let exampleSettings: PopupSettings = {
	// Set the event as: click | hover | hover-click
	event: 'click',
	// Provide a matching 'data-popup' value.
	target: 'examplePopup'
};
			`}
			/>
			<p>Apply the <code>use:popup</code> action to your trigger element.</p>
			<CodeBlock language="html" code={`<button ... use:popup={exampleSettings}>Trigger</button>`} />
			<p>Apply a <code>data-popup</code> attribute to your desired popup element.</p>
			<CodeBlock language="html" code={`<div ... data-popup="examplePopup">(content)</div>`} />
			<!-- Arrow -->
			<div class="flex items-center space-x-2">
				<h3>Arrow</h3>
				<span class="badge variant-ghost">Optional</span>
			</div>
			<p>Append an <code>.arrow</code> class element within your popup, then apply a matching background color.</p>
			<CodeBlock
				language="html"
				code={`
<div class="card variant-filled-secondary p-4" data-popup="examplePopup">
	Popup text.
	<!-- Append the arrow element -->
	<div class="arrow variant-filled-secondary" />
</div>
			`}
			/>
			<!-- Placement -->
			<h3>Placement</h3>
			<!-- prettier-ignore -->
			<p>
				Reference the available <a href="https://floating-ui.com/docs/computePosition#placement" target="_blank" rel="noreferrer">placement</a> options. This setting defaults to <code>bottom</code>.
			</p>
			<CodeBlock
				language="ts"
				code={`
let exampleSettings: PopupSettings = {
	// ...
	placement: 'bottom'
};
			`}
			/>
			<!-- State Handler -->
			<h3>State Handler</h3>
			<p>You can optionally monitor the show and hide state of a popup using <code>state</code>.</p>
			<CodeBlock
				language="ts"
				code={`
let exampleSettings: PopupSettings = {
	// ...
	state: (e) => console.log(e)
};
			`}
			/>
			<!-- Middleware -->
			<div class="flex items-center space-x-2">
				<h3>Middleware</h3>
				<span class="badge variant-filled-error">Advanced</span>
			</div>
			<!-- prettier-ignore -->
			<p>
				You can modify settings for select <a href="https://floating-ui.com/docs/middleware" target="_blank" rel="noreferrer">Floating UI middleware</a> within <code>PopupSettings</code>. These are passed verbatim.
			</p>
			<CodeBlock
				language="ts"
				code={`
let exampleSettings: PopupSettings = {
	// ...
	middleware: {
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
		</section>
		<!-- Accessibility -->
		<section class="space-y-4">
			<h2>Accessibility</h2>
			<p>We recommend you favor the <code>click</code> event for mobile devices, as <code>hover</code> is not well supported.</p>
		</section>
		<hr />
		<!-- Browser Support -->
		<section class="space-y-4">
			<h2>Browser Support</h2>
			<p>
				Please be aware that there is a z-index bug for popups rendered over elements using <code>backdrop-blur</code> in some browsers. The
				popup will appear to be rendered behind the blurred element, even with an elevated z-index.
			</p>
		</section>
	</svelte:fragment>
</DocsShell>
