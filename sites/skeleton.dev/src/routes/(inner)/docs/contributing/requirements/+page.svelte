<script lang="ts">
	import LayoutPage from '$lib/layouts/LayoutPage/LayoutPage.svelte';
	// Components
	import { Table, CodeBlock, type TableSource } from '@skeletonlabs/skeleton';

	// Tables
	const tableBranches: TableSource = {
		head: ['Branch', 'Description', 'Pull Requests'],
		body: [
			[
				'<code class="code">master</code>',
				'Represents the production branch. Pull requests sent to this branch will be rejected.',
				'🚫 No'
			],
			[
				'<code class="code">dev</code>',
				'The active development branch containing bleeding edge changes. Target this branch for PRs',
				'✅ Yes'
			]
		]
	};
	const tableBranchNaming: TableSource = {
		head: ['Prefix', 'Description'],
		body: [
			['<code class="code">docs/*</code>', 'Updates to the documentation pages or text copy.'],
			['<code class="code">feat/*</code>', 'New features, components, or far-reaching updates.'],
			['<code class="code">chore/*</code>', 'Simple and localized updates.'],
			['<code class="code">bugfix/*</code>', 'Commits that address or fix issues.']
		]
	};
	const tableProjectStructure: TableSource = {
		head: ['Path', 'Description'],
		body: [
			['<code class="code">/src/docs</code>', 'Documentation-specific components and features, such as the theme generator.'],
			['<code class="code">/src/lib</code>', `Features and assets distributed within the core library's and NPM package.`],
			['<code class="code">/src/routes</code>', 'Documentation pages for the public-facing documentation website, including this page.']
		]
	};
</script>

<LayoutPage>
	<!-- Breadcrumbs -->
	<ol class="breadcrumb">
		<li class="crumb"><a class="anchor" href="/docs/contributing">Contributing</a></li>
		<li class="crumb-separator" aria-hidden>&rsaquo;</li>
		<li>Requirements</li>
	</ol>

	<!-- Header -->
	<header class="space-y-4">
		<h1 class="h1">Requirements</h1>
		<p>If you wish to contribute to Skeleton, please ensure you have read and understand our requirements below.</p>
	</header>

	<hr />

	<!-- Roadmap -->
	<section class="space-y-4">
		<h2 class="h2">Contribution Workflow</h2>
		<aside class="alert variant-ghost-warning">
			<i class="fa-solid fa-thumbs-up text-2xl" />
			<div class="alert-message">Remember to be a team player, don't be a hero! Open-source is most successful when we work together.</div>
		</aside>
		<ol class="list-decimal list-inside space-y-1">
			<li>
				<a class="anchor" href="https://github.com/skeletonlabs/skeleton/issues" target="_blank" rel="noreferrer">Select an issue</a>
				or
				<a
					class="anchor"
					href="https://github.com/skeletonlabs/skeleton/wiki/%F0%9F%9B%A3%EF%B8%8F-The-Skeleton-Roadmap"
					target="_blank"
					rel="noreferrer">roadmap task</a
				> you wish to contribute to.
			</li>
			<li>
				Leave a comment, join the <a
					class="anchor"
					href="https://github.com/skeletonlabs/skeleton/discussions/79"
					target="_blank"
					rel="noreferrer">roadmap discussion</a
				>, or
				<a class="anchor" href="https://discord.gg/EXqV7W8MtY" target="_blank" rel="noreferrer">reach out on Discord</a>.
			</li>
			<li>Review with core contributors to define <strong>all requirements</strong> before you write your first line of code.</li>
			<li>Follow our <strong>branch naming conventions</strong> described below.</li>
			<li>Don't be afraid to submit a <strong>draft pull request</strong> early on to ensure you're meeting our guidelines.</li>
			<li>Run automated tests to confirm no regressions were introduced from your changes.</li>
			<!-- prettier-ignore -->
			<li>
				Document your new feature or update per our <a class="anchor" href="/docs/contributing/documentation" target="_blank" rel="noreferrer"> documentation guidelines</a>.
			</li>
			<li>When ready, set your pull request to the "ready to review" state. Then be patient, we'll review asap.</li>
			<li>If your PR meets all requirements it will be merged, otherwise feedback will be provided.</li>
		</ol>
	</section>

	<!--Branches -->
	<section class="space-y-4">
		<h2 class="h2">Branches</h2>
		<Table source={tableBranches} />
		<h4 class="h4">Feature Branch Conventions</h4>
		<Table source={tableBranchNaming} />
		<p>The wildcards (*) should be replaced with short and semantic descriptions that are lowercase and separated by dashes.</p>
		<pre class="pre">feat/my-new-component-name</pre>
	</section>

	<!-- Dependencies -->
	<section class="space-y-4">
		<h2 class="h2">Third Party Dependencies</h2>
		<p>
			Avoid adding additional dependencies without prior consent from a core team member. Pull Requests that do not follow this
			recommendation will be rejected outright.
		</p>
	</section>

	<!-- Code Formatting -->
	<section class="space-y-4">
		<h2 class="h2">Code Linting &amp; Formatting</h2>
		<p>
			All Skeleton projects utilize <a class="anchor" href="https://prettier.io/" target="_blank" rel="noreferrer">Prettier</a>. To check
			for linting issues, run:
		</p>
		<CodeBlock language="console" code={`npm run lint`} />
		<p>To automatically apply formatting, run:</p>
		<CodeBlock language="console" code={`npm run format`} />
	</section>

	<!-- Automated Tests -->
	<section class="space-y-4">
		<h2 class="h2">Automated Tests</h2>
		<p>
			Tests are handled via <a class="anchor" href="https://vitest.dev/" target="_blank" rel="noreferrer">Vitest</a>, which is similar to
			Jest. Ensure tests are current and passing before submitting a pull request.
		</p>
		<CodeBlock language="console" code={`npm run test`} />
	</section>

	<!-- Spell Checking -->
	<section class="space-y-4">
		<h2 class="h2">Spell Checking</h2>
		<p>
			Skeleton uses <a class="anchor" href="https://cspell.org" target="_blank" rel="noreferrer">Cspell</a> to check for spelling errors. We
			reccomend installing the
			<a
				class="anchor"
				href="https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker"
				target="_blank"
				rel="noreferrer"
			>
				Code Spell Checker
			</a>
			extension for VS Code. You can add words to the dictionary using this extension, or by editing <code class="code">cspell.json</code> at
			the root of the repository.
		</p>
		<CodeBlock language="console" code={`npm exec cspell "**" --no-progress`} />
	</section>
	<!-- Project Structure -->
	<section class="space-y-4">
		<h2 class="h2">Project Structure</h2>
		<Table source={tableProjectStructure} />
	</section>
</LayoutPage>
