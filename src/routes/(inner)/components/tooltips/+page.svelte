<script lang="ts">
	import { DataTable, Alert, Tooltip } from '@brainandbones/skeleton';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

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
		<p>Informative tooltips that render on mouse over. Note that tooltips are not supported on mobile.</p>
		<CodeBlock language="javascript" code={`import { Tooltip } from '@brainandbones/skeleton';`} />
	</header>

	<!-- Examples -->
	<Alert class="sm:hidden">
		<svelte:fragment slot="title">Warning</svelte:fragment>
		Tooltips require mouse hover events. They are not available for use on mobile.
	</Alert>
	<section class="hidden sm:block space-y-4">
		<!-- Default -->
		<div class="card card-body space-y-4">
			<div class="flex justify-center items-center space-x-4">
				<Tooltip>
					<svelte:fragment slot="message">Tooltip on Top.</svelte:fragment>
					<svelte:fragment slot="content"><button class="btn btn-ghost">Top</button></svelte:fragment>
				</Tooltip>
				<Tooltip position="bottom">
					<svelte:fragment slot="message">Tooltip on Bottom.</svelte:fragment>
					<svelte:fragment slot="content"><button class="btn btn-ghost">Bottom</button></svelte:fragment>
				</Tooltip>
				<Tooltip background="bg-accent-500" color="text-primary-200" width="w-[300px]" whitespace="whitespace-normal" rounded="rounded-xl" duration={0}>
					<svelte:fragment slot="message">
						<h3 class="mb-1">Hello, Skeleton 💀</h3>
						<span class="text-xs">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati id atque laboriosam provident eum facere, architecto veniam.</span>
					</svelte:fragment>
					<svelte:fragment slot="content">
						<button class="btn btn-ghost">Styled</button>
					</svelte:fragment>
				</Tooltip>
			</div>
			<div class="flex justify-center items-center space-x-4">
				<Tooltip position="left">
					<svelte:fragment slot="message">Tooltip on Left.</svelte:fragment>
					<svelte:fragment slot="content"><button class="btn btn-ghost">Left</button></svelte:fragment>
				</Tooltip>
				<Tooltip position="right">
					<svelte:fragment slot="message">Tooltip on Right.</svelte:fragment>
					<svelte:fragment slot="content"><button class="btn btn-ghost">Right</button></svelte:fragment>
				</Tooltip>
			</div>
		</div>
	</section>

	<!-- Usage -->
	<section class="space-y-4">
		<h2>Usage</h2>
		<CodeBlock
			language="html"
			code={`
<Tooltip>
    <svelte:fragment slot="message">This is a basic tooltip.</svelte:fragment>
    <svelte:fragment slot="content"><button class="btn btn-ghost">Default</button></svelte:fragment>
</Tooltip>
        `}
		/>
		<h3>Styled</h3>
		<CodeBlock
			language="html"
			code={`
<Tooltip background="bg-accent-500" color="text-primary-200" width="w-[300px]" whitespace="whitespace-normal" rounded="rounded-xl" duration={0}>
    <svelte:fragment slot="message">
        <h3 class="mb-1">Hello, Skeleton 💀</h3>
        <span class="text-xs text-white/60">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati id atque laboriosam provident eum facere, architecto veniam.</span>
    </svelte:fragment>
    <svelte:fragment slot="content">
        <button class="btn btn-ghost">Styled</button>
    </svelte:fragment>
</Tooltip>
        `}
		/>
	</section>

	<!-- Properties -->
	<section class="space-y-4">
		<h2>Properties</h2>
		<DataTable headings={tableProps.headings} source={tableProps.source} />
		<DataTable headings={tablePropSlots.headings} source={tablePropSlots.source} />
	</section>

	<!-- Slots -->
	<section class="space-y-4">
		<h2>Slots</h2>
		<DataTable headings={tableSlots.headings} source={tableSlots.source} />
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
