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
		description: 'Create floating menus and tooltips, powered by Floating UI.',
		imports: ['popover'],
		// stylesheetIncludes: ['all', 'elements'],
		// stylesheets: ['elements/menus'],
		source: 'utilities/Popups',
		aria: 'https://www.w3.org/WAI/ARIA/apg/patterns/menu/',
		// parameters: [],
		// keyboard: [],
		dependencies: [{ label: 'Floating UI', url: 'https://floating-ui.com/' }]
	};

	// Local
	let exampleTooltip: PopupSettings = {
		event: 'hover',
		target: 'exampleTooltip',
		placement: 'top'
	};
	let exampleCard: PopupSettings = {
		event: 'click',
		target: 'exampleCard',
		placement: 'top'
	};
	let exampleCombobox: PopupSettings = {
		event: 'click',
		target: 'exampleCombobox',
		placement: 'bottom'
	};
	let listboxValue: string;
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<section class="card p-4 md:py-10 flex flex-col md:flex-row justify-center items-center gap-4">
			<!-- Card -->
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
				<button class="btn variant-filled" use:popup={exampleCard}>
					<span>Menu</span>
					<span class="badge bg-white/10 dark:bg-black/10">Tap</span>
				</button>
				<div class="card variant-filled-secondary p-4 w-72 shadow-xl" data-popup="exampleCard">
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
				<div class="card variant-glass w-48 shadow-xl overflow-hidden" data-popup="exampleCombobox">
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
		<section class="space-y-4">
			<h2>Install Floating UI</h2>
			<p>
				<a href="https://floating-ui.com/" target="_blank" rel="noreferrer">Floating UI</a> is a required dependency to enable Skeleton popup
				features.
			</p>
			<CodeBlock language="console" code={`npm install @floating-ui/dom`} />
		</section>
		<section class="space-y-4">
			<h2>Configure Your Project</h2>
			<p>Import Floating UI into your root layout in <code>/src/routes/+layout.svelte</code>.</p>
			<CodeBlock language="ts" code={`import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';`} />
			<p>Then import <code>storePopup</code> from Skeleton.</p>
			<CodeBlock language="ts" code={`import { storePopup } from '@skeletonlabs/skeleton';`} />
			<p>Finally, pass an object containing each of the Floating UI features to the store.</p>
			<CodeBlock language="ts" code={`storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });`} />
		</section>
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
		</section>
		<section class="space-y-4">
			<h2>Placement</h2>
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
		</section>
		<section class="space-y-4">
			<div class="flex items-center space-x-2">
				<h2>Arrow</h2>
				<span class="badge variant-ghost">Optional</span>
			</div>
			<p>Append an <code>.arrow</code> class element, then apply a matching background color.</p>
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
		</section>
		<section class="space-y-4">
			<div class="flex items-center space-x-2">
				<h2>Middleware</h2>
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
	</svelte:fragment>
</DocsShell>
