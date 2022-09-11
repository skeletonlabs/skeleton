<script lang="ts">
	import { writable, type Writable } from 'svelte/store';

	import { DataTable, Card, GradientHeading } from '@brainandbones/skeleton';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';
	import RadioGroup from '$lib/components/Radio/RadioGroup.svelte';
	import RadioItem from '$lib/components/Radio/RadioItem.svelte';

	// Stores
	const storeTag: Writable<string> = writable('h1');

	// Reactive Props
	$: props = {
		text: 'Skeleton',
		tag: $storeTag,
		direction: 'bg-gradient-to-r',
		from: 'from-primary-500',
		to: 'to-accent-500'
	};

	// Tables
	const tableProps: any = {
		headings: ['Prop', 'Type', 'Default', 'Description'],
		source: [
			['tag', 'string', 'h1', 'Define the semantic element tag.'],
			['direction', 'string', 'bg-gradient-to-r', 'Provide classes to set gradient direction.'],
			['from', 'string', 'from-primary-500', 'Provide classes to set "from" gradient color.'],
			['to', 'string', 'to-accent-500', 'Provide classes to set "to" gradient color.']
		]
	};
</script>

<div class="space-y-8">
	<!-- Header -->
	<header class="space-y-4">
		<h1>Gradient Heading</h1>
		<p>Generate a gradient-colored heading with customizable tag and gradient direction.</p>
		<CodeBlock language="javascript" code={`import { GradientHeading } from '@brainandbones/skeleton';`} />
	</header>

	<!-- Sandbox -->
	<section class="space-y-4">
		<div class="space-y-4 xl:space-y-0 xl:grid grid-cols-[2fr,1fr] gap-2">
			<!-- Example -->
			<Card slotBody="h-full flex justify-center items-center">
				<svelte:component this={GradientHeading} tag={props.tag} direction={props.direction} from={props.from} to={props.to}>{props.text}</svelte:component>
			</Card>
			<!-- Options -->
			<Card slotBody="space-y-4">
				<label>
					<span>Text</span>
					<input type="text" bind:value={props.text} placeholder="Enter text..." />
				</label>
				<!-- Tag -->
				<label for="">
					<span>Tag</span>
					<RadioGroup selected={storeTag} display="flex">
						<RadioItem value="h1">h1</RadioItem>
						<RadioItem value="h3">h3</RadioItem>
						<RadioItem value="h6">h6</RadioItem>
						<RadioItem value="p">p</RadioItem>
					</RadioGroup>
				</label>
				<!-- Direction -->
				<label>
					<span>Direction</span>
					<select name="direction" id="direction" bind:value={props.direction}>
						<option value="bg-gradient-to-t">bg-gradient-to-t</option>
						<option value="bg-gradient-to-b">bg-gradient-to-b</option>
						<option value="bg-gradient-to-l">bg-gradient-to-l</option>
						<option value="bg-gradient-to-r">bg-gradient-to-r</option>
						<option value="bg-gradient-to-tl">bg-gradient-to-tl</option>
						<option value="bg-gradient-to-tr">bg-gradient-to-tr</option>
						<option value="bg-gradient-to-bl">bg-gradient-to-bl</option>
						<option value="bg-gradient-to-br">bg-gradient-to-br</option>
						<option value="bg-gradient-to-r">bg-gradient-to-r</option>
					</select>
				</label>
				<!-- From -->
				<label>
					<span>From</span>
					<select name="from" id="from" bind:value={props.from}>
						<option value="from-primary-500">from-primary-500</option>
						<option value="from-accent-500">from-accent-500</option>
						<option value="from-warning-500">from-warning-500</option>
					</select>
				</label>
				<!-- To -->
				<label>
					<span>To</span>
					<select name="to" id="to" bind:value={props.to}>
						<option value="to-primary-500">to-primary-500</option>
						<option value="to-accent-500">to-accent-500</option>
						<option value="to-warning-500">to-warning-500</option>
					</select>
				</label>
			</Card>
		</div>
	</section>

	<!-- Usage -->
	<section class="space-y-4">
		<h2>Usage</h2>
		<CodeBlock language="html" code={`<GradientHeading tag="h1" direction="bg-gradient-to-r" from="from-primary-500" to="to-accent-500">Skeleton</GradientHeading>`} />
	</section>

	<!-- Properties -->
	<section class="space-y-4">
		<h2>Properties</h2>
		<DataTable headings={tableProps.headings} source={tableProps.source} />
	</section>

	<!-- Accessibility -->
	<section class="space-y-4">
		<h2>Accessibility</h2>
		<p>
			You are advised to use semantic heading tags (H1-H6), but an explicit ARIA attribute of <code>role="heading"</code> has been applied.
		</p>
	</section>
</div>
