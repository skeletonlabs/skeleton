<script lang="ts">
	import { writable, type Writable } from 'svelte/store';

	import DocsShell from '$docs/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/DocsShell/types';

	// Components
	import Avatar from '$lib/components/Avatar/Avatar.svelte';
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

	// @ts-expect-error sveld import
	import sveldAvatar from '$lib/components/Avatar/Avatar.svelte?raw&sveld';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Component,
		name: 'Avatars',
		description: 'Display user avatars with an image or initials.',
		imports: ['Avatar'],
		source: 'components/Avatar',
		components: [{ sveld: sveldAvatar }]
	};

	// Local
	const imgPlaceholder = 'https://i.pravatar.cc/?img=5';
	const borderStyles = 'border-4 border-surface-300-600-token hover:!border-primary-500 cursor-pointer';

	// Store
	const storeWidth: Writable<string | undefined> = writable('w-48');
	const storeSrc: Writable<string | undefined> = writable(imgPlaceholder);
	const storeRounded: Writable<string | undefined> = writable('rounded-full');
	const storeBorder: Writable<string | undefined> = writable(borderStyles);

	$: props = {
		initials: 'AB',
		src: $storeSrc,
		alt: 'avatar',
		width: $storeWidth,
		background: 'bg-surface-500',
		fill: 'fill-white',
		rounded: $storeRounded,
		border: $storeBorder,
		actionParams: ''
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

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<section class="space-y-4">
			<div class="grid grid-cols-1 xl:grid-cols-[1fr_auto] gap-2">
				<!-- Example -->
				<div class="card p-4 h-full flex justify-center items-center">
					<svelte:component
						this={Avatar}
						initials={props.initials}
						src={props.src}
						alt={props.alt}
						width={props.width}
						background={props.background}
						fill={props.fill}
						rounded={props.rounded}
						border={props.border}
						action={filter}
						actionParams={props.actionParams}
					/>
				</div>
				<!-- Options -->
				<div class="card p-4 space-y-4">
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
					<!-- Rounded -->
					<label for="">
						<span>Rounded</span>
						<RadioGroup selected={storeRounded} display="flex">
							<RadioItem value="rounded-full">Full</RadioItem>
							<RadioItem value="rounded-3xl">3XL</RadioItem>
							<RadioItem value="rounded-xl">XL</RadioItem>
							<RadioItem value="rounded-none">None</RadioItem>
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
								<option value="bg-primary-500">bg-primary-500</option>
								<option value="bg-secondary-500">bg-secondary-500</option>
								<option value="bg-tertiary-500">bg-tertiary-500</option>
								<option value="bg-warning-500">bg-warning-500</option>
								<option value="bg-surface-500">bg-surface-500</option>
							</select>
						</label>
					{/if}
					<!-- Filter -->
					{#if $storeSrc !== undefined}
						<label>
							<span>Filter</span>
							<select name="filter" id="filter" bind:value={props.actionParams}>
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
				</div>
			</div>
		</section>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<div class="space-y-4">
			<h2>Using Images</h2>
			<p>Display an image source cropped into the shape.</p>
			<CodeBlock language="html" code={`<Avatar src="https://i.pravatar.cc/" />`} />
		</div>
		<div class="space-y-4">
			<h2>Using Initials</h2>
			<p>Display up to two text characters. (ex: Jane Doe would be JD)</p>
			<CodeBlock language="html" code={`<Avatar initials="JD" />`} />
		</div>
		<div class="space-y-4">
			<h2>Applying Filters</h2>
			<p>
				See <a href="/actions/filters">Filters</a> to learn how to import and configure the filters action and SVG filter components.
			</p>
			<CodeBlock language="ts" code={`import { filter, Apollo, /* ... */ } from '@skeletonlabs/skeleton';`} />
			<p>Import the filter action reference using <code>action</code> and set <code>actionParams</code> to the desired filter id.</p>
			<CodeBlock language="html" code={`<Avatar src="https://i.pravatar.cc/" action={filter} actionParams="Apollo" />`} />
		</div>
	</svelte:fragment>
</DocsShell>
