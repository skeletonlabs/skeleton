<script lang="ts">
	import DocsShell from '$docs/layouts/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/layouts/DocsShell/types';
	import DocsPreview from '$docs/components/DocsPreview/DocsPreview.svelte';
	// Components
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';
	import TabGroup from '$lib/components/Tab/TabGroup.svelte';
	import Tab from '$lib/components/Tab/Tab.svelte';
	import type { TooltipSettings } from '$lib/utilities/Tooltip/types';
	import { tooltip } from '$lib/utilities/Tooltip/tooltip';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Utility,
		name: 'Tooltips',
		description:
			'Create floating menus and tooltips using <a href="https://floating-ui.com/" target="_blank" rel="noreferrer">Floating UI</a>.',
		imports: ['tooltip'],
		types: ['TooltipSettings'],
		stylesheetIncludes: ['all', 'elements'],
		stylesheets: ['elements/tooltips'],
		source: 'utilities/Tooltip',
		aria: 'https://www.w3.org/WAI/ARIA/apg/patterns/menu/',
		classes: [
			['<code>[data-popup]</code>', '', `Follows Floating UI's best practices, sets hidden by default.`],
			['<code>[data-popup] .arrow</code>', '', 'Provides base styles to the arrow element.']
		],
		parameters: [
			['<code>event</code>', 'string', 'click', 'click | hover | hover-click | focus | focus-click', 'Provide the tooltip event type.'],
			['<code>placement</code>', 'string', '-', 'bottom', 'Set the placement position.'],
      ['<code>arrow</code>', 'boolean', 'true', 'true | false', 'Sets whether to show the arrow.'],
			['<code>closeQuery</code>', 'string', 'a[href], button', '-', 'Query list of elements that will close the tooltip.'],
			['<code>middleware</code>', 'object', '-', '-', 'Provide Floating UI middleware settings.'],
			['<code>state</code>', 'function', '-', '-', 'Provide an optional callback function to monitor open/close state.']
		],
		keyboard: [
			['<kbd>Enter</kbd>', 'When trigger is focused, toggles the tooltip open/close.'],
			// ['<kbd>Space</kbd>', 'When trigger is focused, toggles the tooltip open/close.'],
			// ['<kbd>Tab</kbd>', 'When trigger is focused, closes the tooltip.'],
			['<kbd>Esc</kbd>', 'Closes all open tooltips at once.'],
			['<kbd>↑</kbd>', 'Move upwards to the next item in the tooltip.'],
			['<kbd>↓</kbd>', 'Move downwards to the next item in the tooltip.']
		],
		dependencies: [{ label: 'Floating UI', url: 'https://floating-ui.com/' }]
	};

	// Local
	let tabSettings: number = 0;
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<DocsPreview>
			<svelte:fragment slot="preview">
				<div class="flex gap-4 text-token py-4">
					<div>
						<button class="btn variant-filled" use:tooltip={{
							event: 'hover',
							placement: 'top',
							content: 'Excuse me?',
							arrow: true
						}}>Hover me!</button>
          </div>
				</div>
			</svelte:fragment>
			<svelte:fragment slot="source">
				<!-- prettier-ignore -->
				<p>Create a <code>TooltipSettings</code> object, or even set inline.
				<CodeBlock
					language="ts"
					code={`
let tooltipSettings: TooltipSettings = {
	// Set the event as: click | hover | hover-click | focus | focus-click
	event: 'hover',
	content: 'Hello there!'
};
`}
				/>
				<p>Apply the <code>use:tooltip</code> action to your trigger element.</p>
				<CodeBlock language="html" code={`<button ... use:tooltip={tooltipSettings}>Trigger</button>`} />
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
		<!-- TooltipSettings -->
		<section class="space-y-4">
			<h2>Tooltip Settings</h2>
			<TabGroup regionPanel="space-y-4">
				<Tab bind:group={tabSettings} name="settings" value={0}>Placement</Tab>
				<Tab bind:group={tabSettings} name="settings" value={1}>Close Query</Tab>
				<Tab bind:group={tabSettings} name="settings" value={2}>State</Tab>
				<Tab bind:group={tabSettings} name="settings" value={3}>Middleware</Tab>
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
let tooltipSettings: TooltipSettings = {
	placement: 'bottom'
};
`}
						/>
					{:else if tabSettings === 1}
						<!-- Close Query -->
						<!-- prettier-ignore -->
						<p>Query the list of elements that will close the drawer when clicked. This is set to <code>'a[href], button'</code> by default, but to limited to <code>.listbox-item</code> only we would use:</p>
						<CodeBlock
							language="ts"
							code={`
let tooltipSettings: TooltipSettings = {
	// Only listbox items will close the tooltip:
	closeQuery: '.listbox-item',
};
`}
						/>
						<p>To disable any child elements from closing the tooltip, use the following:</p>
						<CodeBlock
							language="ts"
							code={`
let tooltipSettings: TooltipSettings = {
	// No children will close the tooltip:
	closeQuery: '',
};
`}
						/>
					{:else if tabSettings === 2}
						<!-- State Handler -->
						<p>You can optionally monitor the show and hide state of a tooltip using <code>state</code>.</p>
						<CodeBlock
							language="ts"
							code={`
let tooltipSettings: TooltipSettings = {
state: (e) => console.log(e)
};
`}
						/>
					{:else if tabSettings === 3}
						<!-- Middleware -->
						<!-- prettier-ignore -->
						<p>
					You can provide <a href="https://floating-ui.com/docs/middleware" target="_blank" rel="noreferrer">Floating UI middleware</a> settings within <code>TooltipSettings</code>. These settings are passed verbatim.
				</p>
						<CodeBlock
							language="ts"
							code={`
let tooltipSettings: TooltipSettings = {
middleware: {
	// Floating UI Middleware
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
					{/if}
				</svelte:fragment>
			</TabGroup>
		</section>
		
		<!-- Z-index -->
		<section class="space-y-4">
			<h2>Z-Index</h2>
			<p>
				Neither Skeleton nor Floating-UI will provide a Z-Index out of the box for the reasons layed out in the
				<a href="https://floating-ui.com/docs/misc#z-index-stacking">Floating-UI docs</a>.
			</p>
		</section>
		<!-- Browser Support -->
		<section class="space-y-4">
			<h2>Browser Support</h2>
			<p>
				Please be aware that there is a z-index bug for tooltips rendered over elements using <code>backdrop-blur</code> in some browsers. The
				tooltip will appear to be rendered behind the blurred element, even with an elevated z-index.
			</p>
		</section>
		<!-- Accessibility -->
		<section class="space-y-4">
			<h2>Accessibility</h2>
			<p>We recommend you favor the <code>click</code> event for mobile devices, as <code>hover</code> is not well supported.</p>
		</section>
	</svelte:fragment>
</DocsShell>
