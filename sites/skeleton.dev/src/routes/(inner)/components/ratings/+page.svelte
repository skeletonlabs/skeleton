<script lang="ts">
	import DocsShell from '$lib/layouts/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$lib/layouts/DocsShell/types';
	import DocsPreview from '$lib/components/DocsPreview/DocsPreview.svelte';
	// Components
	import { Ratings, CodeBlock } from '@skeletonlabs/skeleton';
	// Sveld
	import sveldRatings from '@skeletonlabs/skeleton/components/Ratings/Ratings.svelte?raw&sveld';
	import { emptyStar, fullStar, halfStar } from './icons';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Component,
		name: 'Ratings',
		description: 'Display a rating bar, also known as <code class="code">Star Rating</code>',
		imports: ['Ratings'],
		source: 'components/Ratings',
		components: [{ label: 'Ratings', sveld: sveldRatings }]
	};
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<DocsPreview>
			<svelte:fragment slot="preview">
				<Ratings class="fill-on-primary-token" value={3.5}>
					<svelte:fragment slot="empty">
						{@html emptyStar}
					</svelte:fragment>
					<svelte:fragment slot="half">
						{@html halfStar}
					</svelte:fragment>
					<svelte:fragment slot="full">
						{@html fullStar}
					</svelte:fragment>
				</Ratings>
			</svelte:fragment>
			<svelte:fragment slot="source">
				<CodeBlock
					language="html"
					code={`
<Ratings value={3.5} max={5}>
    <svelte:fragment slot="empty">
        (empty icon)
    </svelte:fragment>
    <svelte:fragment slot="half">
        (half full icon)
    </svelte:fragment>
    <svelte:fragment slot="full">
        (full icon)
    </svelte:fragment>
</Ratings>
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
