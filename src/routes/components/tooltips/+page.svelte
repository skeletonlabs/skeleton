<script lang="ts">
	import CodeBlock from '$lib/CodeBlock/CodeBlock.svelte';
	import DataTable from '$lib/Table/DataTable.svelte';
	import Card from '$lib/Card/Card.svelte';
	import Button from '$lib/Button/Button.svelte';
	import Alert from '$lib/Alert/Alert.svelte';
	import Tooltip from '$lib/Tooltip/Tooltip.svelte';

	const tableProps: any = {
		headings: ['Prop', 'Type', 'Default', 'Values', 'Description'],
		source: [
			['visible', 'boolean', 'false', 'true | false', 'Whether the tooltip is showing or not.'],
			[
				'position',
				'string',
				'top',
				'top | bottom | left | right',
				'Designates where the tooltip will appear.'
			],
			[
				'background',
				'string',
				'bg-black dark:bg-white',
				'class',
				'Provide a class to set background color.'
			],
			[
				'color',
				'string',
				'text-white dark:text-black',
				'class',
				'Provide a class to set text color.'
			],
			['width', 'string', 'w-auto', 'class', 'Provide a class to set width.'],
			['whitespace', 'string', 'whitespace-nowrap', 'class', 'Provide a class to set white-space.'],
			['rounded', 'string', 'rounded', 'class', 'Provide a class to set rounding style.'],
			[
				'duration',
				'number',
				'150',
				'number',
				'Animation fade in/out duration in milliseconds. Set to 0 (zero) to disable.'
			]
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
		<p>
			Informative tooltips that render on mouse over. Note that tooltips are not supported on
			mobile.
		</p>
		<CodeBlock language="javascript" code={`import { Tooltip } from '@brainandbones/skeleton';`} />
	</header>

	<!-- Examples -->
	<Alert background="bg-warning-500" class="sm:hidden">
		<svelte:fragment slot="title">Warning</svelte:fragment>
		<svelte:fragment slot="message"
			>Tooltips require mouse hover events. They are not available for use on mobile.</svelte:fragment
		>
	</Alert>
	<section class="hidden sm:block space-y-4">
		<!-- Default -->
		<Card class="flex flex-col space-y-2">
			<section class="flex justify-center">
				<Tooltip>
					<svelte:fragment slot="message">Tooltip on Top.</svelte:fragment>
					<svelte:fragment slot="content"
						><Button variant="ghost" width="w-[90px]">Top</Button></svelte:fragment
					>
				</Tooltip>
			</section>
			<section class="flex justify-center space-x-2">
				<Tooltip position="left">
					<svelte:fragment slot="message">Tooltip on Left.</svelte:fragment>
					<svelte:fragment slot="content"
						><Button variant="ghost" width="w-[90px]">Left</Button></svelte:fragment
					>
				</Tooltip>
				<Card class="flex justify-center">
					<Tooltip
						background="bg-accent-500"
						color="text-primary-200"
						width="w-[300px]"
						whitespace="whitespace-normal"
						rounded="rounded-xl"
						duration={0}
					>
						<svelte:fragment slot="message">
							<h3 class="mb-1">Hello, Skeleton 💀</h3>
							<span class="text-xs"
								>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati id atque
								laboriosam provident eum facere, architecto veniam.</span
							>
						</svelte:fragment>
						<svelte:fragment slot="content">
							<Button variant="ghost-accent" width="w-[90px]">Styled</Button>
						</svelte:fragment>
					</Tooltip>
				</Card>
				<Tooltip position="right">
					<svelte:fragment slot="message">Tooltip on Right.</svelte:fragment>
					<svelte:fragment slot="content"
						><Button variant="ghost" width="w-[90px]">Right</Button></svelte:fragment
					>
				</Tooltip>
			</section>
			<section class="flex justify-center">
				<Tooltip position="bottom">
					<svelte:fragment slot="message">Tooltip on Bottom.</svelte:fragment>
					<svelte:fragment slot="content"
						><Button variant="ghost" width="w-[90px]">Bottom</Button></svelte:fragment
					>
				</Tooltip>
			</section>
		</Card>
	</section>

	<!-- Usage -->
	<section class="space-y-4">
		<h2>Usage</h2>
		<CodeBlock
			language="html"
			code={`
<Tooltip>
    <svelte:fragment slot="message">This is a basic tooltip.</svelte:fragment>
    <svelte:fragment slot="content"><Button variant="ghost">Default</Button></svelte:fragment>
</Tooltip>
        `.trim()}
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
        <Button variant="ghost">Styled</Button>
    </svelte:fragment>
</Tooltip>
        `.trim()}
		/>
	</section>

	<!-- Properties -->
	<section class="space-y-4">
		<h2>Properties</h2>
		<DataTable headings={tableProps.headings} source={tableProps.source} />
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
			Note the the <a href="https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/" target="_blank"
				>ARIA Guidelines</a
			>
			are a
			<a href="https://github.com/w3c/aria-practices/issues/128" target="_blank">work-in-progress</a
			> and subject to change over time.
		</p>
	</section>
</div>
