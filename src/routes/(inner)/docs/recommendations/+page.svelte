<script>
	import Avatar from '$lib/components/Avatar/Avatar.svelte';
</script>

<div class="page-container">
	<!-- Header -->
	<header class="space-y-4">
		<h1>Recommendations</h1>
		<p>The following is a curated list of open source packages that pair well with Skeleton. Use these to extend your project and add additional functionality.</p>
	</header>

	<hr />

	<!-- Resources -->
	<section class="grid grid-cols-1 xl:grid-cols-2 gap-4">
		<!-- svelte-animated-counter -->
		<div class="card">
			<header class="card-header">
				<h2>Svelte Animated Counter</h2>
			</header>
			<div class="card-body">
				<p>Tiny animated counter library for Svelte.</p>
			</div>
			<!-- Byline -->
			<footer class="p-4 flex justify-between items-center space-x-4">
				<a class="flex items-center space-x-4" href="https://github.com/benzara-tahar" target="_blank">
					<Avatar src="https://avatars.githubusercontent.com/u/71077112?v=4" />
					<small>Benzara Tahar</small>
				</a>
				<div class="flex items-center space-x-4">
					<a class="btn btn-filled-accent" href="https://svelte-animated-counter.vercel.app/" target="_blank">Website</a>
					<a class="btn btn-filled-accent" href="https://github.com/benzara-tahar/svelte-animated-counter" target="_blank">GitHub</a>
				</div>
			</footer>
		</div>

		<!-- Highlight.js -->
		<div class="card">
			<header class="card-header">
				<h2>Highlight.js</h2>
			</header>
			<div class="card-body">
				<p>Syntax highlighter with language auto-detection and zero dependencies.</p>
			</div>
			<!-- Byline -->
			<footer class="p-4 flex justify-between items-center space-x-4">
				<a class="flex items-center space-x-4" href="https://github.com/highlightjs" target="_blank">
					<Avatar src="https://avatars.githubusercontent.com/u/9039821?s=200&v=4" />
					<small>Highlight.js</small>
				</a>
				<div class="flex items-center space-x-4">
					<a class="btn btn-filled-accent" href="https://highlightjs.org/" target="_blank">Website</a>
					<a class="btn btn-filled-accent" href="https://github.com/highlightjs/highlight.js" target="_blank">GitHub</a>
				</div>
			</footer>
		</div>

		<!-- Felte -->
		<div class="card">
			<header class="card-header">
				<h2>Felte</h2>
			</header>
			<div class="card-body">
				<p>An extensible form library for Svelte.</p>
			</div>
			<!-- Byline -->
			<footer class="p-4 flex justify-between items-center space-x-4">
				<a class="flex items-center space-x-4" href="https://github.com/pablo-abc" target="_blank">
					<Avatar src="https://avatars.githubusercontent.com/u/40573613?v=4" />
					<small>Pablo Berganza</small>
				</a>
				<div class="flex items-center space-x-4">
					<a class="btn btn-filled-accent" href="https://felte.dev/" target="_blank">Website</a>
					<a class="btn btn-filled-accent" href="https://github.com/pablo-abc/felte" target="_blank">GitHub</a>
				</div>
			</footer>
		</div>

		<!-- Yup -->
		<div class="card">
			<header class="card-header">
				<h2>Yup</h2>
			</header>
			<div class="card-body">
				<p>Dead simple Object schema form validation.</p>
			</div>
			<!-- Byline -->
			<footer class="p-4 flex justify-between items-center space-x-4">
				<a class="flex items-center space-x-4" href="https://github.com/jquense" target="_blank">
					<Avatar src="https://avatars.githubusercontent.com/u/339286?v=4" />
					<small>Jason Quense</small>
				</a>
				<div class="flex items-center space-x-4">
					<a class="btn btn-filled-accent" href="https://github.com/jquense/yup" target="_blank">GitHub</a>
				</div>
			</footer>
		</div>

		<!-- Chart.js -->
		<div class="card">
			<header class="card-header">
				<h2>Chart.js</h2>
			</header>
			<div class="card-body">
				<p>Simple HTML5 charts using the canvas element.</p>
			</div>
			<!-- Byline -->
			<footer class="p-4 flex justify-between items-center space-x-4">
				<a class="flex items-center space-x-4" href="https://github.com/chartjs" target="_blank">
					<Avatar background="bg-pink-500" src="https://avatars.githubusercontent.com/u/10342521?s=200&v=4" />
					<small>Chart.js</small>
				</a>
				<div class="flex items-center space-x-4">
					<a class="btn btn-filled-accent" href="https://www.chartjs.org/" target="_blank">Website</a>
					<a class="btn btn-filled-accent" href="https://github.com/chartjs/Chart.js" target="_blank">GitHub</a>
				</div>
			</footer>
		</div>

		<!-- Font Awesome -->
		<div class="card">
			<header class="card-header">
				<h2>Font Awesome</h2>
			</header>
			<div class="card-body">
				<p>An expansive SVG, font, and icon toolkit.</p>
			</div>
			<!-- Byline -->
			<footer class="p-4 flex justify-between items-center space-x-4">
				<a class="flex items-center space-x-4" href="https://github.com/FortAwesome" target="_blank">
					<Avatar src="https://avatars.githubusercontent.com/u/1505683?s=200&v=4" />
					<small>Font Awesome</small>
				</a>
				<div class="flex items-center space-x-4">
					<a class="btn btn-filled-accent" href="https://fontawesome.com/" target="_blank">Website</a>
					<a class="btn btn-filled-accent" href="https://github.com/FortAwesome/Font-Awesome" target="_blank">GitHub</a>
				</div>
			</footer>
		</div>
	</section>

	<hr />

	<!-- Suggest -->
	<section class="text-center space-y-4">
		<p>Is there something we're missing?</p>
		<a class="btn btn-ghost" href="https://github.com/Brain-Bones/skeleton/issues/new?assignees=&labels=feature-request&template=feature_request.yml" target="_blank">Suggest a Package</a>
	</section>
</div>
