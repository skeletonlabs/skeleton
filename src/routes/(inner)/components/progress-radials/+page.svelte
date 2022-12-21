<script lang="ts">
	import DocsShell from '$docs/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/DocsShell/types';

	import ProgressRadial from '$lib/components/ProgressRadial/ProgressRadial.svelte';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

	// @ts-expect-error sveld import
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
		<section class="grid grid-cols-1 md:grid-cols-2 gap-4">
			<div class="card p-4 grid grid-cols-1 gap-4">
				<ProgressRadial value={props.value} class="w-full">{props.value}%</ProgressRadial>
				<input type="range" min="0" max={props.max} step={props.step} bind:value={props.value} />
			</div>
			<div class="space-y-4">
				<div class="space-y-2">
					<h3>Indeterminate</h3>
					<p>Remove the value property to set to indeterminate mode.</p>
				</div>
				<div class="grid grid-cols-2 gap-4">
					<div class="card p-4">
						<ProgressRadial stroke={20} meter="stroke-surface-500" track="stroke-surface-500/20" />
					</div>
					<div class="card p-4">
						<ProgressRadial stroke={50} meter="stroke-primary-500" track="stroke-primary-500/20" />
					</div>
					<div class="card p-4">
						<ProgressRadial stroke={100} meter="stroke-secondary-500" track="stroke-secondary-500/20" />
					</div>
					<div class="card p-4">
						<ProgressRadial stroke={200} meter="stroke-tertiary-500" track="stroke-tertiary-500/20" />
					</div>
				</div>
			</div>
		</section>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<section class="space-y-4">
			<CodeBlock language="ts" code={`let value: number = 50; // %`} />
			<CodeBlock language="html" code={`<ProgressRadial {value}>{value}%</ProgressRadial>`} />
		</section>
	</svelte:fragment>
</DocsShell>
