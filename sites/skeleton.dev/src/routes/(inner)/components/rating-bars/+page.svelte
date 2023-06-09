<script lang="ts">
	import DocsShell from '$lib/layouts/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$lib/layouts/DocsShell/types';
	import DocsPreview from '$lib/components/DocsPreview/DocsPreview.svelte';
	// Components
	import { RatingBar, CodeBlock } from '@skeletonlabs/skeleton';
	// Sveld
	import sveldRatingBar from '@skeletonlabs/skeleton/components/RatingBar/RatingBar.svelte?raw&sveld';
	import { emptyStar, fullStar, halfStar } from './icons';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Component,
		name: 'Rating Bars',
		description: 'Display a rating bar, also known as <code class="code">Star Rating</code>',
		imports: ['RatingBar'],
		source: 'components/RatingBar',
		components: [{ label: 'RatingBar', sveld: sveldRatingBar }]
	};
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<DocsPreview>
			<svelte:fragment slot="preview">
				<RatingBar class="fill-yellow-600" value={3.5}>
					<svelte:fragment slot="0">
						{@html emptyStar}
					</svelte:fragment>
					<svelte:fragment slot="0.5">
						{@html halfStar}
					</svelte:fragment>
					<svelte:fragment slot="1">
						{@html fullStar}
					</svelte:fragment>
				</RatingBar>
			</svelte:fragment>
			<svelte:fragment slot="source">
				<CodeBlock
					language="html"
					code={`
<RatingBar value={3.5} max={5}>
    <svelte:fragment slot="0">
        (empty icon)
    </svelte:fragment>
    <svelte:fragment slot="0.5">
        (half full icon)
    </svelte:fragment>
    <svelte:fragment slot="1">
        (full icon)
    </svelte:fragment>
</RatingBar>
			`}
				/>
			</svelte:fragment>
		</DocsPreview>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<section class="space-y-4" />
	</svelte:fragment>
</DocsShell>
