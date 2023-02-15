<script lang="ts">
	import DocsShell from '$docs/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/DocsShell/types';

	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';
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
	let value = 1;
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<section class="card p-4 py-10 flex justify-center items-center space-x-4">
			<!-- Card -->
			<div>
				<button class="btn variant-filled" use:popup={exampleTooltip}>Hover Me</button>
				<div class="card variant-filled-primary p-4 w-72 shadow-xl" data-popup="exampleTooltip">
					This is a tooltip.
					<div class="arrow variant-filled-primary" />
				</div>
			</div>
			<!-- Card -->
			<div>
				<button class="btn variant-filled" use:popup={exampleCard}>Tap Me</button>
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
				<button class="btn variant-filled w-[130px]" use:popup={exampleCombobox}>
					<span>Option {value}</span>
					<i class="fa-solid fa-caret-down opacity-50" />
				</button>
				<div class="w-72 shadow-xl !z-50" data-popup="exampleCombobox">
					<select class="select" size="4" bind:value>
						<option value={1}>Option 1</option>
						<option value={2}>Option 2</option>
						<option value={3}>Option 3</option>
						<option value={4}>Option 4</option>
						<option value={5}>Option 5</option>
					</select>
					<div class="arrow bg-surface-200-700-token" />
				</div>
			</div>
		</section>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<section class="space-y-4">
			<!-- prettier-ignore -->
			<p>Create a <code>PopupSettings</code> object that maps to <a href="https://floating-ui.com/" target="_blank" rel="noreferrer">Floating UI</a> settings.</p>
			<CodeBlock
				language="ts"
				code={`
let exampleSettings: PopupSettings = {
	// Set the event as: click | hover | hover-click
	event: 'click',
	// Provide a matching 'data-popup' value.
	target: 'examplePopup',
	// Set the placement position.
	placement: 'bottom'
};
			`}
			/>
			<p>Apply the <code>use:popup</code> action to your trigger element.</p>
			<CodeBlock language="html" code={`<button ... use:popup={exampleSettings}>Trigger</button>`} />
			<p>Apply a <code>data-popup</code> attribute to your desired popup element.</p>
			<CodeBlock language="html" code={`<div ... data-popup="examplePopup">(content)</div>`} />
		</section>
	</svelte:fragment>
</DocsShell>
