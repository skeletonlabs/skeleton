<script lang="ts">
	import DocsShell from '$lib/layouts/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$lib/layouts/DocsShell/types';
	import DocsPreview from '$lib/components/DocsPreview/DocsPreview.svelte';
	// Components
	import { Ratings, CodeBlock, RangeSlider } from '@skeletonlabs/skeleton';
	// Sveld
	import sveldRatings from '@skeletonlabs/skeleton/components/Ratings/Ratings.svelte?raw&sveld';
	import { icons } from './icons';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Component,
		name: 'Ratings',
		description: 'Create an visual representation of a numeric range.',
		imports: ['Ratings'],
		source: 'packages/skeleton/src/lib/components/Ratings',
		components: [{ label: 'Ratings', sveld: sveldRatings }]
	};

	// Local
	let value = { current: 3.5, max: 5 };

	function logger(event: CustomEvent<{ index: number }>): void {
		console.log(`Icon with index [${event.detail.index}] was clicked`);
	}

	function updateInteractiveValue(event: CustomEvent<{ index: number }>): void {
		console.log(`Icon with index [${event.detail.index}] was clicked`);
		value.current = event.detail.index;
	}
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<DocsPreview regionFooter="grid grid-cols-[1fr_auto] gap-4 place-items-center">
			<svelte:fragment slot="preview">
				<Ratings fill="fill-on-primary-token" value={value.current} max={value.max} on:icon={logger}>
					<svelte:fragment slot="empty">
						{@html icons.starEmpty}
					</svelte:fragment>
					<svelte:fragment slot="half">
						{@html icons.starHalf}
					</svelte:fragment>
					<svelte:fragment slot="full">
						{@html icons.starFull}
					</svelte:fragment>
				</Ratings>
			</svelte:fragment>
			<svelte:fragment slot="source">
				<CodeBlock
					language="html"
					code={`
<Ratings value={3.5} max={5}>
    <svelte:fragment slot="empty">(icon)</svelte:fragment>
    <svelte:fragment slot="half">(icon)</svelte:fragment>
    <svelte:fragment slot="full">(icon)</svelte:fragment>
</Ratings>
			`}
				/>
			</svelte:fragment>
			<svelte:fragment slot="footer">
				<RangeSlider name="range-slider" bind:value={value.current} max={value.max} step={0.5} ticked class="w-full" />
				<select class="select" name="max" id="max" bind:value={value.max}>
					<option value={3}>Max 3</option>
					<option value={5}>Max 5</option>
					<option value={10}>Max 10</option>
				</select>
			</svelte:fragment>
		</DocsPreview>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<section class="space-y-4">
			<p>
				Perfect for creating a stars ratings for movies or ecommerce ratings. Supply any type of image, text, or icon for the <em>empty</em
				>, <em>half</em>, and <em>full</em> slots. Then adjust the <code class="code">value</code>
				and <code class="code">max</code> properties as desired. Note that SVG icons displayed verbatim, so you may need to adjust the fill color
				and responsive sizing.
			</p>
		</section>
		<section class="space-y-4">
			<h2 class="h2">Binding</h2>
			<DocsPreview background="neutral">
				<svelte:fragment slot="preview">
					<Ratings class="fill-token" value={value.current} max={value.max} on:icon={logger}>
						<svelte:fragment slot="empty">
							{@html icons.circleEmpty}
						</svelte:fragment>
						<svelte:fragment slot="half">
							{@html icons.circleHalf}
						</svelte:fragment>
						<svelte:fragment slot="full">
							{@html icons.circleFull}
						</svelte:fragment>
					</Ratings>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock language="ts" code={`let value = { current: 3.5, max: 5 };`} />
					<CodeBlock
						language="html"
						code={`
<Ratings bind:value={value.current} max={value.max}>
	<svelte:fragment slot="empty">(icon)</svelte:fragment>
	<svelte:fragment slot="half">(icon)</svelte:fragment>
	<svelte:fragment slot="full">(icon)</svelte:fragment>
</Ratings>
			`}
					/>
				</svelte:fragment>
			</DocsPreview>
		</section>
		<section class="space-y-4">
			<h2 class="h2">User Interactivity</h2>
			<p>Use the <code class="code">interactive</code> prop and <code class="code">on:icon</code> events to add interactivity.</p>
			<DocsPreview background="neutral">
				<svelte:fragment slot="preview">
					<Ratings class="fill-token" bind:value={value.current} max={value.max} interactive on:icon={updateInteractiveValue}>
						<svelte:fragment slot="empty">
							{@html icons.starEmpty}
						</svelte:fragment>
						<svelte:fragment slot="half">
							{@html icons.starHalf}
						</svelte:fragment>
						<svelte:fragment slot="full">
							{@html icons.starFull}
						</svelte:fragment>
					</Ratings>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock
						language="ts"
						code={`
function iconClick(event: CustomEvent<{index:number}>): void {
	value.current = event.detail.index;
}
						`}
					/>
					<CodeBlock
						language="html"
						code={`
<Ratings bind:value={value.current} max={value.max} interactive on:icon={iconClick}>
	<svelte:fragment slot="empty">(icon)</svelte:fragment>
	<svelte:fragment slot="half">(icon)</svelte:fragment>
	<svelte:fragment slot="full">(icon)</svelte:fragment>
</Ratings>
			`}
					/>
				</svelte:fragment>
			</DocsPreview>
		</section>
		<section class="space-y-4">
			<h2 class="h2">Emoji</h2>
			<DocsPreview background="neutral">
				<svelte:fragment slot="preview">
					<Ratings class="fill-token" value={value.current} max={value.max} on:icon={logger}>
						<svelte:fragment slot="empty">
							<span class="text-3xl">⚪</span>
						</svelte:fragment>
						<svelte:fragment slot="half">
							<span class="text-3xl">☠️</span>
						</svelte:fragment>
						<svelte:fragment slot="full">
							<span class="text-3xl">💀</span>
						</svelte:fragment>
					</Ratings>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock
						language="html"
						code={`
<Ratings value={3.5} max={5}>
	<svelte:fragment slot="empty">
		<span class="text-3xl">⚪</span>
	</svelte:fragment>
	<svelte:fragment slot="half">
		<span class="text-3xl">☠️</span>
	</svelte:fragment>
	<svelte:fragment slot="full">
		<span class="text-3xl">💀</span>
	</svelte:fragment>
</Ratings>
			`}
					/>
				</svelte:fragment>
			</DocsPreview>
		</section>
	</svelte:fragment>
</DocsShell>
