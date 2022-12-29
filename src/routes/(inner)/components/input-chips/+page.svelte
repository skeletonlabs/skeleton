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
		components: [{ sveld: sveldInputChip }],
		// aria: 'https://www.w3.org/WAI/ARIA/apg/',
		restProps: 'input'
	};

	// Local
	let tags = ['tutorials', 'news', 'interviews'];
	let flavors = ['vanilla', 'chocolate', 'strawberry'];
	let flavorsWhitelist = ['vanilla', 'chocolate', 'strawberry', 'peach', 'rocky road'];
	let emails = ['john@email.com', 'jane@email.com', 'sally@email.com'];

	function isValidEmail(value: string): boolean {
		return value.includes('@') && value.includes('.');
	}
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<section class="space-y-4">
			<p>Type a value then hit ENTER to apply it.</p>
			<!-- Tags -->
			<div class="card p-4 space-y-4">
				<p>This input allow for any value to be entered.</p>
				<InputChip placeholder="Add tags..." bind:value={tags} />
				<code class="inline-block">{tags.length ? tags : 'No tags set.'}</code>
			</div>
			<!-- Flavors -->
			<div class="card p-4 space-y-4">
				<p>Flavors are whitelisted to: <em>{flavorsWhitelist.join(', ')}</em>.</p>
				<InputChip label="Flavors" placeholder="Add flavor..." bind:value={flavors} whitelist={flavorsWhitelist} />
				<code class="inline-block">{flavors.length ? flavors : 'No flavors set.'}</code>
			</div>
			<!-- Emails -->
			<div class="card p-4 space-y-4">
				<p>Emails are validated to contain <code>@</code> and <code>.</code> symbols.</p>
				<InputChip label="Emails" placeholder="Enter emails..." bind:value={emails} validation={isValidEmail} />
				<code class="inline-block">{emails.length ? emails : 'No emails set.'}</code>
			</div>
		</section>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<section class="space-y-4">
			<p>
				Create an array of values, then bind these to your the <code>InputChip</code> component. As values are added or removed the array will
				update. Duplicates are not allowed.
			</p>
			<CodeBlock language="ts" code={`let flavors = ['vanilla', 'chocolate', 'strawberry'];`} />
			<CodeBlock language="html" code={`<InputChip label="Flavors" placeholder="Add flavor..." bind:value={flavors} />`} />
		</section>
		<section class="space-y-4">
			<h2>Whitelist Values</h2>
			<p>
				You can provide a array of strings to use as a whitelist. Only whitelisted items can be entered. Invalid or duplicate values will
				show an error state.
			</p>
			<CodeBlock language="ts" code={`let flavorsWhitelist = ['vanilla', 'chocolate', 'strawberry'];`} />
			<CodeBlock language="html" code={`<InputChip ... whitelist={flavorsWhitelist} />`} />
		</section>
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
		<section class="space-y-4">
			<h2>Allow Uppercase Values</h2>
			<p>
				By default, all values entered are trimmed and formatted to lowercase. If you wish to allow uppercase, set the <em>lowercase</em>
				prop to <code>false</code>.
			</p>
			<CodeBlock language="html" code={`<InputChip ... lowercase="false" />`} />
		</section>
		<section class="space-y-4">
			<h2>Required Attribute</h2>
			<p>
				Note the <code>required</code> attribute has no bearing on the validation state of this input. Instead, we recommend disabling form
				submission if your validation conditions are not met - such as too few or too many values. Make sure to show an
				<a href="/components/alerts">Alert</a> or message to inform users of error states.
			</p>
			<CodeBlock language="html" code={`<button type="submit" disabled={!flavors.length}>Submit</button>`} />
			<CodeBlock language="html" code={`<button type="submit" disabled={flavors.length > 3}>Submit</button>`} />
		</section>
	</svelte:fragment>
</DocsShell>
