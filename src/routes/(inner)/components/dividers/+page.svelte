<script lang="ts">
	import { writable, type Writable } from 'svelte/store';

	import DocsShell from '$docs/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/DocsShell/types';

	import Divider from '$lib/components/Divider/Divider.svelte';
	import RadioGroup from '$lib/components/Radio/RadioGroup.svelte';
	import RadioItem from '$lib/components/Radio/RadioItem.svelte';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

	// @ts-ignore
	import sveldDivider from '$lib/components/Divider/Divider.svelte?raw&sveld';

	// Stores
	const storeVertical: Writable<boolean> = writable(false);
	const storeBorderWidth: Writable<string> = writable('border-t');
	const storeBorderStyle: Writable<string> = writable('border-solid');
	const defaultBorderColor: string = 'border-surface-300 dark:border-surface-700';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Component,
		name: 'Dividers',
		description: 'Horizontal or vertical rules for sectioning your content.',
		imports: ['Divider'],
		source: 'components/Divider',
		components: [{ sveld: sveldDivider }]
	};
	// const properties: DocsShellTable[] = [
	// 	{
	// 		headings: ['Prop', 'Type', 'Default', 'Values', 'Description'],
	// 		source: [
	// 			['<code>vertical</code>', 'boolean', 'false', 'true | false', 'When enabled, sets the width to zero and height to full.'],
	// 			['<code>borderWidth</code>', 'string', 'border-t', 'class', 'Provide classes to set the border width.'],
	// 			['<code>borderStyle</code>', 'string', 'border-solid', 'class', 'Provide classes to set the border style.'],
	// 			['<code>borderColor</code>', 'string', 'border-surface-300-600-token', 'class', 'Provide classes to set the border color.'],
	// 			['<code>margin</code>', 'string', 'm-0', 'class', 'Provide classes to set the margin.'],
	// 			['<code>opacity</code>', 'string', 'opacity-full', 'class', 'Provide classes to set opacity.']
	// 		]
	// 	}
	// ];

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
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<section class="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-2">
			<!-- Example -->
			<div class="card card-body">
				<div class="h-full min-h-[100px] max-w-[480px] mx-auto flex justify-center items-center">
					<!-- prettier-ignore -->
					<svelte:component
						this={Divider}
						vertical={props.vertical}
						borderWidth={props.borderWidth}
						borderStyle={props.borderStyle}
						borderColor={props.borderColor}
					/>
				</div>
			</div>
			<!-- Options -->
			<div class="card card-body space-y-4">
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
						<option value="border-ternary-500">border-ternary-500</option>
						<option value="border-warning-500">border-warning-500</option>
						<option value="border-red-500">border-red-500</option>
						<option value="border-green-500">border-green-500</option>
						<option value="border-blue-500">border-blue-500</option>
					</select>
				</label>
			</div>
		</section>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<section class="space-y-4">
			<p>Uses a horizontal rule <code>hr</code> tag, which has an inherent <code>role="separator"</code></p>
			<CodeBlock language="html" code={`<Divider />`} />
		</section>
		<section class="space-y-4">
			<h2>Vertical</h2>
			<CodeBlock language="html" code={`<Divider vertical={true} borderWidth="border-l" />`} />
		</section>
	</svelte:fragment>
</DocsShell>
