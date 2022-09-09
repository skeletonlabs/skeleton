<script lang="ts">
	import { DataTable, Card, Button, Badge, Avatar } from '@brainandbones/skeleton';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';
	import SvgIcon from '$lib/components/SvgIcon/SvgIcon.svelte';

	// Props
	const tableProps: any = {
		headings: ['Prop', 'Type', 'Default', 'Description'],
		source: [
			['icon', 'boolean', 'false', 'Adjusts styling to accommodate icons.'],
			['background', 'class', 'bg-surface-500', 'Provide classes to set the background color.'],
			['color', 'class', 'text-white', 'Provide classes to set the text color.'],
			['fill', 'class', 'fill-white', 'Provide classes to set the fill color for SVG icons.'],
			['rounded', 'class', 'rounded-lg', 'Provide classes to set rounding style.']
		]
	};
	// Slots
	const tableSlots: any = {
		headings: ['Slot', 'Description'],
		source: [
			['lead', 'Define a leading element, such as an icon.'],
			['trail', 'Define a trailing element, such as an icon.']
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
		<section class="space-y-4 md:space-y-0 md:grid md:grid-cols-2 md:gap-4">
			<Card body="flex justify-center space-x-2">
				<Badge>Skeleton</Badge>
				<Badge background="bg-primary-500" color="text-primary-100">Skeleton</Badge>
				<Badge background="bg-accent-500" color="text-accent-100">Skeleton</Badge>
				<Badge background="bg-warning-500" color="text-primary-100">Skeleton</Badge>
			</Card>
			<Card body="flex justify-center space-x-2">
				<Badge>
					Complete
					<svelte:fragment slot="lead">
						<SvgIcon name="circle-check" width="w-3" height="w-3" fill="fill-white/50" class="!block" />
					</svelte:fragment>
				</Badge>
				<Badge background="bg-yellow-500" color="text-yellow-900" fill="fill-yellow-900">
					Complete
					<svelte:fragment slot="trail">
						<SvgIcon name="circle-check" width="w-3" height="w-3" fill="fill-yellow-900" class="!block" />
					</svelte:fragment>
				</Badge>
				<Badge background="bg-pink-300" color="text-pink-900" rounded="rounded-full">
					Favorite
					<svelte:fragment slot="lead">❤️</svelte:fragment>
				</Badge>
			</Card>
		</section>
		<h3>Positioning</h3>
		<section class="space-y-4 md:space-y-0 md:grid md:grid-cols-3 md:gap-4">
			<Card body="flex justify-center items-center h-full space-x-2">
				<p>Skeleton</p>
				<sup><Badge class="-ml-0" background="bg-primary-500">Super</Badge></sup>
			</Card>
			<Card body="flex justify-center items-center h-full space-x-2">
				<p>Skeleton</p>
				<sub><Badge class="-ml-0" background="bg-accent-500">Subscript</Badge></sub>
			</Card>
			<Card body="flex justify-center items-center space-x-4">
				<div class="relative inline-block">
					<Badge icon background="bg-primary-500" class="absolute top-0 right-0 z-10 shadow-xl">2</Badge>
					<Avatar size="md" />
				</div>
				<div class="relative inline-block">
					<Badge icon background="bg-warning-500" class="absolute top-0 right-0 z-10 shadow-xl">
						<SvgIcon name="heart" width="w-3" height="w-3" fill="fill-white" class="!block" />
					</Badge>
					<Avatar size="md" />
				</div>
				<div class="relative inline-block">
					<Badge class="absolute -top-2 -right-4 z-10 shadow-xl">5k</Badge>
					<Button size="sm" variant="filled-accent">Button</Button>
				</div>
			</Card>
		</section>
	</section>

	<!-- Usage -->
	<section class="space-y-4">
		<h2>Usage</h2>
		<CodeBlock language="html" code={`<Badge background="bg-primary-500">{label}</Badge>`} />
		<CodeBlock
			language="html"
			code={`
<Badge background="bg-pink-300" color="text-pink-900" rounded="rounded-full">
    Favorite
    <svelte:fragment slot="lead">❤️</svelte:fragment>
</Badge>
        `.trim()}
		/>
		<CodeBlock
			language="html"
			code={`
<div class="relative inline-block">
    <Badge icon background="bg-warning-500" class="absolute top-0 right-0 shadow-xl">2</Badge>
    <Avatar size="md" />
</div>
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
</div>
