<script lang="ts">
	import DocsShell from '$docs/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/DocsShell/types';

	import { icons } from '$lib/components/SvgIcon/icons';

	import SvgIcon from '$lib/components/SvgIcon/SvgIcon.svelte';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

	// @ts-expect-error sveld import
	import sveldSvgIcon from '$lib/components/SvgIcon/SvgIcon.svelte?raw&sveld';

	// Local
	const iconKeys = Object.keys(icons);

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Component,
		name: 'SVG Icons',
		description: 'Display and customize SVG images and icons.',
		imports: ['SvgIcon'],
		source: 'components/SvgIcon',
		components: [{ sveld: sveldSvgIcon }]
	};
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<section class="grid grid-cols-3 gap-4">
			{#each iconKeys as name}
				<div class="card p-4 space-y-4 text-center">
					<SvgIcon {name} />
					<div><code>{name}</code></div>
				</div>
			{/each}
		</section>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<section class="space-y-4">
			<p>
				Enabled a small subset of SVG icons via <code>/src/lib/components/SvgIcon/icons.ts</code>.
			</p>
			<CodeBlock language="html" code={`<SvgIcon name="svelte" />`} />
		</section>
		<section class="space-y-4">
			<h2>Custom SVG</h2>
			<p>Implement any standard SVG markup. The default slot takes any code normally embedded between <code>svg</code> tags.</p>
			<CodeBlock
				language="html"
				code={`
<SvgIcon fill="fill-primary-500" width="w-10" height="h-10" class="hover:fill-primary-300 cursor-pointer">
	<path d="M416 400V464C416 490.5 394.5 512 368 512H320V464C320 455.2 312.8 448 304 448C295.2 448 288 455.2 288 464V512H224V464C224 455.2 216.8 448 208 448C199.2 448 192 455.2 192 464V512H144C117.5 512 96 490.5 96 464V400C96 399.6 96 399.3 96.01 398.9C37.48 357.8 0 294.7 0 224C0 100.3 114.6 0 256 0C397.4 0 512 100.3 512 224C512 294.7 474.5 357.8 415.1 398.9C415.1 399.3 416 399.6 416 400V400zM160 192C124.7 192 96 220.7 96 256C96 291.3 124.7 320 160 320C195.3 320 224 291.3 224 256C224 220.7 195.3 192 160 192zM352 320C387.3 320 416 291.3 416 256C416 220.7 387.3 192 352 192C316.7 192 288 220.7 288 256C288 291.3 316.7 320 352 320z" />
</SvgIcon>`}
			/>
		</section>
	</svelte:fragment>
</DocsShell>
