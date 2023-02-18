<script lang="ts">
	import DocsShell from '$docs/layouts/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/layouts/DocsShell/types';

	import ProgressRadial from '$lib/components/ProgressRadial/ProgressRadial.svelte';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

	import sveldProgressRadial from '$lib/components/ProgressRadial/ProgressRadial.svelte?raw&sveld';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Component,
		name: 'Progress Radials',
		description: 'Displays a radial indicator showing the progress or completion of a task.',
		imports: ['ProgressRadial'],
		source: 'components/ProgressRadial',
		aria: 'https://www.w3.org/WAI/ARIA/apg/patterns/meter/',
		components: [{ sveld: sveldProgressRadial }]
	};

	// Reactive
	$: props = { value: 50, max: 100, step: 10 };
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<section class="grid grid-cols-1 md:grid-cols-1 gap-4">
			<div class="card variant-glass p-4 grid grid-cols-2 gap-4 text-center">
				<div class="w-full max-w-[320px] mx-auto space-y-4">
					<p>Determinate</p>
					<ProgressRadial value={props.value}>{props.value}%</ProgressRadial>
					<input type="range" min="0" max={props.max} step={props.step} bind:value={props.value} />
				</div>
				<div class="w-full max-w-[320px] mx-auto space-y-4">
					<p>Indeterminate</p>
					<ProgressRadial>{props.value}%</ProgressRadial>
				</div>
			</div>
			<div class="space-y-4">
				<div class="card variant-glass p-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
					<div class="p-4 space-y-2">
						<ProgressRadial stroke={40} meter="stroke-primary-500" track="stroke-primary-500/30" />
						<p>Primary</p>
					</div>
					<div class="p-4 space-y-2">
						<ProgressRadial stroke={100} meter="stroke-secondary-500" track="stroke-secondary-500/30" />
						<p>Secondary</p>
					</div>
					<div class="p-4 space-y-2">
						<ProgressRadial stroke={250} meter="stroke-tertiary-500" track="stroke-tertiary-500/30" />
						<p>Tertiary</p>
					</div>
					<div class="p-4 space-y-2">
						<ProgressRadial stroke={300} meter="stroke-success-500" track="stroke-success-500/30" />
						<p>Success</p>
					</div>
					<div class="p-4 space-y-2">
						<ProgressRadial stroke={350} meter="stroke-warning-500" track="stroke-warning-500/30" />
						<p>Warning</p>
					</div>
					<div class="p-4 space-y-2">
						<ProgressRadial stroke={400} meter="stroke-error-500" track="stroke-error-500/30" />
						<p>Error</p>
					</div>
				</div>
			</div>
		</section>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<section class="space-y-4">
			<!-- prettier-ignore -->
			<p>
				This component is treated as an <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meter" target="_blank" rel="noreferrer">ARIA meter</a>.
			</p>
			<CodeBlock language="ts" code={`let value: number = 50; // %`} />
			<CodeBlock language="html" code={`<ProgressRadial {value}>{value}%</ProgressRadial>`} />
		</section>
		<section class="space-y-4">
			<h2>Indeterminate</h2>
			<p>Remove the <code>value</code> property or set to <code>undefined</code>.</p>
			<CodeBlock language="html" code={`<ProgressRadial />`} />
			<CodeBlock language="html" code={`<ProgressRadial value={undefined} />`} />
		</section>
	</svelte:fragment>
</DocsShell>
