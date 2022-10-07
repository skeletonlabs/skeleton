<script lang="ts">
	import DocsShell from '$docs/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings, type DocsShellTable } from '$docs/DocsShell/types';

	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';
	import { tooltip, type ArgsTooltip } from '$lib/utilities/Tooltip/tooltip';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Utility,
		name: 'Tooltips',
		description: 'Informative tooltips that render on mouse over.',
		imports: ['tooltip'],
		stylesheetIncludes: ['all', 'elements'],
		stylesheets: ['elements/tooltips'],
		source: 'utilities/Tooltip'
		// dependencies: [{ label: 'Highlight.js', url: 'https://highlightjs.org/' }],
	};
	const properties: DocsShellTable[] = [
		{
			label: 'Action Parameters',
			headings: ['Prop', 'Type', 'Default', 'Values', 'Required', 'Description'],
			source: [
				['<code>content</code>', 'string', '(tooltip)', 'HTML', '&check;', 'The HTML content of your tooltip.'],
				['<code>position</code>', 'string', 'top', 'top | bottom | left | right', '-', 'Designates where the tooltip will appear.'],
				['<code>inline</code>', 'boolean', 'false', 'true | false', '-', 'Sets the wrapping element to inline or block.'],
				['<code>background</code>', 'string', '-', 'class', '-', 'Provide a class to set the background color.'],
				['<code>color</code>', 'string', '-', 'class', '-', 'Provide a class to set the text color.'],
				['<code>width</code>', 'string', '-', 'class', '-', 'Provide a class to set the width.'],
				['<code>padding</code>', 'string', '-', 'class', '-', 'Provide a class to set the padding.'],
				['<code>shadow</code>', 'string', '-', 'class', '-', 'Provide a class to set the box shadow.'],
				['<code>rounded</code>', 'string', '-', 'class', '-', 'Provide a class to set the border radius.'],
				['<code>regionContainer</code>', 'string', '-', 'class', '-', 'Provide arbitrary classes to the container element.'],
				['<code>regionTooltip</code>', 'string', '-', 'class', '-', 'Provide arbitrary classes to the tooltip element.'],
				['<code>regionArrow</code>', 'string', '-', 'class', '-', 'Provide arbitrary classes to the tooltip arrow element.']
			]
		}
	];
	const events: DocsShellTable[] = [
		{
			description: 'Coming soon.'
			// headings: ['Event', 'Description'],
			// source: [
			// 	['<code>on:click</code>', '...'],
			// 	['<code>on:hover</code>', '...']
			// ]
		}
	];
	const classes: DocsShellTable[] = [
		{
			headings: ['Selector', 'Description'],
			source: [
				['<code>.tooltip-container</code>', 'The wrapping DIV container.'],
				['<code>.tooltip</code>', 'The tooltip element body.'],
				['<code>.tooltip-arrow</code>', 'The small tooltip arrow.']
			]
		}
	];
	const a11y: DocsShellTable[] = [
		{
			aria: 'https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/',
			description: 'Note the the ARIA Guidelines are a work-in-progress and subject to change.'
		},
		{
			label: 'Keyboard Interactions',
			headings: ['Key', 'Description'],
			source: [['<kbd>Esc</kbd>', 'Closes all open tooltips.']]
		}
	];

	// Local
	const exampleTop: ArgsTooltip = { content: 'Tooltip <strong>TOP</strong>', position: 'top' };
	const exampleBottom: ArgsTooltip = { content: 'Tooltip <strong>BOTTOM</strong>', position: 'bottom', background: '!bg-accent-500' };
	const exampleLeft: ArgsTooltip = { content: 'Tooltip <strong>LEFT</strong>', position: 'left', background: '!bg-ternary-500' };
	const exampleRight: ArgsTooltip = { content: 'Tooltip <strong>RIGHT</strong>', position: 'right', background: '!bg-warning-500' };
	const exampleHtml: ArgsTooltip = {
		content: `
			<img src="https://source.unsplash.com/random/1280x540?skeleton" class="w-full aspect-[21/9]" alt="example" />
			<p class="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio et voluptatibus nobis cupiditate eos saepe ab officiis quisquam consequatur magni porro veritatis fuga mollitia ipsa, blanditiis quidem minima molestias sint.</p>
		`,
		position: 'bottom',
		inline: false,
		width: '!w-[480px]'
	};
</script>

<DocsShell {settings} {properties} {events} {classes} {a11y}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<!-- prettier-ignore -->
		<section class="card">
			<div class="card-body max-w-[280px] mx-auto">
				<div class="grid grid-cols-2 gap-4 mb-4">
					<button class="btn btn-ghost w-full" use:tooltip={exampleTop}>Top</button>
					<button class="btn btn-ghost w-full" use:tooltip={exampleBottom}>Bottom</button>
					<button class="btn btn-ghost w-full" use:tooltip={exampleLeft}>Left</button>
					<button class="btn btn-ghost w-full" use:tooltip={exampleRight}>Right</button>
				</div>
				<button class="btn btn-ghost w-full" use:tooltip={exampleHtml}>HTML Content</button>
			</div>
		</section>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<section class="space-y-8">
			<div class="space-y-4">
				<h2>Usage</h2>
				<p>Use the <code>tooltip</code> action and provided your desired content. Note that content does support HTML.</p>
				<CodeBlock language="html" code={`<button use:tooltip={{ content: 'Skeleton' }}>Trigger</button>`} />
				<p>This will automatically construct and wrap the target element with the required markup.</p>
				<CodeBlock
					language="html"
					code={`
	<!-- Container -->
	<span class="tooltip-container relative regionContainer">
		<!-- Tooltip -->
		<div class="tooltip tooltip-top regionTooltip hidden" role="tooltip" data-testid="tooltip">
			Skeleton
			<!-- Arrow -->
			<div class="tooltip-arrow-top regionArrow" />
		</div>
		<!-- Trigger -->
		<button>Trigger</button>
	</span>
			`}
				/>
			</div>
			<div class="space-y-4">
				<h2>Positions</h2>
				<p>Adjust the setting for <code>position: 'top|bottom|left|right'</code></p>
				<CodeBlock language="html" code={`<button use:tooltip={{ content: 'Skeleton', position: 'bottom' }}>Trigger</button>`} />
			</div>
			<div class="space-y-4">
				<h2>Style Keys</h2>
				<p>Most styles should be handled via global CSS overrides. However, you may override styles using preset keys, similar to component props.</p>
				<CodeBlock language="html" code={`<button use:tooltip={{ ... background: '!bg-accent-500', text: '!text-yellow-500', width: '!w-56' }}>Trigger</button>`} />
				<p>Use style region keys to pass multiple abitrary classes to a particular element region.</p>
				<CodeBlock language="html" code={`<button use:tooltip={{ ... regionTooltip: 'space-y-4 uppercase' }}>Trigger</button>`} />
			</div>
		</section>
	</svelte:fragment>
</DocsShell>
