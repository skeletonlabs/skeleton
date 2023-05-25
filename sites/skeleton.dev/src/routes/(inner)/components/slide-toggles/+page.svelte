<script lang="ts">
	import DocsShell from '$lib/layouts/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$lib/layouts/DocsShell/types';
	import DocsPreview from '$lib/components/DocsPreview/DocsPreview.svelte';
	// Components
	import { SlideToggle, CodeBlock } from '@skeletonlabs/skeleton';
	// Sveld
	import sveldSlideToggle from '@skeletonlabs/skeleton/components/SlideToggle/SlideToggle.svelte?raw&sveld';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Component,
		name: 'Slide Toggles',
		description: 'A sliding toggle element that can capture input from a user.',
		imports: ['SlideToggle'],
		source: 'components/SlideToggle',
		aria: 'https://www.w3.org/WAI/ARIA/apg/patterns/switch/',
		components: [{ sveld: sveldSlideToggle }],
		restProps: 'input'
	};

	// Local
	let checkedValue = false;
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<DocsPreview>
			<svelte:fragment slot="preview">
				<SlideToggle name="slider" checked />
			</svelte:fragment>
			<svelte:fragment slot="source">
				<CodeBlock language="ts" code={`let value: boolean = false;`} />
				<CodeBlock language="html" code={`<SlideToggle name="slide" bind:checked={value} />`} />
			</svelte:fragment>
		</DocsPreview>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<p>This component provides an alternative UI for a checkbox input element.</p>
		<section class="space-y-4">
			<h2 class="h2">Labeled</h2>
			<DocsPreview background="neutral">
				<svelte:fragment slot="preview">
					<div class="flex items-center gap-4">
						<SlideToggle name="slider-label" bind:checked={checkedValue}>
							<span class="inline-block w-[100px] text-left">Powered {checkedValue ? 'On' : 'Off'}</span>
						</SlideToggle>
					</div>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock language="html" code={`<SlideToggle name="slider-label" checked>(label)</SlideToggle>`} />
				</svelte:fragment>
			</DocsPreview>
		</section>
		<section class="space-y-4">
			<h2 class="h2">Customized</h2>
			<p>
				Slide toggles styles and colors can be easily customized with the <code class="code">active</code> and
				<code class="code">size</code> properties.
			</p>
			<DocsPreview background="neutral">
				<svelte:fragment slot="preview">
					<div class="flex items-center gap-4">
						<SlideToggle name="slider-small" checked active="bg-primary-500" size="lg" />
						<SlideToggle name="slider-base" checked active="bg-secondary-500" />
						<SlideToggle name="slider-large" checked active="bg-tertiary-500" size="sm" />
					</div>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock language="html" code={`<SlideToggle name="slider-large" checked active="bg-primary-500" size="lg" />`} />
				</svelte:fragment>
			</DocsPreview>
		</section>
		<section class="space-y-4">
			<h2 class="h2">Checkbox Attributes</h2>
			<p>
				This component supports Svelte's <code class="code">$$restProps</code>, which allows for <em>required</em>, <em>disabled</em>, and
				any other valid checkbox input attributes.
			</p>
			<CodeBlock language="html" code={`<SlideToggle ... required disabled />`} />
		</section>
	</svelte:fragment>
</DocsShell>
