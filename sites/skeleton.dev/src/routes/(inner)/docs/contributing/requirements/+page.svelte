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
				'Represents the production branch. All pull requests submitted to this branch will be rejected.',
				'🚫 NEVER'
			],
			[
				'<code class="code">dev</code>',
				'The active development branch containing bleeding edge changes. Target this branch for PRs',
				'✅ Yes'
			]
		]
	};
	const tableProjectStructure: TableSource = {
		head: ['Path', 'Description'],
		body: [
			[
				'<code class="code">/packages/skeleton</code>',
				'The core library project, containing all components, elements, utilities, and more.'
			],
			['<code class="code">/sites/skeleton.dev</code>', `The SvelteKit project containing this documentation website.`]
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
		<p>
			Please ensure you have read and understand all requirements below. Failure to adhere to the following guidelines may result in your
			pull requests being denied. We reserve the right to ban repeat offenders.
		</p>
	</header>

	<hr />

	<aside class="alert variant-ghost-primary">
		<i class="fa-solid fa-thumbs-up text-2xl" />
		<div class="alert-message">Remember to be a team player, don't be a hero! Open source is best when we all work together!</div>
	</aside>

	<!-- Roadmap -->
	<section class="space-y-4">
		<h2 class="h2">Pull Requests</h2>
		<!-- prettier-ignore -->
		<ol class="list-decimal list-inside space-y-2">
			<li>
				<a class="anchor" href="https://github.com/skeletonlabs/skeleton/issues" target="_blank" rel="noreferrer">Find an open issue</a> or <a class="anchor" href="https://github.com/skeletonlabs/skeleton/discussions/1367" target="_blank" rel="noreferrer">identify a roadmap task</a> you wish to contribute to.
			</li>
			<li>If an issue exists on GitHub, leave a comment and let us know you're interested. We'll assign you to it.</li>
			<li>
				To propose a new feature or update, <a class="anchor" href="https://github.com/skeletonlabs/skeleton/issues/new/choose" target="_blank" rel="noreferrer">create a GitHub issue</a> or <a class="anchor" href="https://discord.gg/EXqV7W8MtY" target="_blank" rel="noreferrer">reach out on Discord</a> in the <code class="code">#contributors</code> channel.
			</li>
			<li>Please communicate with maintainers to define <u>all requirements</u> before you write your first line of code.</li>
			<li>
				Follow our recommended <strong>branch naming convention</strong> defined in our <a class="anchor" href="/docs/contributing/style-guide">style guide</a>.
			</li>
			<li>Submit your pull request as a <strong>DRAFT</strong> as early as possible. Peer review is critical to this process.</li>
			<li>Run automated tests with <code class="code">pnpm test</code> to verify that no regressions were introduced.</li>
			<li>
				Be sure to follow our recommended <a class="anchor" href="/docs/contributing/documentation" target="_blank" rel="noreferrer"> documentation guidelines</a> before requesting a review.
			</li>
			<li>When ready, set your pull request to the "ready to review" state. Then be patient. We'll review asap.</li>
			<li>If your PR meets all requirements it will be merged, otherwise feedback and guidance will be provided.</li>
		</ol>
	</section>

	<!-- Branches -->
	<section class="space-y-4">
		<h2 class="h2">Branches</h2>
		<Table source={tableBranches} />
	</section>

	<!-- Monorepo -->
	<section class="space-y-4">
		<h2 class="h2">Monorepo</h2>
		<p>
			Skeleton uses a monorepo to group related projects into a single repository. This allows us to easily maintain multiple projects and
			packages in parallel. This includes the Skeleton core library, this documentation site, and more.
		</p>
		<!-- prettier-ignore -->
		<p>
			In order to contribute to Skeleton, you will be required to install and use <a class="anchor" href="https://pnpm.io/" target="_blank" rel="noreferrer">pnpm</a>, as it fully supports monorepo project structures. Don't worry, it's very similar to <code class="code">npm</code> and will handle most of the heavy lifting.
		</p>
		<p>We've provide a quick reference below for where each project is located.</p>
		<Table source={tableProjectStructure} />
		<h3 class="h3">Getting Started</h3>
		<p>If you're not familiar with using a monorepo, please follow the steps below:</p>
		<!-- prettier-ignore -->
		<ol class="list-decimal list-inside space-y-2">
			<li>Install <a class="anchor" href="https://pnpm.io/" target="_blank" rel="noreferrer">pnpm</a> globally using <code class="code">npm install -g pnpm</code>. Confirm via <code class="code">pnpm --version</code> in your terminal.</li>
			<li>Run <code class="code">git clone https://github.com/skeletonlabs/skeleton.git</code> to clone the monorepo project.</li>
			<li>Run <code class="code">cd skeleton</code> to move into the cloned monorepo project.</li>
			<li>Delete your <code class="code">node_modules</code> directory, then run <code class="code">pnpm i</code> to install depedencies for all projects.</li>
			<li>Run <code class="code">cd sites/skeleton.dev</code> to move into the Skeleton documentation project.</li>
			<li>Run <code class="code">code .</code> to open the current project directory in VS Code.</li>
			<li>Run <code class="code">pnpm dev</code> to start a local dev server. You may see a warning the first time.</li>
			<li>Open the dev server address provided by the terminal in your browser.</li>
			<li>Modify the documentation or library components as desired. This fully supports HMR.</li>
		</ol>
		<h3 class="h3">Adding New Projects</h3>
		<p>
			If you wish to add a new project, first run <code class="code">pnpm getall</code> from the root of the monorepo. This will clone
			<a class="anchor" href="https://github.com/skeletonlabs/create-skeleton-app" target="_blank" rel="noreferrer">create-skeleton-app</a>
			into your project under <code class="code">packages/create-skeleton-app</code>. Next run
			<code class="code">pnpm csa yoursitename</code>. This will generate a brand new Skeleton project in the
			<code class="code">/sites</code> directory.
		</p>
		<h3 class="h3">Importing Skeleton</h3>
		<p>To import Skeleton features (ex: components) within each monorepo project, use the following structure:</p>
		<CodeBlock language="typescript" code={`import { Avatar } from '@skeletonlabs/skeleton';`} />
	</section>

	<!-- Tooling -->
	<section class="space-y-4">
		<h2 class="h2">Tooling</h2>
		<p>Skeleton utilizes a number of additional tools for project maintenance.</p>
		<h3 class="h3">Code Linting &amp; Formatting</h3>
		<p>
			To check for linting issues via <a class="anchor" href="https://prettier.io/" target="_blank" rel="noreferrer">Prettier</a>, run:
		</p>
		<CodeBlock language="console" code={`pnpm lint`} />
		<p>To automatically apply suggested linting changes, run:</p>
		<CodeBlock language="console" code={`pnpm format`} />

		<!-- Automated Tests -->
		<h3 class="h3">Automated Tests</h3>
		<p>
			Tests are handled via <a class="anchor" href="https://vitest.dev/" target="_blank" rel="noreferrer">Vitest</a>, which is similar to
			Jest. Make sure to run all tests before submitting new pull requests.
		</p>
		<CodeBlock language="console" code={`pnpm test`} />

		<!-- Spell Checking -->
		<h3 class="h3">Spell Checking</h3>
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
		<CodeBlock language="console" code={`pnpm cspell "**" --no-progress`} />
	</section>

	<!-- Dependencies -->
	<section class="space-y-4">
		<h2 class="h2">Dependencies</h2>
		<p>
			Introducing new dependencies to projects is strictly prohibited. Please sync with a core core maintainer if this is required. Pull
			requests that introduce new dependencies without approval will be rejected.
		</p>
	</section>
</LayoutPage>
