<script lang="ts">
	import DocsShell from '$docs/layouts/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/layouts/DocsShell/types';
	import DocsPreview from '$docs/components/DocsPreview/DocsPreview.svelte';
	import { variants } from '$docs/components/DocsPreview/options';
	// Components
	import { Avatar, CodeBlock } from '@skeletonlabs/skeleton';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Element,
		name: 'Badges',
		description: 'Provides a robust set of non-interactive badge styles.',
		stylesheetIncludes: ['all', 'elements'],
		stylesheets: ['elements/badges'],
		source: 'styles/elements/badges.css',
		classes: [
			['<code class="code">badge</code>', '-', 'Provides the standard Badge style.'],
			['<code class="code">badge-icon</code>', '-', 'Provides the Icon Badge style.']
		]
	};

	// Local
	let currentVariant = 'variant-filled';
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<DocsPreview>
			<svelte:fragment slot="preview">
				<span class="badge {currentVariant}">Badge</span>
			</svelte:fragment>
			<svelte:fragment slot="footer">
				<div class="flex justify-center gap-4">
					<select bind:value={currentVariant} class="select w-auto">
						{#each variants as vSet}
							<optgroup label={vSet.label}>
								{#each vSet.list as v}
									<option value={v}>{v}</option>
								{/each}
							</optgroup>
						{/each}
					</select>
				</div>
			</svelte:fragment>
			<svelte:fragment slot="source">
				<CodeBlock language="html" code={`<span class="badge variant-filled">Badge</span>`} />
			</svelte:fragment>
		</DocsPreview>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<section class="space-y-4">
			<h2 class="h2">Icon Badge</h2>
			<p>Replace <code class="code">.badge</code> with <code class="code">.badge-icon</code> for a badge based on an icon.</p>
			<DocsPreview background="neutral">
				<svelte:fragment slot="preview">
					<span class="badge-icon variant-filled"><i class="fa-solid fa-skull" /></span>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock language="html" code={`<span class="badge-icon variant-filled"> (icon) </span>`} />
				</svelte:fragment>
			</DocsPreview>
			<section class="space-y-4">
				<h2 class="h2">Overlapping</h2>
				<p>Use Tailwind styles to overlap another element with an Icon Badge.</p>
				<DocsPreview background="neutral">
					<svelte:fragment slot="preview">
						<div class="relative inline-block">
							<span class="badge-icon variant-filled-warning absolute -top-0 -right-0 z-10">2</span>
							<Avatar />
						</div>
					</svelte:fragment>
					<svelte:fragment slot="source">
						<CodeBlock
							language="html"
							code={`
<div class="relative inline-block">
	<span class="badge-icon variant-filled-warning absolute -top-0 -right-0 z-10">2</span>
	<Avatar />
</div>
					`}
						/>
					</svelte:fragment>
				</DocsPreview>
			</section>
		</section></svelte:fragment
	>
</DocsShell>
