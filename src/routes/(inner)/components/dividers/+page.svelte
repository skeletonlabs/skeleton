<script lang="ts">
	import { writable, type Writable } from 'svelte/store';
	import { DataTable, Card, RadioGroup, RadioItem, Divider } from '@brainandbones/skeleton';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

	const storeVertical: Writable<boolean> = writable(false);
	const storeBorderWidth: Writable<string> = writable('border-t');
	const storeBorderStyle: Writable<string> = writable('border-solid');
	const defaultBorderColor: string = 'border-surface-300 dark:border-surface-700';

	// Switches between top and left oriented styles
	function setOrientationStyles(): void {
		setTimeout(() => {
			const newDefaultWidth: string = $storeVertical === true ? 'border-l' : 'border-t';
			storeBorderWidth.set(newDefaultWidth);
		}, 10);
	}

	// Reactive Props
	$: props = {
		vertical: $storeVertical,
		borderWidth: $storeBorderWidth,
		borderStyle: $storeBorderStyle,
		borderColor: defaultBorderColor
	};

	// Tables
	const tableProps: any = {
		headings: ['Prop', 'Type', 'Default', 'Values', 'Description'],
		source: [
			['vertical', 'boolean', 'false', 'true | false', 'When enabled, sets the width to zero and height to full.'],
			['borderWidth', 'string', 'border-t', 'class', 'Provide classes to set the border width.'],
			['borderStyle', 'string', 'border-solid', 'class', 'Provide classes to set the border style.'],
			['borderColor', 'string', 'border-surface-300 dark:border-surface-700', 'class', 'Provide classes to set the border color.'],
			['margin', 'string', 'm-0', 'class', 'Provide classes to set the margin.'],
			['opacity', 'string', 'opacity-full', 'class', 'Provide classes to set opacity.']
		]
	};
</script>

<div class="space-y-8">
	<!-- Header -->
	<header class="space-y-4">
		<h1>Dividers</h1>
		<p>Horizontal or vertical rules for sectioning your content.</p>
		<CodeBlock language="javascript" code={`import { Divider } from '@brainandbones/skeleton';`} />
	</header>

	<!-- Sandbox -->
	<section class="space-y-4">
		<div class="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-2">
			<!-- Example -->
			<Card slotBody="h-full min-h-[100px] max-w-[480px] mx-auto flex justify-center items-center">
				<!-- prettier-ignore -->
				<svelte:component
					this={Divider}
					vertical={props.vertical}
					borderWidth={props.borderWidth}
					borderStyle={props.borderStyle}
					borderColor={props.borderColor}
				/>
			</Card>
			<!-- Options -->
			<Card slotBody="space-y-4">
				<!-- Orientation -->
				<label for="">
					<span>Vertical</span>
					<!-- prettier-ignore -->
					<RadioGroup selected={storeVertical} display="flex">
						<RadioItem value={false} on:click={() => { setOrientationStyles(); }}>false</RadioItem>
						<RadioItem value={true} on:click={() => { setOrientationStyles(); }}>true</RadioItem >
					</RadioGroup>
				</label>
				<!-- Border Width -->
				<label for="">
					<div class="flex justify-between items-center">
						<span>Border Width</span>
						<span>{$storeBorderWidth}</span>
					</div>
					<RadioGroup selected={storeBorderWidth} display="flex">
						{#if $storeVertical === false}
							<RadioItem value="border-t">1</RadioItem>
							<RadioItem value="border-t-2">2</RadioItem>
							<RadioItem value="border-t-4">4</RadioItem>
							<RadioItem value="border-t-8">8</RadioItem>
						{:else}
							<RadioItem value="border-l">1</RadioItem>
							<RadioItem value="border-l-2">2</RadioItem>
							<RadioItem value="border-l-4">4</RadioItem>
							<RadioItem value="border-l-8">8</RadioItem>
						{/if}
					</RadioGroup>
				</label>
				<!-- Border Style -->
				<label for="">
					<div class="flex justify-between items-center">
						<span>Border Style</span>
						<span>{$storeBorderStyle}</span>
					</div>
					<RadioGroup selected={storeBorderStyle} display="flex">
						<RadioItem value="border-solid">Solid</RadioItem>
						<RadioItem value="border-dashed">Dashed</RadioItem>
						<RadioItem value="border-dotted">Dotted</RadioItem>
						<RadioItem value="border-double">Double</RadioItem>
					</RadioGroup>
				</label>
				<!-- Border Color -->
				<label>
					<span>Border Color</span>
					<select name="background" id="background" bind:value={props.borderColor}>
						<option value={defaultBorderColor}>Inherent</option>
						<option value="border-primary-500">border-primary-500</option>
						<option value="border-accent-500">border-accent-500</option>
						<option value="border-warning-500">border-warning-500</option>
						<option value="border-red-500">border-red-500</option>
						<option value="border-green-500">border-green-500</option>
						<option value="border-blue-500">border-blue-500</option>
					</select>
				</label>
			</Card>
		</div>
	</section>

	<!-- Usage -->
	<section class="space-y-4">
		<h2>Usage</h2>
		<CodeBlock language="html" code={`<Divider />`} />
		<h4>Vertical</h4>
		<CodeBlock language="html" code={`<Divider vertical={true} borderWidth="border-l" />`} />
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
			Uses a horizontal rule <code>hr</code> tag, which has an inherent
			<code>role="seperator"</code>.
		</p>
	</section>
</div>
