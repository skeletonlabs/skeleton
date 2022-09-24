<script lang="ts">
	import { DataTable, Badge, Avatar } from '@brainandbones/skeleton';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';
	import SvgIcon from '$lib/components/SvgIcon/SvgIcon.svelte';

	// Props
	const tableProps: any = {
		headings: ['Prop', 'Type', 'Default', 'Description'],
		source: [
			['icon', 'boolean', '-', 'Enable icon mode, making the badge small and circular.'],
			['background', 'string', 'bg-surface-300 dark:bg-surface-600', 'Provide classes to set the background color.'],
			['fill', 'string', 'fill-black dark:fill-white', 'Provide classes to set to set SVG fill color.'],
			['text', 'string', 'text-xs', 'Provide classes to set to set text size.'],
			['color', 'string', 'text-black dark:text-white', 'Provide classes to set the text color.'],
			['padding', 'string', 'px-2 py-1', 'Provide classes to set padding styles.'],
			['rounded', 'string', 'rounded', 'Provide classes to set rounded styles.'],
			['shadow', 'string', '-', 'Provide classes to set shadow styles.']
		]
	};
	// Slots
	const tableSlots: any = {
		headings: ['Slot', 'Style Prop', 'Description'],
		source: [
			['default', 'slotDefault', 'Provide your default content, usually the text label.'],
			['lead', 'slotLead', 'Provide a leading element, such as an icon.'],
			['trail', 'slotDefault', 'Provide a trailing element, such as an icon.']
		]
	};
</script>

<div class="space-y-8">
	<!-- Heading -->
	<heading class="space-y-4">
		<h1>Badges</h1>
		<p>Useful for displaying a small badge, pill, or label tag.</p>
		<CodeBlock language="javascript" code={`import { Badge } from '@brainandbones/skeleton';`} />
	</heading>

	<!-- Examples -->
	<section class="space-y-4">
		<h2 class='sr-only'>Examples</h2>
		<section class="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4">
			<div class="card card-body flex-auto flex justify-center space-x-2">
				<Badge>Skeleton</Badge>
			</div>
			<div class="card card-body flex-auto flex justify-center space-x-4">
				<Badge background="bg-primary-500" color="text-white">
					Complete
					<svelte:fragment slot="lead">
						<SvgIcon name="circle-check" width="w-3" height="w-3" fill="fill-white" class="!block" />
					</svelte:fragment>
				</Badge>
				<Badge background="bg-accent-500" color="text-white">
					Skeleton
					<svelte:fragment slot="trail">💀</svelte:fragment>
				</Badge>
				<Badge background="bg-warning-500" color="text-white">
					Favorite
					<svelte:fragment slot="lead">❤️</svelte:fragment>
				</Badge>
			</div>
		</section>
		<h3>Positioning</h3>
		<section class="grid grid-cols-1 xl:grid-cols-3 gap-4">
			<div class="card card-body flex justify-center items-center h-full space-x-2">
				<h4>Skeleton</h4>
				<sup class="-translate-y-1"><Badge background="bg-primary-500" color="text-white" class="-ml-0">Sup</Badge></sup>
			</div>
			<div class="card card-body flex justify-center items-center h-full space-x-2">
				<h4>Skeleton</h4>
				<sub class="translate-y-1"><Badge background="bg-accent-500" color="text-white" class="-ml-0">Sub</Badge></sub>
			</div>
			<div class="card card-body flex justify-center items-center space-x-6">
				<div class="relative inline-block">
					<Badge background="bg-primary-500" color="text-white" class="absolute -top-3 -right-4 z-10 shadow-xl">50k</Badge>
					<button class="btn btn-sm btn-ghost">Button</button>
				</div>
				<div class="relative inline-block">
					<Badge icon background="bg-accent-500" color="text-white" class="absolute top-0 right-0 z-10 shadow-xl">2</Badge>
					<Avatar size="md" />
				</div>
				<div class="relative inline-block">
					<Badge icon background="bg-warning-500" class="absolute top-0 right-0 z-10 shadow-xl">
						<SvgIcon name="heart" width="w-3" height="w-3" fill="fill-white" class="!block" />
					</Badge>
					<Avatar size="md" />
				</div>
			</div>
		</section>
	</section>

	<!-- Usage -->
	<section class="space-y-4">
		<h2>Usage</h2>
		<CodeBlock language="html" code={`<Badge>\n\t<svelte:fragment slot="lead">💀</svelte:fragment>\n\tSkeleton\n</Badge>`} />
		<h4>Overlapping Icon</h4>
		<p>Use Tailwind utility classes to overlap elements.</p>
		<CodeBlock
			language="html"
			code={`
<div class="relative inline-block">
	<Badge icon class="absolute top-0 right-0 z-10">💀</Badge>
	<Avatar background="bg-primary-500" />
</div>
		`}
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
</div>
