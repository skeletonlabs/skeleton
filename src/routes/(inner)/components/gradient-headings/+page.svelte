<script lang="ts">
	import { writable, type Writable } from 'svelte/store';

	import DocsShell from '$docs/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/DocsShell/types';

	import GradientHeading from '$lib/components/GradientHeading/GradientHeading.svelte';
	import RadioGroup from '$lib/components/Radio/RadioGroup.svelte';
	import RadioItem from '$lib/components/Radio/RadioItem.svelte';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

	// @ts-expect-error sveld import
	import sveldGradientHeading from '$lib/components/GradientHeading/GradientHeading.svelte?raw&sveld';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Component,
		name: 'Gradient Headings',
		description: 'Generate a gradient-colored heading with customizable tag and gradient direction.',
		imports: ['GradientHeading'],
		source: 'components/GradientHeading',
		components: [{ sveld: sveldGradientHeading }]
	};

	// Stores
	const storeTag: Writable<string> = writable('h1');

	// Reactive Props
	$: props = {
		text: 'Skeleton',
		tag: $storeTag,
		direction: 'bg-gradient-to-r',
		from: 'from-primary-500',
		to: 'to-secondary-500'
	};
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<!-- Alert -->
		<aside class="alert alert-error">
			<div class="alert-message">
				<h3><i class="fa-solid fa-triangle-exclamation mr-2" /> Deprecated</h3>
				<p>
					This component is slated to be <u>removed</u>. We recommend using the following Tailwind styles if you wish to replicate this.
				</p>
				<CodeBlock language="html" code={`<h1><span class="gradient-heading">Skeleton</span></h1>`} />
				<CodeBlock
					language="css"
					code={`
.gradient-heading {
	@apply bg-gradient-to-r from-primary-500 to-bg-secondary-500 bg-clip text-transparent box-decoration-clone
}
			`}
				/>
				<!-- prettier-ignore -->
				<p>See the <a class="!text-error-200" href="https://tailwindcss.com/docs/gradient-color-stops" target="_blank" rel="noreferrer">Tailwind documentation</a> for additional gradient options.</p>
			</div>
		</aside>

		<section class="space-y-4 xl:space-y-0 xl:grid grid-cols-[1fr_300px] gap-2">
			<!-- Example -->
			<div class="card p-4 h-full flex justify-center items-center">
				<svelte:component this={GradientHeading} tag={props.tag} direction={props.direction} from={props.from} to={props.to}
					>{props.text}</svelte:component
				>
			</div>
			<!-- Options -->
			<div class="card p-4 space-y-4">
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
						<option value="from-secondary-500">from-secondary-500</option>
						<option value="from-tertiary-500">from-tertiary-500</option>
						<option value="from-warning-500">from-warning-500</option>
						<option value="from-surface-500">from-surface-500</option>
					</select>
				</label>
				<!-- To -->
				<label>
					<span>To</span>
					<select name="to" id="to" bind:value={props.to}>
						<option value="to-primary-500">to-primary-500</option>
						<option value="to-secondary-500">to-secondary-500</option>
						<option value="to-tertiary-500">to-tertiary-500</option>
						<option value="to-warning-500">to-warning-500</option>
						<option value="to-surface-500">to-surface-500</option>
					</select>
				</label>
			</div>
		</section>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<section class="space-y-4">
			<p>
				You are advised to use semantic heading tags (H1-H6). However, an explicit ARIA attribute of <code>role="heading"</code> has been applied.
			</p>
			<CodeBlock
				language="html"
				code={`<GradientHeading tag="h1" direction="bg-gradient-to-r" from="from-primary-500" to="to-secondary-500">Skeleton</GradientHeading>`}
			/>
		</section>
	</svelte:fragment>
</DocsShell>
