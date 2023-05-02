<script lang="ts">
	import DocsShell from '$docs/layouts/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/layouts/DocsShell/types';
	import DocsPreview from '$docs/components/DocsPreview/DocsPreview.svelte';
	// Components
	import ProgressRadial from '$lib/components/ProgressRadial/ProgressRadial.svelte';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';
	// Sveld
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
	$: strokeProps = { value: 100, max: 400, step: 20 };
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<DocsPreview>
			<svelte:fragment slot="preview">
				<ProgressRadial value={props.value} width="w-48">{props.value}%</ProgressRadial>
			</svelte:fragment>
			<svelte:fragment slot="footer">
				<div class="w-48 mx-auto"><input type="range" min="0" max={props.max} step={props.step} bind:value={props.value} /></div>
			</svelte:fragment>
			<svelte:fragment slot="source">
				<CodeBlock language="ts" code={`let value: number = 50; // %`} />
				<CodeBlock language="html" code={`<ProgressRadial {value}>{value}%</ProgressRadial>`} />
			</svelte:fragment>
		</DocsPreview>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<section class="space-y-4">
			<h2 class="h2">Styling</h2>
			<p>
				Use the <code class="code">stroke</code> <code class="code">meter</code> or <code class="code">track</code>properties to style the
				radial.
			</p>
			<DocsPreview background="neutral">
				<svelte:fragment slot="preview">
					<div class="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 text-center">
						<div class="p-4 space-y-2">
							<ProgressRadial stroke={strokeProps.value} meter="stroke-primary-500" track="stroke-primary-500/30" width="w-full" />
							<p>Primary</p>
						</div>
						<div class="p-4 space-y-2">
							<ProgressRadial stroke={strokeProps.value} meter="stroke-secondary-500" track="stroke-secondary-500/30" width="w-full" />
							<p>Secondary</p>
						</div>
						<div class="p-4 space-y-2">
							<ProgressRadial stroke={strokeProps.value} meter="stroke-tertiary-500" track="stroke-tertiary-500/30" width="w-full" />
							<p>Tertiary</p>
						</div>
						<div class="p-4 space-y-2">
							<ProgressRadial stroke={strokeProps.value} meter="stroke-success-500" track="stroke-success-500/30" width="w-full" />
							<p>Success</p>
						</div>
						<div class="p-4 space-y-2">
							<ProgressRadial stroke={strokeProps.value} meter="stroke-warning-500" track="stroke-warning-500/30" width="w-full" />
							<p>Warning</p>
						</div>
						<div class="p-4 space-y-2">
							<ProgressRadial stroke={strokeProps.value} meter="stroke-error-500" track="stroke-error-500/30" width="w-full" />
							<p>Error</p>
						</div>
					</div>
				</svelte:fragment>
				<svelte:fragment slot="footer">
					<div class="w-48 mx-auto">
						<input type="range" min="20" max={strokeProps.max} step={strokeProps.step} bind:value={strokeProps.value} />
					</div>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock
						language="html"
						code={`<ProgressRadial ... stroke={${strokeProps.value}} meter="stroke-primary-500" track="stroke-primary-500/30" />`}
					/>
				</svelte:fragment>
			</DocsPreview>
		</section>
		<section class="space-y-4">
			<h2 class="h2">Indeterminate</h2>
			<p>Remove the <code class="code">value</code> property or set to <code class="code">undefined</code>.</p>
			<DocsPreview background="neutral">
				<svelte:fragment slot="preview">
					<ProgressRadial width="w-28" />
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock language="html" code={`<ProgressRadial />`} />
					<CodeBlock language="html" code={`<ProgressRadial value={undefined} />`} />
				</svelte:fragment>
			</DocsPreview>
		</section>
		<hr />
		<section class="space-y-4">
			<h2 class="h2">Accessibility</h2>
			<!-- prettier-ignore -->
			<p>
				This component is treated as an <a class="anchor" href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meter" target="_blank" rel="noreferrer">ARIA meter</a>.
			</p>
		</section>
	</svelte:fragment>
</DocsShell>
