<script lang="ts">
	import DocsShell from '$docs/layouts/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/layouts/DocsShell/types';
	import DocsPreview from '$docs/components/DocsPreview/DocsPreview.svelte';
	// Utilities
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';
	// Components
	import InputChip from '$lib/components/InputChip/InputChip.svelte';
	// Sveld
	import sveldInputChip from '$lib/components/InputChip/InputChip.svelte?raw&sveld';
	import { toastStore } from '$lib/utilities/Toast/stores';

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
	let musicalGenres = ['rock', 'r&b', 'pop'];
	let musicalGenresWhitelist = ['rock', 'pop', 'hip-hop', 'metal', 'techno', 'r&b'];

	function isValidEmail(value: string): boolean {
		return value.includes('@') && value.includes('.');
	}

	function onInvalidHandler(event: any): void {
		toastStore.trigger({
			message: `"${event.detail.input}" is an invalid value. Please try again!`,
			background: 'variant-filled-error'
		});
	}
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<DocsPreview>
			<svelte:fragment slot="preview">
				<InputChip bind:value={anythingList} name="chips-example" placeholder="Enter any value..." class="text-token" />
			</svelte:fragment>
			<svelte:fragment slot="footer">
				<div class="text-center">
					<code class="code">{anythingList.length ? anythingList.join(', ') : 'No chips available.'}</code>
				</div>
			</svelte:fragment>
			<svelte:fragment slot="source">
				<CodeBlock language="ts" code={`let list: string[] = ['foo', 'bar', 'fizz', 'buzz'];`} />
				<CodeBlock language="html" code={`<InputChip bind:value={list} name="chips" placeholder="Enter any value..." />`} />
			</svelte:fragment>
		</DocsPreview>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<section class="space-y-4">
			<p>
				Bind an array of data to the component <code class="code">value</code> property. Only <u>string</u> values are supported at this time.
			</p>
		</section>
		<!-- Whitelist -->
		<section class="space-y-4">
			<h2 class="h2">Whitelist Values</h2>
			<p>
				You can provide an array of strings to use as a whitelist. Only whitelisted items can be entered. Invalid or duplicate values will
				show an error state.
			</p>
			<DocsPreview background="neutral">
				<svelte:fragment slot="preview">
					<InputChip
						name="chips-example-flavors"
						bind:value={flavorsList}
						placeholder="Enter flavors..."
						chips="variant-filled-primary"
						whitelist={flavorsWhitelist}
					/>
				</svelte:fragment>
				<svelte:fragment slot="footer">
					<div class="text-center">
						<code class="code">{flavorsList.length ? flavorsList.join(', ') : 'No flavors set.'}</code>
					</div>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock language="ts" code={`let flavorsWhitelist = ['vanilla', 'chocolate', 'strawberry', 'peach', 'rocky road'];`} />
					<CodeBlock language="html" code={`<InputChip ... whitelist={flavorsWhitelist} />`} />
				</svelte:fragment>
			</DocsPreview>
		</section>
		<!-- Custom Validation -->
		<section class="space-y-4">
			<h2 class="h2">Custom Validation</h2>
			<p>You can optionally provide a function to provide custom validation. Make sure to accept a string value and return a boolean.</p>
			<DocsPreview background="neutral">
				<svelte:fragment slot="preview">
					<InputChip
						name="chips-example-emails"
						bind:value={emails}
						placeholder="Enter Emails..."
						chips="variant-filled-secondary"
						validation={isValidEmail}
					/>
				</svelte:fragment>
				<svelte:fragment slot="footer">
					<div class="text-center">
						<code class="code">{emails.length ? emails.join(', ') : 'No emails set.'}</code>
					</div>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock
						language="ts"
						code={`function isValidEmail(value: string): boolean {\n\treturn value.includes('@') && value.includes('.');\n}`}
					/>
					<CodeBlock language="html" code={`<InputChip ... validation={isValidEmail} />`} />
				</svelte:fragment>
			</DocsPreview>
		</section>
		<section class="space-y-4">
			<h2 class="h2">Invalid Hook</h2>
			<p>You may utilize an <code class="code">onInvalid</code> function that executes when the input becomes invalid.</p>
			<DocsPreview background="neutral">
				<svelte:fragment slot="preview">
					<InputChip
						name="chips-example-onInvalid"
						bind:value={musicalGenres}
						placeholder="Enter Genres..."
						chips="variant-filled-tertiary"
						whitelist={musicalGenresWhitelist}
						on:invalid={onInvalidHandler}
					/>
				</svelte:fragment>
				<svelte:fragment slot="footer">
					<div class="text-center">
						<code class="code">{musicalGenres.length ? musicalGenres.join(', ') : 'No genres set.'}</code>
					</div>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock
						language="ts"
						code={`
function onInvalidHandler(event: any): void {
	toastStore.trigger({
		message: \`"\${event.detail.input}" is an invalid value. Please try again!\`,
		background: 'variant-filled-error'
	});
}
						`}
					/>
					<CodeBlock language="html" code={`<InputChip ... on:invalid={onInvalidHandler} />`} />
				</svelte:fragment>
			</DocsPreview>
		</section>
		<!-- Additional Settings -->
		<section class="space-y-4">
			<h2 class="h2">Additional Settings</h2>
			<p>Use the <code class="code">max</code> property to define a maximum number of chips allowed.</p>
			<CodeBlock language="html" code={`<InputChip ... max={3} />`} />
			<p>
				Use the <code class="code">minlength</code> and <code class="code">maxlength</code> properties to set the minimum/maximum number of input
				characters respectively.
			</p>
			<CodeBlock language="html" code={`<InputChip ... minlength={2} maxlength={5} />`} />
			<p>
				By default, only a single instance of each value is allowed. If you wish to allow duplicates, set <code class="code"
					>allowDuplicates</code
				>.
			</p>
			<CodeBlock language="html" code={`<InputChip ... allowDuplicates />`} />
			<p>
				By default, all values are trimmed and formatted lowercase. If you wish to allow uppercase, set <code class="code"
					>allowUpperCase</code
				>.
			</p>
			<CodeBlock language="html" code={`<InputChip ... allowUpperCase />`} />
		</section>
		<hr />
		<!-- See Also -->
		<section class="!flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
			<div class="space-y-2">
				<h2 class="h2">See Also</h2>
				<p>Interactive chip element styles for actions, selection, or filtering.</p>
			</div>
			<a class="btn variant-ghost-surface" href="/elements/chips">Chip Elements &rarr;</a>
		</section>
	</svelte:fragment>
</DocsShell>
