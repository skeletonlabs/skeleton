<script lang="ts">
	// Components
	import DataTable from '$lib/components/Table/DataTable.svelte';
	// Utilities
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';
	import { tooltip } from '$lib/utilities/Tooltip/tooltip';

	const tableProps: any = {
		headings: ['Prop', 'Type', 'Default', 'Values', 'Description'],
		source: [
			['visible', 'boolean', 'false', 'true | false', 'Whether the tooltip is showing or not.'],
			['position', 'string', 'top', 'top | bottom | left | right', 'Designates where the tooltip will appear.'],
			['background', 'string', 'bg-black dark:bg-white', 'class', 'Provide classes to set background color.'],
			['color', 'string', 'text-white dark:text-black', 'class', 'Provide classes to set text color.'],
			['width', 'string', 'w-auto', 'class', 'Provide classes to set width.'],
			['whitespace', 'string', 'whitespace-nowrap', 'class', 'Provide classes to set white-space.'],
			['rounded', 'string', 'rounded', 'class', 'Provide classes to set rounding style.'],
			['duration', 'number', '150', 'number', 'Animation fade in/out duration in milliseconds. Set to 0 (zero) to disable.']
		]
	};
	const tablePropSlots: any = {
		headings: ['Prop', 'Type', 'Default', 'Description'],
		source: [
			['popup', 'string', 'false', 'Provide classes to style the popup.'],
			['message', 'string', 'false', 'Provide classes to style the popup message.'],
			['arrow', 'string', 'false', 'Provide classes to style the popup arrow.'],
			['content', 'string', 'false', 'Provide classes to style the tooltip content wrapping element.']
		]
	};
	const tableSlots: any = {
		headings: ['Name', 'Description'],
		source: [
			['content', 'The element that will trigger the tooltip when hovered.'],
			['message', 'The contents of the tooltip.']
		]
	};
</script>

<div class="space-y-8">
	<!-- Header -->
	<header class="space-y-4">
		<h1>Tooltips</h1>
		<p>Styles automatically included in <code>all.css</code> and <code>elements.css</code>. Informative tooltips that render on mouse over.</p>
		<CodeBlock language="javascript" code={`import '@brainandbones/skeleton/styles/elements/tooltips.css';`} />
		<CodeBlock language="javascript" code={`import { tooltip } from '@brainandbones/skeleton';`} />
	</header>

	<!-- Examples -->
	<section class="card card-body">
		<!-- prettier-ignore -->
		<div class="grid grid-cols-2 gap-4 max-w-[280px] mx-auto">
			<button
				class="btn btn-ghost w-full"
				use:tooltip={{ content: 'On the <strong>TOP</strong>', position: 'top' }}
			>Top</button>
			<button
				class="btn btn-ghost w-full"
				use:tooltip={{ content: 'On the <strong>BOTTOM</strong>', position: 'bottom', background: 'bg-accent-500' }}
			>Bottom</button>
			<button
				class="btn btn-ghost w-full"
				use:tooltip={{ content: 'On the <strong>LEFT</strong>', position: 'left', background: 'bg-ternary-500' }}
			>Left</button>
			<button
				class="btn btn-ghost w-full"
				use:tooltip={{ content: 'On the <strong>RIGHT</strong>', position: 'right', background: 'bg-warning-500' }}
			>Right</button>
		</div>
	</section>

	<!-- Usage -->
	<section class="space-y-4">
		<h2>Usage</h2>
		<p>Use the <code>tooltip</code> action and provided your desired HTML content.</p>
		<CodeBlock language="html" code={`<button use:tooltip={{ content: 'Skeleton' }}>Trigger</button>`} />
		<h3>Positions</h3>
		<p>Adjust the setting for <code>position: 'top|bottom|left|right'</code></p>
		<CodeBlock language="html" code={`<button use:tooltip={{ content: 'Skeleton', position: 'bottom' }}>Trigger</button>`} />
		<h3>Styles</h3>
		<p>To override the default settings, provide any form of utility classes.</p>
		<CodeBlock language="html" code={`<button use:tooltip={{ ... background: 'bg-accent-500', text: 'text-yellow-500', width: 'w-56' }}>Trigger</button>`} />
	</section>

	<!-- Properties -->
	<section class="space-y-4">
		<h2>Properties</h2>
		<p>(work-in-progress)</p>
		<!-- <DataTable headings={tableProps.headings} source={tableProps.source} /> -->
		<!-- <DataTable headings={tablePropSlots.headings} source={tablePropSlots.source} /> -->
	</section>

	<!-- Slots -->
	<section class="space-y-4">
		<h2>Slots</h2>
		<p>(work-in-progress)</p>
		<!-- <DataTable headings={tableSlots.headings} source={tableSlots.source} /> -->
	</section>

	<!-- Accessibility -->
	<!-- <section class="space-y-4">
		<h2>Accessibility</h2>
		<p>
			Note the the <a href="https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/" target="_blank">ARIA Guidelines</a>
			are a
			<a href="https://github.com/w3c/aria-practices/issues/128" target="_blank">work-in-progress</a> and subject to change over time.
		</p>
	</section> -->
</div>
