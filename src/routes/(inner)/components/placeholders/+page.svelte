<script lang="ts">
	import { DataTable, SlideToggle, Placeholder } from '@brainandbones/skeleton';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';
	import SvgIcon from '$lib/components/SvgIcon/SvgIcon.svelte';
	import Card from '$lib/components/Card/Card.svelte';

	// Props & Slots
	const tableProps: any = {
		headings: ['Prop', 'Type', 'Default', 'Values', 'Description'],
		source: [
			['width', 'string', 'w-auto', 'class', 'Placeholder width'],
			['height', 'string', 'w-4', 'class', 'Placeholder height'],
			['rounded', 'string', 'rounded-lg', 'class', 'Placeholder radius'],
			['circle', 'boolean', 'false', 'true | false', "If Placeholder is a circle, it's width and border radius will be equal to height"],
			['animate', 'boolean', 'true', 'true | false', 'Whether to show the animation effect']
		]
	};

	$: props = {
		animate: true,
		circle: true
	};
</script>

<div class="space-y-8">
	<!-- Heading -->
	<heading class="space-y-4">
		<h1>Placeholder</h1>
		<p>Use Placeholder to create a placeholder for loading content.</p>
		<CodeBlock language="javascript" code={`import { Placeholder } from '@brainandbones/Placeholder';`} />
	</heading>

	<!-- Examples -->
	<section class="space-x-2 flex flex-wrap items-center">
		<Card class="flex-1">
			<Placeholder animate={props.animate} circle={props.circle} width="w-10" height="h-10" />
			<div class="space-y-3 mt-2">
				<Placeholder animate={props.animate} radius="rounded-lg" width="full" height="h-4" />
				<Placeholder animate={props.animate} radius="rounded-lg" width="full" height="h-4" />
			</div>
		</Card>
		<div class="flex-1">
			<SlideToggle bind:checked={props.animate} accent="bg-accent-500">Animate</SlideToggle>
			<SlideToggle bind:checked={props.circle} accent="bg-accent-500">Circle</SlideToggle>
			<Card>
				<div class="space-y-2">
					<Placeholder animate={props.animate} radius="rounded-lg" width="w-full" height="h-4" />
					<div class="grid grid-cols-4 gap-2">
						<Placeholder animate={props.animate} radius="rounded-lg" width="w-full" height="h-4" />
						<Placeholder animate={props.animate} radius="rounded-lg" width="w-full" height="h-4" />
						<Placeholder animate={props.animate} radius="rounded-lg" width="w-full" height="h-4" />
						<Placeholder animate={props.animate} radius="rounded-lg" width="w-full" height="h-4" />
					</div>
				</div>
			</Card>
		</div>
	</section>

	<!-- Usage -->
	<section class="space-y-4">
		<h2>Usage</h2>
		<CodeBlock language="html" code={`<Placeholder ${props.circle ? 'circle' : ''} ${props.animate ? 'animate' : ''} width="w-full" height="h-10" rounded="round-lg" />`} />
	</section>

	<!-- Properties -->
	<section class="space-y-4">
		<h2>Properties</h2>
		<DataTable headings={tableProps.headings} source={tableProps.source} />
	</section>
</div>
