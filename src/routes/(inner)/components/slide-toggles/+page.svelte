<script lang="ts">
	import DocsShell from '$docs/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/DocsShell/types';

	import SlideToggle from '$lib/components/SlideToggle/SlideToggle.svelte';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

	import sveldSlideToggle from '$lib/components/SlideToggle/SlideToggle.svelte?raw&sveld';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Component,
		name: 'Slide Toggles',
		description: 'A sliding toggle element that can capture input from a user.',
		imports: ['SlideToggle'],
		source: 'components/SlideToggle',
		aria: 'https://www.w3.org/WAI/ARIA/apg/',
		components: [{ sveld: sveldSlideToggle }],
		restProps: 'input'
	};

	// Local
	let checkedValue = false;
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<section class="grid grid-cols-1 lg:grid-cols-2 gap-4">
			<div class="card variant-glass p-4 flex justify-center items-center space-x-6">
				<SlideToggle name="slider-sm" size="sm" checked label="Toggle Small" />
				<SlideToggle name="slider-base" checked label="Toggle Default" />
				<SlideToggle name="slider-large" size="lg" checked label="Toggle Large" />
			</div>
			<div class="card variant-glass p-4 flex justify-center items-center space-x-6">
				<SlideToggle name="slider-sm" accent="bg-primary-500" checked label="Toggle Primary" />
				<SlideToggle name="slider-base" accent="bg-secondary-500" checked label="Toggle Secondary" />
				<SlideToggle name="slider-large" accent="bg-tertiary-500" checked label="Toggle Tertiary" />
			</div>
			<div class="card variant-glass p-4 flex justify-center items-center">
				<SlideToggle name="slider-value" bind:checked={checkedValue}>
					<code class="inline-block w-[40px] text-center">{checkedValue ? 'On' : 'Off'}</code>
				</SlideToggle>
			</div>
			<div class="card variant-glass p-4 flex justify-center items-center">
				<SlideToggle name="slider-disabled" disabled label="Toggle Disabled">Disabled</SlideToggle>
			</div>
		</section>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<section class="space-y-4">
			<p>This component provides an alternative UI for a checkbox input element.</p>
			<CodeBlock language="typescript" code={`let valueChecked: boolean = false;`} />
			<CodeBlock language="html" code={`<SlideToggle name="slider-example" bind:checked={valueChecked}>(text)</SlideToggle>`} />
		</section>
		<section class="space-y-4">
			<h2>Additional Sizes</h2>
			<p>Slide toggles have a default base size, but you can optionally use a smaller or larger size.</p>
			<CodeBlock
				language="html"
				code={`
<SlideToggle ... size="sm" />
<SlideToggle ... size="lg" />
			`}
			/>
		</section>
		<section class="space-y-4">
			<h2>Checkbox Attributes</h2>
			<p>
				This component supports Svelte's <code>$$restProps</code>, which allows for <em>required</em>, <em>disabled</em>, and any other
				valid checkbox input attributes.
			</p>
			<CodeBlock language="html" code={`<SlideToggle ... required disabled />`} />
		</section>
	</svelte:fragment>
</DocsShell>
