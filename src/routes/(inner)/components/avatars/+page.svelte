<script lang="ts">
	import { writable, type Writable } from 'svelte/store';

	// Components
	import Avatar from '$lib/components/Avatar/Avatar.svelte';
	import Card from '$lib/components/Card/Card.svelte';
	import DataTable from '$lib/components/Table/DataTable.svelte';
	import RadioGroup from '$lib/components/Radio/RadioGroup.svelte';
	import RadioItem from '$lib/components/Radio/RadioItem.svelte';
	// Utilities
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';
	// Actions
	import { filter } from '$lib/actions/Filters/filter';
	// Filter SVGs
	import Apollo from '$lib/actions/Filters/svg-filters/Apollo.svelte';
	import BlueNight from '$lib/actions/Filters/svg-filters/BlueNight.svelte';
	import Emerald from '$lib/actions/Filters/svg-filters/Emerald.svelte';
	import GreenFall from '$lib/actions/Filters/svg-filters/GreenFall.svelte';
	import Noir from '$lib/actions/Filters/svg-filters/Noir.svelte';
	import NoirLight from '$lib/actions/Filters/svg-filters/NoirLight.svelte';
	import Rustic from '$lib/actions/Filters/svg-filters/Rustic.svelte';
	import Summer84 from '$lib/actions/Filters/svg-filters/Summer84.svelte';
	import XPro from '$lib/actions/Filters/svg-filters/XPro.svelte';

	// Local
	const imgPlaceholder: string = 'https://i.pravatar.cc/?img=5';
	const borderStyles: string = 'border-4 border-black dark:border-white hover:!border-primary-500 cursor-pointer';

	// Store
	const storeWidth: Writable<string | undefined> = writable('w-48');
	const storeSrc: Writable<string | undefined> = writable(imgPlaceholder);
	const storeBorder: Writable<string | undefined> = writable(borderStyles);

	function updateImage(): void {
		props.src = undefined;
		setTimeout(() => {
			props.src = imgPlaceholder;
		}, 1);
	}

	$: props = {
		initials: 'AB',
		src: $storeSrc,
		alt: 'avatar',
		width: $storeWidth,
		background: 'bg-surface-500',
		fill: 'fill-white',
		border: $storeBorder,
		actionParams: ''
	};

	// Tables
	const tableProps: any = {
		headings: ['Prop', 'Type', 'Default', 'Description'],
		source: [
			['background', 'string', 'bg-surface-500', 'Provide classes to set background styles.'],
			['width', 'string', 'w-12', 'Provide classes to set avatar width.'],
			['border', 'string', '-', 'Provide classes to set border styles.'],
			['rounded', 'string', 'rounded-full', 'Provide classes to set rounded style.'],
			['shadow', 'string', '-', 'Provide classes to set shadow styles.'],
			['cursor', 'string', '-', 'Provide classes to set cursor styles.']
		]
	};
	const tablePropsImg: any = {
		headings: ['Prop', 'Type', 'Default', 'Values', 'Description'],
		source: [
			['src', 'string', '-', '-', 'Set image source value.'],
			['alt', 'string', '-', '-', 'Set image alt text value for accessability.'],
			['action', 'string', '-', '(Svelte action)', 'Provide an Svelte action reference, such as <code>filter</code>.'],
			['actionParams', 'string', '-', '(filter ID)', 'Provide Svelte action params, such as <code>Apollo</code>.']
		]
	};
	const tablePropsInitials: any = {
		headings: ['Prop', 'Type', 'Default', 'Description'],
		source: [
			['initials', 'string', 'AB', 'Provide up to two text characters.'],
			['fill', 'string', 'fill-white', 'Provide classes to set the text fill color.']
		]
	};
</script>

<!-- Filter SVG Components - NOTE: Keep these localized -->
<Apollo />
<BlueNight />
<Emerald />
<GreenFall />
<Noir />
<NoirLight />
<Rustic />
<Summer84 />
<XPro />

<div class="!mt-0 space-y-8">
	<!-- Header -->
	<header class="space-y-4">
		<h1>Avatars</h1>
		<p>Display user avatars with an image or initials.</p>
		<CodeBlock language="js" code={`import { Avatar } from '@brainandbones/skeleton';`} />
	</header>

	<!-- Sandbox -->
	<section class="space-y-4">
		<div class="grid grid-cols-1 xl:grid-cols-[1fr_480px] gap-2">
			<!-- Example -->
			<Card slotBody="h-full flex justify-center items-center">
				<svelte:component
					this={Avatar}
					initials={props.initials}
					src={props.src}
					alt={props.alt}
					width={props.width}
					background={props.background}
					fill={props.fill}
					border={props.border}
					action={filter}
					actionParams={props.actionParams}
				/>
			</Card>
			<!-- Options -->
			<Card slotBody="space-y-4">
				<!-- Source -->
				<RadioGroup selected={storeSrc} display="flex">
					<RadioItem value={imgPlaceholder}>Image</RadioItem>
					<RadioItem value={undefined}>Initials</RadioItem>
				</RadioGroup>
				<!-- Width -->
				<label for="">
					<span>Width</span>
					<RadioGroup selected={storeWidth} display="flex">
						<RadioItem value="w-10">w-10</RadioItem>
						<RadioItem value="w-24">w-24</RadioItem>
						<RadioItem value="w-48">w-48</RadioItem>
						<RadioItem value="w-56">w-56</RadioItem>
					</RadioGroup>
				</label>
				<!-- Border -->
				<label for="">
					<span>Border</span>
					<RadioGroup selected={storeBorder} display="flex">
						<RadioItem value={borderStyles}>On</RadioItem>
						<RadioItem value="">Off</RadioItem>
					</RadioGroup>
				</label>
				<!-- If: Initials -->
				{#if $storeSrc === undefined}
					<!-- Initials -->
					<label>
						<span>Initial Text</span>
						<input type="text" bind:value={props.initials} maxlength="2" />
					</label>
					<!-- Background -->
					<label>
						<span>Background</span>
						<select name="background" id="background" bind:value={props.background}>
							<option value="bg-surface-500">bg-surface-500</option>
							<option value="bg-primary-500">bg-primary-500</option>
							<option value="bg-accent-500">bg-accent-500</option>
							<option value="bg-warning-500">bg-warning-500</option>
						</select>
					</label>
				{/if}
				<!-- Filter -->
				{#if $storeSrc !== undefined}
					<label>
						<span>Filter</span>
						<select name="filter" id="filter" bind:value={props.actionParams} on:change={updateImage}>
							<option value="">None</option>
							<option value="Apollo">Apollo</option>
							<option value="BlueNight">BlueNight</option>
							<option value="Emerald">Emerald</option>
							<option value="GreenFall">GreenFall</option>
							<option value="Noir">Noir</option>
							<option value="NoirLight">NoirLight</option>
							<option value="Rustic">Rustic</option>
							<option value="Summer84">Summer84</option>
							<option value="XPro">XPro</option>
						</select>
					</label>
				{/if}
			</Card>
		</div>
	</section>

	<!-- Usage -->
	<section class="space-y-4">
		<h2>Usage</h2>
		<h4>Image</h4>
		<p>Display an image source cropped into the shape.</p>
		<CodeBlock language="html" code={`<Avatar src="https://i.pravatar.cc/" />`} />
		<h4>Initials</h4>
		<p>Display up to two text characters. (ex: Jane Doe would be JD)</p>
		<CodeBlock language="html" code={`<Avatar initials="JD" />`} />
		<h4>Using Filters</h4>
		<p>
			See <a href="/actions/filters">Filters</a> to learn how to import and configure the filters action and SVG filter components.
		</p>
		<CodeBlock language="ts" code={`import { filter, Apollo, /* ... */ } from '@brainandbones/skeleton';`} />
		<p>Import the filter action reference using <code>action</code> and set <code>actionParams</code> to the desired filter id.</p>
		<CodeBlock language="html" code={`<Avatar src="https://i.pravatar.cc/" action={filter} actionParams="Apollo" />`} />
	</section>

	<!-- Properties -->
	<section class="space-y-4">
		<h2>Properties</h2>
		<DataTable headings={tableProps.headings} source={tableProps.source} />
		<h4>Image</h4>
		<DataTable headings={tablePropsImg.headings} source={tablePropsImg.source} />
		<h4>Initials</h4>
		<DataTable headings={tablePropsInitials.headings} source={tablePropsInitials.source} />
	</section>
</div>
