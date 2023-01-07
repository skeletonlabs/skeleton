<script>
	import SvgIcon from '$lib/components/SvgIcon/SvgIcon.svelte';
</script>

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
		<div class="flex items-center space-x-4">
			<div class="bg-sky-500 w-10 aspect-square flex justify-center items-center rounded-token shadow">
				<SvgIcon name="tailwind" fill="fill-white" width="w-6" height="h-6" />
			</div>
			<h2>Tailwind</h2>
		</div>
		<p>These features require Tailwind to operate.</p>
		<h3>Design Tokens</h3>
		<p>Provides a set of utility classes based on your theme CSS custom property settings.</p>
		<div class="card card-glass-surface p-4 space-y-4">
			<ul class="list-disc list-inside space-y-2">
				<li>A stylesheet must be imported (ex: <code>all.css</code>, <code>tokens.css</code>)</li>
				<li>Can be paired with Tailwind utility classes.</li>
			</ul>
		</div>
		<h3>Base Classes</h3>
		<p>Apply default global styles, such as body, scrolling, and typography settings.</p>
		<div class="card card-glass-surface p-4 space-y-4">
			<ul class="list-disc list-inside space-y-2">
				<li>A stylesheet must be imported (ex: <code>all.css</code>, <code>core.css</code>)</li>
			</ul>
		</div>
		<h3>Elements</h3>
		<p>
			Mix native HTML elements with Skeleton-provided utility classes. Automatically adapt to your Skeleton theme and extend with Tailwind
			utility classes.
		</p>
		<div class="card card-glass-surface p-4 space-y-4">
			<ul class="list-disc list-inside space-y-2">
				<li>Use Design Tokens for default style settings.</li>
				<li>A stylesheet must be imported (ex: <code>all.css</code>, <code>elements.css</code>, <code>buttons.css</code>, etc.)</li>
				<li>Can be paired with Tailwind utility classes.</li>
			</ul>
		</div>
	</section>

	<hr />

	<!-- Svelte Components -->
	<section class="space-y-6">
		<div class="flex items-center space-x-4">
			<div class="bg-orange-500 w-10 aspect-square flex justify-center items-center rounded-token shadow">
				<SvgIcon name="svelte" fill="fill-white" width="w-6" height="h-6" />
			</div>
			<h2>Svelte</h2>
		</div>
		<p>These features require Svelte to operate.</p>
		<div class="space-y-4">
			<h3>Actions</h3>
			<p>
				Skeleton provides a set of unique <a href="https://svelte.dev/tutorial/actions" target="_blank" rel="noreferrer">Svelte Actions</a>,
				also known as directives in other libraries. These provide "headless" script logic without inherent UI. These include features such
				as <em>copy to clipboard</em>, <em>image filters</em>, and <em>focus capture</em>.
			</p>
			<div class="card card-glass-surface p-4 space-y-4">
				<ul class="list-disc list-inside space-y-2">
					<li>Each must be imported to use.</li>
					<li>Applied via <code>use:action="params"</code> method.</li>
					<li>May not contain a visual UI, just pure logic.</li>
				</ul>
			</div>
		</div>
		<div class="space-y-4">
			<h3>Components</h3>
			<p>
				These are <a href="https://svelte.dev/" target="_blank" rel="noreferrer">Svelte Components</a> purpose built for the Skeleton library.
				They can include their own UI templates, scripted logic, and mantaine their own state. These automatically update and adjust to your
				custom theme and provide unique props to update and adjust settings per component.
			</p>
			<div class="card card-glass-surface p-4 space-y-4">
				<ul class="list-disc list-inside space-y-2">
					<li>Each must be imported to use.</li>
					<li>Include props (properties) to customize settings and styles.</li>
					<li>May include slot elements to insert content.</li>
					<li>Include UI and styling, which adapts to your theme.</li>
				</ul>
			</div>
		</div>
	</section>

	<hr />

	<!-- Utilities -->
	<section class="space-y-4">
		<div class="flex items-center space-x-4">
			<div class="bg-secondary-500 w-10 aspect-square flex justify-center items-center rounded-token shadow">
				<i class="fa-solid fa-screwdriver-wrench text-xl" />
			</div>
			<h2>Skeleton Utilities</h2>
		</div>
		<p>
			Skeleton utilities are complex features that combine various Skeleton features. These are powerful features such as modals, code
			blocks, and more.
		</p>
		<div class="card card-glass-surface p-4 space-y-4">
			<ul class="list-disc list-inside space-y-2">
				<li>Svelte is required to use most utilities.</li>
				<li>Tailwind is required to use most utilities.</li>
				<li>Combines Skeleton elements, components, actions, and more.</li>
				<li>May require external dependencies to operate.</li>
			</ul>
		</div>
	</section>
</div>
