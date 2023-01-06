<script lang="ts">
	import type { TableSource } from '$lib/components/Table/types';

	import Table from '$lib/components/Table/Table.svelte';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

	// Tables
	const tableProjectStructure: TableSource = {
		head: ['Path', 'Description'],
		body: [
			['<code>/src/docs</code>', 'Houses Skeleton-specific documentation site components, such as the theme generator.'],
			['<code>/src/lib</code>', 'Houses only features and assets distributed with the NPM package.'],
			['<code>/src/routes</code>', 'House documentation pages for the public-facing documentation website, such as this page.']
		]
	};
	const tableBranches: TableSource = {
		head: ['Branch', 'Description', 'PRs Allowed'],
		body: [
			['<code>master</code>', 'Represents the production branch. Pull requests sent to this branch will be rejected.', 'No'],
			['<code>dev</code>', 'The active development branch containing bleeding edge changes. Target this branch for PRs', 'Yes']
		]
	};
	const tableBranchNaming: TableSource = {
		head: ['Prefix', 'Description'],
		body: [
			['<code>docs/*</code>', 'Updates to the documentation pages or text copy.'],
			['<code>feat/*</code>', 'New features, components, or far-reaching updates.'],
			['<code>chore/*</code>', 'Simple and localized updates.'],
			['<code>bugfix/*</code>', 'Commits that address or fix issues.']
		]
	};
	const tableDocs: TableSource = {
		head: ['Path', 'Description'],
		body: [
			['<code>/src/docs/DocsAppBar</code>', 'The AppBar found at the top of the page.'],
			['<code>/src/docs/DocFooter</code>', 'The footer found at the bottom of each page.'],
			['<code>/src/docs/DocsNavigation/DocsDrawer.svelte</code>', 'The left navigation drawer visible on small screens.'],
			['<code>/src/docs/DocsNavigation/DocsSidebar.svelte</code>', 'The left sidebar component for large screens.'],
			['<code>/src/docs/DocsNavigation/links.ts</code>', 'Used to configure all sidebar navigation links.'],
			['<code>/src/docs/DocsThemer</code>', 'The theme generator found on the Getting Starts > Themes section.']
		]
	};
</script>

<div class="page-container">
	<!-- Breadcrumbs -->
	<ol class="breadcrumb">
		<li class="crumb"><a href="/docs/contributions">Contributions</a></li>
		<li class="crumb-separator" aria-hidden>&rsaquo;</li>
		<li>Requirements</li>
	</ol>

	<!-- Header -->
	<header class="space-y-4">
		<h1>Requirements</h1>
		<p>If you wish to contribute to Skeleton, please ensure you have read and understand our requirements below.</p>
	</header>

	<hr />

	<!-- Roadmap -->
	<section class="space-y-4">
		<h2>Contribution Workflow</h2>
		<ol class="list-decimal list-inside space-y-1">
			<li>
				<a href="https://github.com/skeletonlabs/skeleton/issues" target="_blank" rel="noreferrer">Select an issue</a>
				or
				<a href="https://github.com/skeletonlabs/skeleton/wiki/%F0%9F%9B%A3%EF%B8%8F-The-Skeleton-Roadmap" target="_blank" rel="noreferrer"
					>roadmap task</a
				> you wish to contribute to.
			</li>
			<li>
				Leave a comment, join the <a href="https://github.com/skeletonlabs/skeleton/discussions/79" target="_blank" rel="noreferrer"
					>roadmap discussion</a
				>, or
				<a href="https://discord.gg/EXqV7W8MtY" target="_blank" rel="noreferrer">give us a heads up on Discord</a>.
			</li>
			<li>Review with core contributors to define the requirements before you write your first line of code.</li>
			<li>Follow our branch naming conventions described below.</li>
			<li>Don't be afraid to submit a draft pull request early on to ensure your meeting our guidelines.</li>
			<li>Make sure you run our automated tests to confirm no regressions were introduced from your changes.</li>
			<li>
				Everything needs a docs page to explain how it works to end users. See our <a
					href="/docs/contributions/documentation"
					target="_blank"
					rel="noreferrer">docs section</a
				> for more info.
			</li>
			<li>When ready, submit or set your pull request to the ready state. This will begin the code review process.</li>
			<li>If your PR meets all requirements it will be merged, otherwise feedback will be provided.</li>
		</ol>
		<aside class="alert">
			<i class="fa-solid fa-thumbs-up text-2xl" />
			<div class="alert-message">
				Remember to be a team player, don't be a hero! Open-source is most successful when we all work together.
			</div>
		</aside>
	</section>

	<hr />

	<!--Branches -->
	<section class="space-y-4">
		<h2>Branches</h2>
		<Table source={tableBranches} />
		<h4>Feature Branch Conventions</h4>
		<Table source={tableBranchNaming} />
		<p>The wildcards (*) should be replaced with short and semantic descriptions that are lowercase and seperated by dashes.</p>
		<pre>feat/my-new-component-name</pre>
	</section>

	<hr />

	<!-- File Names -->
	<section class="space-y-4">
		<h2>File Name Conventions</h2>
		<ul class="list-disc list-inside space-y-1">
			<li>Feature directories should be singular and title case: <code>../LightSwitch/..</code></li>
			<li>Components should be singular and title case: <code>LightSwitch.svelte</code></li>
			<li>Svelte Actions should singular, lowercase, and use Typescript: <code>clipboard.ts</code></li>
			<li>Tailwind Element stylesheets are plural and lowercase: <code>buttons.css</code></li>
			<li>Documentation should be lowercase and use dashes: <code>/routes/components/radio-groups/+page.svelte</code></li>
			<li>
				Tests should be suffixed with <code>*.test.ts</code> and match the feature naming convention: <code>LightSwitch.test.ts</code>
			</li>
		</ul>
	</section>

	<hr />

	<!-- Dependencies -->
	<section class="space-y-4">
		<h2>Third Party Dependencies</h2>
		<p>
			Adding additional project depedencies is not allowed without prior discussion. Please contact a core contributor before adding or
			modifying depedencies.
		</p>
	</section>

	<hr />

	<!-- Code Formatting -->
	<section class="space-y-4">
		<h2>Code Linting &amp; Formatting</h2>
		<p>
			This is is handled via <a href="https://prettier.io/" target="_blank" rel="noreferrer">Prettier</a>. To check for linting issues, run:
		</p>
		<CodeBlock language="console" code={`npm run lint`} />
		<p>To automatically apply formatting, run:</p>
		<CodeBlock language="console" code={`npm run format`} />
	</section>

	<hr />

	<!-- Automated Tests -->
	<section class="space-y-4">
		<h2>Automated Tests</h2>
		<p>
			Tests are handled via <a href="https://vitest.dev/" target="_blank" rel="noreferrer">Vitest</a>, which uses similar conventions and
			syntax to Jest. Please ensure you write or update tests before submitting a pull request.
		</p>
		<CodeBlock language="console" code={`npm run test`} />
	</section>

	<hr />

	<!-- Project Structure -->
	<section class="space-y-4">
		<h2>Project Structure</h2>
		<Table source={tableProjectStructure} />
		<Table source={tableDocs} />
	</section>
</div>
