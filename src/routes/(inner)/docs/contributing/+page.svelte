<script lang="ts">
	import LayoutPage from '$docs/layouts/LayoutPage/LayoutPage.svelte';
</script>

<LayoutPage>
	<!-- Header -->
	<header class="space-y-4">
		<h1>Contributing</h1>
		<p>
			Thank you for your interest in contributing to Skeleton. We ask that you please review the sections below in full before submitting
			your first pull request.
		</p>
	</header>

	<hr />

	<!-- Resources -->
	<section class="space-y-4">
		<h2>Getting Started</h2>
		<!-- Article: How to Contribute -->
		<a class="card variant-glass p-4 grid grid-cols-[1fr_auto] gap-4" href="/docs/contributing/requirements">
			<div class="space-y-4">
				<h3 data-toc-ignore>How to Contribute</h3>
				<p>Are you new to open source? Read this helpful guide covering the basic concepts and best practices for contributing.</p>
			</div>
			<a
				class="btn variant-filled-secondary place-self-center"
				href="https://opensource.guide/how-to-contribute/"
				target="_blank"
				rel="noreferrer"
			>
				Read Guide
			</a>
		</a>
		<!-- GitHub: First Contributions -->
		<a class="card variant-glass p-4 grid grid-cols-[1fr_auto] gap-4" href="/docs/contributing/requirements">
			<div class="space-y-4">
				<h3 data-toc-ignore>First Contributions</h3>
				<p>Need a guided tour? Follow a written step-by-step guide explaining the process for contributing to open source.</p>
			</div>
			<a
				class="btn variant-filled-secondary place-self-center"
				href="https://github.com/firstcontributions/first-contributions"
				target="_blank"
				rel="noreferrer"
			>
				Read Guide
			</a>
		</a>
	</section>

	<hr />

	<section class="space-y-4">
		<h2>Guides</h2>
		<!-- Basics -->
		<div class="card variant-glass p-4 grid grid-cols-[1fr_auto] gap-4">
			<div class="space-y-4">
				<h3 data-toc-ignore>Requirements</h3>
				<p>Ready to contribute to Skeleton? Read our requirements and recommended workflow process.</p>
			</div>
			<a class="btn variant-filled-secondary place-self-center" href="/docs/contributing/requirements"> Read Guide </a>
		</div>
		<!-- Style Guide -->
		<div class="card variant-glass p-4 grid grid-cols-[1fr_auto] gap-4">
			<div class="space-y-4">
				<h3 data-toc-ignore>Style Guide</h3>
				<p>Review recommended conventions for writing code, naming properties, and handling CSS styling.</p>
			</div>
			<a class="btn variant-filled-secondary place-self-center" href="/docs/contributing/style-guide"> Read Guide </a>
		</div>
		<!-- Docs Guide -->
		<div class="card variant-glass p-4 grid grid-cols-[1fr_auto] gap-4">
			<div class="space-y-4">
				<h3 data-toc-ignore>Documentation Guide</h3>
				<p>Good documentation makes life easier for everyone involved, check out how easy it is with this guide.</p>
			</div>
			<a class="btn variant-filled-secondary place-self-center" href="/docs/contributing/documentation"> Read Guide </a>
		</div>
	</section>

	<hr />

	<section class="space-y-4">
		<h2>Videos</h2>
		<!-- Testing (video) -->
		<div class="card variant-glass p-4 grid grid-cols-[1fr_auto] gap-4">
			<div class="space-y-4">
				<h3 data-toc-ignore>DocumAutomated Tests</h3>
				<p>Watch an in-depth video covering automated testing with Vitest, provided by Skeleton contributors.</p>
			</div>
			<a class="btn variant-filled-secondary place-self-center" href="https://youtu.be/Ru3FtSzN128" target="_blank" rel="noreferrer">
				Watch Video
			</a>
		</div>
	</section>
</LayoutPage>
