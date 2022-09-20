<script lang="ts">
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';
</script>

<div class="space-y-8">
	<!-- Header -->
	<header class="space-y-4">
		<h1>Forms</h1>
		<p />
		<p>
			Automatically included in the <code>all.css</code>. This <a href="/guides/styling">stylesheet</a> provides theme styling to forms when paired with the
			<a href="https://github.com/tailwindlabs/tailwindcss-forms" target="_blank">Tailwind Forms</a> plugin.
		</p>
		<CodeBlock language="ts" code={`import '@brainandbones/skeleton/styles/forms.css';`} />
	</header>

	<!-- Preview -->
	<card class="card card-body flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
		<div class="space-y-2">
			<p>We've provided a "kitchen sink" page to preview form elements.</p>
		</div>
		<a class="btn btn-filled-accent" href="/tailwind/forms/preview">Preview Elements &rarr;</a>
	</card>

	<!-- Setup -->
	<section class="space-y-4">
		<h2>Install Forms Plugin</h2>
		<p>View Tailwind's official YouTube video tutorial or follow the written steps.</p>
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
			<!-- YouTube Video -->
			<section>
				<iframe
					class="w-full aspect-video"
					src="https://www.youtube-nocookie.com/embed/pONeWAzDsQg"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
				/>
			</section>
			<!-- Written -->
			<div class="flex-auto space-y-4">
				<CodeBlock language="console" code={`npm install -D @tailwindcss/forms`} />
				<p>
					Add the <a href="https://tailwindcss.com/docs/plugins" target="_blank">plugin</a> to your
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
		</div>
	</section>

	<!-- Usage -->
	<section class="space-y-4">
		<h2>Usage</h2>
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
</div>
