<!-- <script lang="ts"></script> -->

<div class="page-container">
	<!-- Header -->
	<header class="space-y-4">
		<h1>Features</h1>
		<p>Skeleton is a fully featured UI toolkit that includes many awesome features, so let's compare the differences between each.</p>
	</header>

	<hr />

	<!-- Tailwind Elements -->
	<section class="space-y-4">
		<h2>Tailwind Elements</h2>
		<p>Mix native HTML elements with Skeleton-provided utility classes. Automatically adapt to your Skeleton theme and extend with Tailwind utility classes.</p>
		<ul class="list-disc list-inside space-y-2">
			<li>Svelte is <u>NOT</u> required to use Tailwind Elements.</li>
			<li>Do not require imports per each route page like components.</li>
			<li>A Skeleton provided stylesheet must be imported in your project (ex: <code>all.css</code>, <code>elements.css</code>, <code>buttons.css</code>)</li>
			<li>Can be paired with standard Tailwind utility classes.</li>
		</ul>
	</section>

	<hr />

	<!-- Svelte Components -->
	<section class="space-y-4">
		<h2>Svelte Components</h2>
		<p>
			These are <a href="https://svelte.dev/" target="_blank">Svelte Components</a> purpose built for the Skeleton library. They can include their own UI templates and scripted logic, and they can maintain
			their own state. These automatically update and adjust to your custom theme and provide unique props to update and adjust settings per component.
		</p>
		<ul class="list-disc list-inside space-y-2">
			<li>Svelte is required to use Svelte Components.</li>
			<li>Each component must be imported into the route page where they are being used.</li>
			<li>Include a series of props (properties) to customize settings and styles.</li>
			<li>May include slot elements to insert content.</li>
			<li>Typically include their own UI template.</li>
			<li>Typically have their own built-in styling, which adapts to your theme.</li>
		</ul>
	</section>

	<hr />

	<!-- Svelte Actions -->
	<section class="space-y-4">
		<h2>Svelte Actions</h2>
		<p>
			Skeleton provides a set of unique <a href="https://svelte.dev/tutorial/actions" target="_blank">Svelte Actions</a>, also known as directives in other libraries. These provide "headless" script
			logic without inherent UI. Think of these as add-ons features, including <em>copy to clipboard</em> and <em>applying image filters</em>.
		</p>
		<ul class="list-disc list-inside space-y-2">
			<li>Svelte is required to use Svelte Actions.</li>
			<li>Each action must be imported into the route page where they are being used.</li>
			<li>Each action must be applied to elements, via the <code>use:actionName="actionParams"</code> method.</li>
			<li>Do not contain UI template or styling.</li>
		</ul>
	</section>

	<hr />

	<!-- Utilities -->
	<section class="space-y-4">
		<h2>Skeleton Utilities</h2>
		<p>
			Skeleton utilities are powerful features that mix and match Skeleton elements, components, actions, and more. These include complex features like dialogs and toast notifications. These may also
			require extra dependencies to fully operate.
		</p>
		<ul class="list-disc list-inside space-y-2">
			<li>Svelte is required to use most utilities.</li>
			<li>Combination Skeleton elements, components, and actions.</li>
			<li>May require external dependencies to operate.</li>
		</ul>
	</section>
</div>
