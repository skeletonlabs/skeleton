<script lang="ts">
	import DocsShell from '$docs/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/DocsShell/types';

	// Utilities
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

	// Components
	import InputChip from '$lib/components/InputChip/InputChip.svelte';

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
		components: [{ sveld: sveldInputChip }],
		// aria: 'https://www.w3.org/WAI/ARIA/apg/',
		restProps: 'input'
	};

	// Local
	let anythingList: string[] = ['foo', 'bar', 'fizz', 'buzz'];
	let flavorsList = ['vanilla', 'chocolate', 'strawberry'];
	let flavorsWhitelist = ['vanilla', 'chocolate', 'strawberry', 'peach', 'rocky road'];
	let emails = ['john@email.com', 'jane@email.com', 'sally@email.com'];

	function isValidEmail(value: string): boolean {
		return value.includes('@') && value.includes('.');
	}
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<div class="space-y-2">
			<!-- Names -->
			<div class="card p-4 space-y-4">
				<InputChip name="chips-example" bind:value={anythingList} placeholder="Enter any value..." />
				<code class="inline-block">{anythingList.length ? anythingList : 'No chips available.'}</code>
			</div>
			<!-- Flavors -->
			<div class="card p-4 space-y-4">
				<label for="chips-example-flavors" class="input-label">
					<span>Flavors <em>(whitelists vanilla, chocolate, strawberry)</em></span>
					<InputChip
						name="chips-example-flavors"
						bind:value={flavorsList}
						placeholder="Enter flavors..."
						chips="variant-filled-primary"
						whitelist={flavorsWhitelist}
					/>
				</label>
				<code class="inline-block">{flavorsList.length ? flavorsList : 'No flavors set.'}</code>
			</div>
			<!-- Emails -->
			<div class="card p-4 space-y-4">
				<label for="chips-example-emails" class="input-label">
					<span>Emails <em>(validated)</em></span>
					<InputChip
						name="chips-example-emails"
						bind:value={emails}
						placeholder="Enter Emails..."
						chips="variant-filled-secondary"
						validation={isValidEmail}
					/>
				</label>
				<code class="inline-block">{emails.length ? emails : 'No emails set.'}</code>
			</div>
		</div>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<section class="space-y-4">
			<p>Bind an array of data to the component <code>value</code> property. Please note that only <u>string</u> values are supported.</p>
			<CodeBlock language="ts" code={`let flavorsList = ['vanilla', 'chocolate', 'strawberry'];`} />
			<CodeBlock language="html" code={`<InputChip name="chips" bind:value={flavorsList} />`} />
		</section>
		<!-- Whitelist -->
		<section class="space-y-4">
			<h2>Whitelist Values</h2>
			<p>
				You can provide an array of strings to use as a whitelist. Only whitelisted items can be entered. Invalid or duplicate values will
				show an error state.
			</p>
			<CodeBlock language="ts" code={`let flavorsWhitelist = ['vanilla', 'chocolate', 'strawberry'];`} />
			<CodeBlock language="html" code={`<InputChip ... whitelist={flavorsWhitelist} />`} />
		</section>
		<!-- Custom Valiation -->
		<section class="space-y-4">
			<h2>Custom Validation</h2>
			<p>You can optionally provide a function to provide custom validation. Make sure to accept a string value and return a boolean.</p>
			<CodeBlock
				language="ts"
				code={`
function isValidEmail(value: string): boolean {
	return value.includes('@') && value.includes('.');
}
			`}
			/>
			<CodeBlock language="html" code={`<InputChip ... validation={isValidEmail} />`} />
		</section>
		<!-- Additional Settings -->
		<section class="space-y-4">
			<h2>Additional Settings</h2>
			<p>
				By default, only a single instance of each value is allowed. If you wish to allow duplicates, set <code>allowDuplicates={true}</code
				>.
			</p>
			<CodeBlock language="html" code={`<InputChip ... allowDuplicates={true} />`} />
			<p>
				By default, all values are trimmed and formatted lowercase. If you wish to allow uppercase, set <code>allowUpperCase={true}</code>.
			</p>
			<CodeBlock language="html" code={`<InputChip ... allowUpperCase={true} />`} />
		</section>
		<hr />
		<!-- See Also -->
		<section class="!flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
			<div class="space-y-2">
				<h2>See Also</h2>
				<p>Interactive chip element styles for actions, selection, or filtering.</p>
			</div>
			<a class="btn variant-ghost-surface" href="/elements/chips">Chip Elements &rarr;</a>
		</section>
	</svelte:fragment>
</DocsShell>
