<script lang="ts">
	import Card from '$lib/Card/Card.svelte';
	import Avatar from '$lib/Avatar/Avatar.svelte';
	import Button from '$lib/Button/Button.svelte';
	import CodeBlock from '$lib/CodeBlock/CodeBlock.svelte';
	import DataTable from '$lib/Table/DataTable.svelte';
	import Badge from '$lib/Badge/Badge.svelte';

	let icon =
		'<svg class="w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM371.8 211.8C382.7 200.9 382.7 183.1 371.8 172.2C360.9 161.3 343.1 161.3 332.2 172.2L224 280.4L179.8 236.2C168.9 225.3 151.1 225.3 140.2 236.2C129.3 247.1 129.3 264.9 140.2 275.8L204.2 339.8C215.1 350.7 232.9 350.7 243.8 339.8L371.8 211.8z"/></svg>';

	// Props
	const tableProps: any = {
		headings: ['Prop', 'Type', 'Default', 'Description'],
		source: [
			['icon', 'boolean', 'false', 'Adjusts styling to accommodate icons.'],
			['background', 'class', 'bg-surface-500', 'Provide a class to set the background color.'],
			['color', 'class', 'text-white', 'Provide a class to set the text color.'],
			['fill', 'class', 'fill-white', 'Provide a class to set the fill color for SVG icons.'],
			['rounded', 'class', 'rounded-lg', 'Provide a class to set rounding style.']
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
			<Card class="space-y-4">
				<div class="flex justify-center space-x-2">
					<Badge>Skeleton</Badge>
					<Badge background="bg-primary-500" color="text-primary-100">Skeleton</Badge>
					<Badge background="bg-accent-500" color="text-accent-100">Skeleton</Badge>
					<Badge background="bg-warning-500" color="text-primary-100">Skeleton</Badge>
				</div>
			</Card>
			<Card>
				<div class="flex justify-center space-x-2">
					<Badge>
						Complete
						<svelte:fragment slot="lead">{@html icon}</svelte:fragment>
					</Badge>
					<Badge background="bg-yellow-500" color="text-yellow-900" fill="fill-yellow-900">
						Complete
						<svelte:fragment slot="trail">{@html icon}</svelte:fragment>
					</Badge>
					<Badge background="bg-pink-300" color="text-pink-900" rounded="rounded-full">
						Favorite
						<svelte:fragment slot="lead">❤️</svelte:fragment>
					</Badge>
				</div>
			</Card>
		</section>
		<h3>Positioning</h3>
		<section class="space-y-4 md:space-y-0 md:grid md:grid-cols-3 md:gap-4">
			<Card>
				<div class="flex justify-center items-center h-full space-x-2">
					<p>Skeleton</p>
					<sup><Badge class="-ml-0" background="bg-primary-500">Super</Badge></sup>
				</div>
			</Card>
			<Card>
				<div class="flex justify-center items-center h-full space-x-2">
					<p>Skeleton</p>
					<sub><Badge class="-ml-0" background="bg-accent-500">Subscript</Badge></sub>
				</div>
			</Card>
			<Card>
				<div class="flex justify-center items-center space-x-4">
					<div class="relative inline-block">
						<Badge icon background="bg-warning-500" class="absolute top-0 right-0 shadow-xl">2</Badge>
						<Avatar size="md" />
					</div>
					<div class="relative inline-block">
						<Badge icon background="bg-primary-500" class="absolute top-0 right-0 shadow-xl">{@html icon}</Badge>
						<Avatar size="md" />
					</div>
					<div class="relative inline-block">
						<Badge class="absolute -top-2 -right-4 shadow-xl z-10">5k</Badge>
						<Button size="sm" variant="filled-accent">Button</Button>
					</div>
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
