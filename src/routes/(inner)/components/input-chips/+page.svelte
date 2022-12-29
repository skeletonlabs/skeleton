<script lang="ts">
	import DocsShell from '$docs/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/DocsShell/types';

	// Utilities
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

	// Components
	import InputChip from '$lib/components/InputChip/InputChip.svelte';

	// @ts-expect-error
	import sveldInputChip from '$lib/components/InputChip/InputChip.svelte?raw&sveld';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Component,
		name: 'Input Chips',
		description: 'Allows input of multiple values.',
		imports: ['InputChip'],
		stylesheetIncludes: ['all', 'elements'],
		stylesheets: ['elements/forms', 'elements/chips'],
		source: 'components/InputChip',
		components: [{ sveld: sveldInputChip }]
		// aria: 'https://www.w3.org/WAI/ARIA/apg/'
	};

	// Local
	let emails = ['john@email.com', 'jane@email.com', 'sally@email.com'];
	let emailsWhitelist = ['john@email.com', 'jane@email.com', 'sally@email.com'];
	let flavors = ['vanilla', 'chocolate', 'strawberry'];
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<section class="space-y-4">
			<div class="card p-4 space-y-4">
				<!-- Flavors -->
				<p>Type a value then hit ENTER to apply it.</p>
				<InputChip label="Flavors" placeholder="Add flavor..." bind:value={flavors} />
				<code class="inline-block">{flavors.length ? flavors : 'No flavors set.'}</code>
			</div>
			<div class="card p-4 space-y-4">
				<!-- Emails -->
				<p>Emails whitelisted to <em>{emailsWhitelist.join(', ')}</em>.</p>
				<InputChip label="Emails" placeholder="Enter emails..." bind:value={emails} whitelist={emailsWhitelist} />
				<code class="inline-block">{emails.length ? emails : 'No emails set.'}</code>
			</div>
		</section>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<div class="space-y-4">
			<h2>Title</h2>
			<p>Describe how to use the feature.</p>
			<CodeBlock language="html" code={`(code)`} />
		</div>
	</svelte:fragment>
</DocsShell>
