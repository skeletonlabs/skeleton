<script lang="ts">
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
	const imgPlaceholder = 'https://i.pravatar.cc/?img=48';
	const borderStyles = 'border-4 border-surface-300-600-token hover:!border-primary-500 cursor-pointer';

	$: props = {
		initials: 'AB',
		src: imgPlaceholder,
		alt: 'avatar',
		width: 'w-24',
		background: 'bg-surface-500',
		fill: 'fill-white',
		rounded: 'rounded-full',
		border: '',
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
				<div class="card variant-glass p-4 h-full flex justify-center items-center">
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
					<RadioGroup display="flex">
						<RadioItem bind:group={props.src} name="image" value={imgPlaceholder}>Image</RadioItem>
						<RadioItem bind:group={props.src} name="initials" value={undefined}>Initials</RadioItem>
					</RadioGroup>
					<!-- Width -->
					<label class="input-label" for="">
						<span>Width</span>
						<RadioGroup display="flex">
							<RadioItem bind:group={props.width} name="w-10" value="w-10">w-10</RadioItem>
							<RadioItem bind:group={props.width} name="w-24" value="w-24">w-24</RadioItem>
							<RadioItem bind:group={props.width} name="w-48" value="w-48">w-48</RadioItem>
							<RadioItem bind:group={props.width} name="w-56" value="w-56">w-56</RadioItem>
						</RadioGroup>
					</label>
					<!-- Rounded -->
					<label class="input-label" for="">
						<span>Rounded</span>
						<RadioGroup display="flex">
							<RadioItem bind:group={props.rounded} name="rounded-full" value="rounded-full">Full</RadioItem>
							<RadioItem bind:group={props.rounded} name="rounded-3xl" value="rounded-3xl">3XL</RadioItem>
							<RadioItem bind:group={props.rounded} name="rounded-xl" value="rounded-xl">XL</RadioItem>
							<RadioItem bind:group={props.rounded} name="rounded-none" value="rounded-none">None</RadioItem>
						</RadioGroup>
					</label>
					<!-- Border -->
					<label class="input-label" for="">
						<span>Border</span>
						<RadioGroup display="flex">
							<RadioItem bind:group={props.border} name="border-off" value="">Off</RadioItem>
							<RadioItem bind:group={props.border} name="border-on" value={borderStyles}>On</RadioItem>
						</RadioGroup>
					</label>
					<!-- If: Initials -->
					{#if props.src === undefined}
						<!-- Initials -->
						<label class="input-label">
							<span>Initial Text</span>
							<input type="text" bind:value={props.initials} maxlength="2" />
						</label>
						<!-- Background -->
						<label class="input-label">
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
					{#if props.src !== undefined}
						<label class="input-label">
							<span>Filter</span>
							<select name="filter" id="filter" bind:value={props.actionParams}>
								<option value="">None</option>
								<option value="#Apollo">#Apollo</option>
								<option value="#BlueNight">#BlueNight</option>
								<option value="#Emerald">#Emerald</option>
								<option value="#GreenFall">#GreenFall</option>
								<option value="#Noir">#Noir</option>
								<option value="#NoirLight">#NoirLight</option>
								<option value="#Rustic">#Rustic</option>
								<option value="#Summer84">#Summer84</option>
								<option value="#XPro">#XPro</option>
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
			<h2>Interactive Border</h2>
			<p>Apply the following styles using the <code>border</code> and <code>cursor</code> properties.</p>
			<CodeBlock
				language="html"
				code={`<Avatar ... border="border-4 border-surface-300-600-token hover:!border-primary-500" cursor="cursor-pointer" />`}
			/>
		</div>
		<div class="space-y-4">
			<h2>Applying Filters</h2>
			<p>
				See <a href="/actions/filters">Filters</a> to learn how to import and configure the filters action and SVG filter components.
			</p>
			<CodeBlock language="ts" code={`import { filter, Apollo } from '@skeletonlabs/skeleton';`} />
			<h3>Via Filter Action</h3>
			<p>Import the filter action reference using <code>action</code> and set <code>actionParams</code> to the desired filter id.</p>
			<CodeBlock language="html" code={`<Avatar src="https://i.pravatar.cc/" action={filter} actionParams="#Apollo" />`} />
			<h3>Via Style Attribute</h3>
			<CodeBlock language="html" code={`<Avatar src="https://i.pravatar.cc/" style="filter: url({'#Apollo'})" />`} />
		</div>
	</svelte:fragment>
</DocsShell>
