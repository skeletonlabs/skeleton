<script lang="ts">
	import DocsShell from '$docs/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/DocsShell/types';

	import Table from '$lib/components/Table/Table.svelte';
	import type { TableSource } from '$lib/components/Table/types';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Element,
		name: 'Design Tokens',
		description: 'The Skeleton Tailwind plugin provides a set of utility classes that adjust to your theme settings.',
		// stylesheetIncludes: ['all', 'tokens'],
		source: 'styles/tokens'
	};

	// Local
	const vColorsAll = '<a href="/guides/themes/colors">Theme Colors</a>';
	const vPairings = 'See pairing chart above.';
	const vCorners = 'tl | tr | bl | br';
	const descPairings = 'Can be 50-900 or 900-50 format.';

	// Tables
	const tableBackgrounds: TableSource = {
		head: ['Class', 'Values', 'Description'],
		body: [
			['<code>bg-[color]-backdrop-token</code>', vColorsAll, 'Background styles for modal backdrops.'],
			['<code>bg-[color]-hover-token</code>', vColorsAll, 'Background styles for hoverable elements.'],
			['<code>bg-[color]-active-token</code>', vColorsAll, 'Background styles for active selected elements.'],
			['<code>bg-[color]-[pairings]-token</code>', `${vColorsAll}<br>${vPairings}`, descPairings]
		]
	};
	const tableBorderRadius: TableSource = {
		head: ['Class', 'Values', 'Description'],
		body: [
			['<code>rounded-token</code>', '', 'Border radius for small elements: buttons, badges, chips, etc.'],
			['<code>rounded-[corner]-token</code>', vCorners, 'Corner border radius styles for small elements.'],
			['<code>rounded-container-token</code>', '', 'Border radius for large elements, such as cards and textareas'],
			['<code>rounded-[corner]-container-token</code>', vCorners, 'Corner border radius styles large small elements.']
		]
	};
	const tableBorder: TableSource = {
		head: ['Class', 'Values', 'Description'],
		body: [
			['<code>border-token</code>', '', 'Implements your theme configured border size.'],
			['<code>border-primary-[pairings]-token</code>', vPairings, descPairings]
		]
	};
	const tableFills: TableSource = {
		head: ['Class', 'Values', 'Description'],
		body: [
			['<code>fill-token</code>', '', 'The default responsive light/dark mode fill color.'],
			['<code>fill-on-[color]-token</code>', vColorsAll, 'Provides an accessible foreground color.']
		]
	};
	const tableRings: TableSource = {
		head: ['Class', 'Values', 'Description'],
		body: [
			['<code>ring-outline-token</code>', '', 'Creates a subtle transparent outline like Card elements.'],
			['<code>ring-[color]-[pairings]-token</code>', `${vColorsAll}<br>${vPairings}`, descPairings]
		]
	};
	const tableText: TableSource = {
		head: ['Class', 'Values', 'Description'],
		body: [
			['<code>font-heading-token</code>', '', 'Implements your theme configured heading text size.'],
			['<code>font-token</code>', '', 'Implements your theme configured base text size.'],
			['<code>text-token</code>', '', 'Implements your theme configured base text color.'],
			['<code>text-on-[color]-token</code>', vColorsAll, 'Provides an accessible foreground color.'],
			['<code>text-[color]-[pairings]-token</code>', `${vColorsAll}<br>${vPairings}`, descPairings]
		]
	};
	const tableMisc: TableSource = {
		head: ['Class', 'Values', 'Description'],
		body: [
			[
				'<code>accent-[color]-token</code>',
				vColorsAll,
				'Provides an input <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/accent-color" target="_blank">accent-color</a>.'
			]
		]
	};
</script>

<DocsShell {settings}>
	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<section class="space-y-4">
			<!-- prettier-ignore -->
			<p>We recommend this <a href="https://vimeo.com/showcase/9653752/video/724689965" target="_blank" rel="noreferrer">conference talk by Brad Frost</a> if you would like to learn more about the design token concept.</p>
			<p>
				Skeleton utilizes a simple but powerful design token system to implement your theme settings for use in elements and components.
				Design tokens are the default classes for elements and components, which means they auto-adapt based on your theme with minimal
				configuration out of the box. However, we also make these available to use in your own projects, allowing you to utilize this same
				technique your own custom components and styling.
			</p>
		</section>
		<section class="space-y-4">
			<h2>Theme Flow</h2>
			<p>
				Below is a visualization of how Skeleton uses your theme to control your UI. We start with your theme's CSS variables, then
				construct design token classes from these, next components utilize these design token classes, then finally you construct your pages
				with sets of elements and components.
			</p>
			<section class="card card-glass-surface p-4 flex justify-center">
				<img
					class="rounded-container-token dark:invert"
					src="https://user-images.githubusercontent.com/1509726/206284722-3aee216b-f2ac-4281-b3c4-fd07e8c18b0c.png"
					alt="flow"
				/>
			</section>
		</section>
		<section class="space-y-4">
			<h2>Color Pairing Chart</h2>
			<p>
				Below is a visualization of color pairings in Skeleton. This is how we balance light and dark mode for your themes in practice. For
				example, the <em>surface</em> color swatch 50 is the lightest available color, so we utilize that for your light theme background
				color. While swatch 900 is the darkest, so vice versa. These two colors form a pair. We then generate design token classes for
				<code>.bg-surface-50-900-token</code>
				and <code>bg-surface-900-50-token</code> that automaticallys switch between these in light/dark mode respectively.
			</p>
			<section class="card card-glass-surface p-4 flex justify-center">
				<img
					class="rounded-container-token dark:invert"
					src="https://user-images.githubusercontent.com/1509726/195171203-423e5b84-8763-40f1-b3ea-4cb2b8e38108.png"
					alt="pairings"
				/>
			</section>
		</section>
		<!-- Backgrounds -->
		<section class="space-y-4">
			<h2>Backgrounds</h2>
			<Table source={tableBackgrounds} />
		</section>
		<!-- Border Radius -->
		<section class="space-y-4">
			<h2>Border Radius</h2>
			<Table source={tableBorderRadius} />
		</section>
		<!-- Borders -->
		<section class="space-y-4">
			<h2>Borders</h2>
			<Table source={tableBorder} />
		</section>
		<!-- Fills -->
		<section class="space-y-4">
			<h2>SVG Fill Color</h2>
			<Table source={tableFills} />
		</section>
		<!-- Rings -->
		<section class="space-y-4">
			<h2>Rings</h2>
			<p>Utilities for creating outline rings with box-shadows.</p>
			<Table source={tableRings} />
		</section>
		<!-- Text -->
		<section class="space-y-4">
			<h2>Text</h2>
			<Table source={tableText} />
		</section>
		<!-- Misc -->
		<section class="space-y-4">
			<h2>Misc</h2>
			<p>Various styles that do not fit into any of the above categories.</p>
			<Table source={tableMisc} />
		</section>
		<!-- Misc -->
		<section class="space-y-4">
			<h2>Requesting New Tokens</h2>
			<p>
				While we've covered common use cases, we do expect the tokens to expand over time. Pull requests are welcome, as well as feature
				requests on GitHub Issues.
			</p>
		</section>
	</svelte:fragment>
</DocsShell>
