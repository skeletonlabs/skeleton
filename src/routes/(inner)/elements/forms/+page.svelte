<script lang="ts">
	import DocsShell from '$docs/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/DocsShell/types';

	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Element,
		name: 'Forms',
		description: 'Provides theme styling to forms when paired with the Tailwind forms plugin.',
		stylesheetIncludes: ['all', 'forms'],
		source: 'styles/forms.css',
		dependencies: [{ label: 'Tailwind Forms Plugin', url: 'https://github.com/tailwindlabs/tailwindcss-forms' }]
	};
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<section class="card p-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
			<div class="space-y-2">
				<p>We've provided a "kitchen sink" page to preview form elements.</p>
			</div>
			<a class="btn btn-filled-secondary" href="/elements/forms/preview">Preview Elements &rarr;</a>
		</section>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<section class="space-y-4">
			<h2>Tailwind Forms Plugin</h2>
			<p>
				Follow the steps below to install this plugin. If you would like to learn more about this plugin, see <a
					href="https://www.youtube.com/watch?v=pONeWAzDsQg"
					target="_blank"
					rel="noreferrer">Tailwind's YouTube tutorial</a
				>.
			</p>
			<!-- Written -->
			<div class="flex-auto space-y-4">
				<CodeBlock language="console" code={`npm install -D @tailwindcss/forms`} />
				<p>
					Add the <a href="https://tailwindcss.com/docs/plugins" target="_blank" rel="noreferrer">plugin</a> to your
					<code>tailwind.config.cjs</code>
				</p>
				<CodeBlock
					language="js"
					code={`
module.exports = {
	// ...
	plugins: [
		// Insert before the Skeleton Tailwind plugin:
		require('@tailwindcss/forms'),
		// ...
	],
}
				`}
				/>
			</div>
		</section>
		<section class="space-y-4">
			<h2>Implement</h2>
			<p>Create form elements using native HTML markup. We recommend <em>span</em> tags for label text.</p>
			<CodeBlock
				language="html"
				code={`
<label for="name">
	<span>Name</span>
	<input type="text" id="name" bind:value={name} minlength="2" required>
</label>
		`}
			/>
			<CodeBlock
				language="html"
				code={`
<label for="color">
	<span>Color</span>
	<select name="color" id="color" bind:value={color}>
		<option value="red">red</option>
		<option value="green">green</option>
		<option value="blue">blue</option>
	</select>
</label>
		`}
			/>
		</section>
	</svelte:fragment>
</DocsShell>
