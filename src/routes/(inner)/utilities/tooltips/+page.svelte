<script lang="ts">
	// Components
	import DataTable from '$lib/components/Table/DataTable.svelte';
	// Utilities
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';
	import { tooltip } from '$lib/utilities/Tooltip/tooltip';

	// Examples
	const examples: any = {
		top: { content: 'Tooltip <strong>TOP</strong>', position: 'top' },
		bottom: { content: 'Tooltip <strong>BOTTOM</strong>', position: 'bottom', background: '!bg-accent-500' },
		left: { content: 'Tooltip <strong>LEFT</strong>', position: 'left', background: '!bg-ternary-500' },
		right: { content: 'Tooltip <strong>RIGHT</strong>', position: 'right', background: '!bg-warning-500' },
		html: {
			content: `
				<img src="https://source.unsplash.com/random/1280x540?skeleton" class="w-full aspect-[21/9]" alt="example" />
				<p class="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio et voluptatibus nobis cupiditate eos saepe ab officiis quisquam consequatur magni porro veritatis fuga mollitia ipsa, blanditiis quidem minima molestias sint.</p>
			`,
			position: 'bottom',
			width: '!w-[480px]'
		}
	};

	const tableActionParams: any = {
		headings: ['Prop', 'Type', 'Default', 'Values', 'Required', 'Description'],
		source: [
			['content', 'string', '(tooltip)', 'HTML', '&check;', 'The HTML content of your tooltip.'],
			['position', 'string', 'top', 'top | bottom | left | right', '-', 'Designates where the tooltip will appear.'],
			['background', 'string', '-', 'class', '-', 'Provide a class to set the background color.'],
			['color', 'string', '-', 'class', '-', 'Provide a class to set the text color.'],
			['width', 'string', '-', 'class', '-', 'Provide a class to set the width.'],
			['padding', 'string', '-', 'class', '-', 'Provide a class to set the padding.'],
			['shadow', 'string', '-', 'class', '-', 'Provide a class to set the box shadow.'],
			['rounded', 'string', '-', 'class', '-', 'Provide a class to set the border radius.'],
			['regionContainer', 'string', '-', 'class', '-', 'Provide arbitrary classes to the container element.'],
			['regionTooltip', 'string', '-', 'class', '-', 'Provide arbitrary classes to the tooltip element.'],
			['regionArrow', 'string', '-', 'class', '-', 'Provide arbitrary classes to the tooltip arrow element.']
		]
	};
	const tableClasses: any = {
		headings: ['Selector', 'Description'],
		source: [
			['<code>.tooltip-container</code>', 'The wrapping DIV container.'],
			['<code>.tooltip</code>', 'The tooltip element body.'],
			['<code>.tooltip-arrow</code>', 'The small tooltip arrow.']
		]
	};
</script>

<div class="space-y-8">
	<!-- Header -->
	<header class="space-y-4">
		<h1>Tooltips</h1>
		<p>Informative tooltips that render on mouse over.</p>
		<CodeBlock language="javascript" code={`// Included in 'all.css' and 'elements.css'\nimport '@brainandbones/skeleton/styles/elements/tooltips.css';`} />
		<CodeBlock language="javascript" code={`import { tooltip } from '@brainandbones/skeleton';`} />
	</header>

	<!-- Examples -->
	<!-- prettier-ignore -->
	<section class="card">
		<div class="card-body max-w-[280px] mx-auto">
			<div class="grid grid-cols-2 gap-4 mb-4">
				<button class="btn btn-ghost w-full" use:tooltip={examples.top}>Top</button>
				<button class="btn btn-ghost w-full" use:tooltip={examples.bottom}>Bottom</button>
				<button class="btn btn-ghost w-full" use:tooltip={examples.left}>Left</button>
				<button class="btn btn-ghost w-full" use:tooltip={examples.right}>Right</button>
			</div>
			<button class="btn btn-ghost w-full" use:tooltip={examples.html}>HTML Content</button>
		</div>
	</section>

	<!-- Usage -->
	<section class="space-y-4">
		<h2>Usage</h2>
		<p>Use the <code>tooltip</code> action and provided your desired HTML content.</p>
		<CodeBlock language="html" code={`<button use:tooltip={{ content: 'Skeleton' }}>Trigger</button>`} />
		<p>This will automatically construct the the required markup as follows.</p>
		<CodeBlock
			language="html"
			code={`
<!-- Container -->
<div class="tooltip-container relative regionContainer">
	<!-- Tooltip -->
	<div class="tooltip tooltip-top regionTooltip hidden" role="tooltip" data-testid="tooltip">
		Skeleton
		<!-- Arrow -->
		<div class="tooltip-arrow-top regionArrow" />
	</div>
	<!-- Trigger -->
	<button>Trigger</button>
</div>
		`}
		/>
		<h3>Positions</h3>
		<p>Adjust the setting for <code>position: 'top|bottom|left|right'</code></p>
		<CodeBlock language="html" code={`<button use:tooltip={{ content: 'Skeleton', position: 'bottom' }}>Trigger</button>`} />
		<h3>Style Keys</h3>
		<p>Most styles should be handled via global CSS overrides, however we've provided keys to overriding values per tooltip.</p>
		<CodeBlock language="html" code={`<button use:tooltip={{ ... background: '!bg-accent-500', text: '!text-yellow-500', width: '!w-56' }}>Trigger</button>`} />
		<h3>Style Regions</h3>
		<p>Use style regions to pass multiple abitrary classes to a particular element.</p>
		<CodeBlock language="html" code={`<button use:tooltip={{ ... regionTooltip: 'space-y-4 uppercase' }}>Trigger</button>`} />
	</section>

	<!-- Action Params -->
	<section class="space-y-4">
		<h2>Action Params</h2>
		<p>Param styles should only be used for updating a single tooltip instance.</p>
		<DataTable headings={tableActionParams.headings} source={tableActionParams.source} />
	</section>

	<!-- Classes -->
	<section class="space-y-4">
		<h2>Classes</h2>
		<p>In most cases you should override Tooltip styles globally using these selectors.</p>
		<DataTable headings={tableClasses.headings} source={tableClasses.source} />
	</section>

	<!-- Accessibility -->
	<section class="space-y-4">
		<h2>Accessibility</h2>
		<p>
			Note the the <a href="https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/" target="_blank">ARIA Guidelines</a>
			are a
			<a href="https://github.com/w3c/aria-practices/issues/128" target="_blank">work-in-progress</a> and subject to change over time.
		</p>
	</section>
</div>
