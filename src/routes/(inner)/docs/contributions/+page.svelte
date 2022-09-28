<script lang="ts">
	import { DataTable, Divider } from '@brainandbones/skeleton';

	const tableBranches: any = {
		headings: ['Branch', 'PRs Allowed', 'Description'],
		source: [
			['<code>master</code>', 'No', 'Represents the mainline production branch. Pull requests sent to this branch will be rejected.'],
			['<code>dev</code>', 'Yes', 'When submitting a pull request, please <u>target this branch</u>. PRs to other branches will be rejected.']
		]
	};
	const tableBranchConventions: any = {
		headings: ['Prefix', 'Description'],
		source: [
			['<code>docs/*</code>', 'Updates to the documentation pages or text copy.'],
			['<code>feat/*</code>', 'New features, components, or far-reaching updates.'],
			['<code>chore/*</code>', 'Simple and localized updates.'],
			['<code>bugfix/*</code>', 'Commits that address or fix issues.'],
			['<code>tests/*</code>', 'New or improved test cases.']
		]
	};

</script>

<div class="space-y-8">
	<!-- Header -->
	<header class="space-y-4">
		<h1>Contributions</h1>
		<p>Thank you for your interest in contributing to Skeleton. We ask that you please review this document in full before submitting your first pull request.</p>
		<p>If you are submitting a component, please also consult the <a href="/docs/creating-new-components">guide on components</a> to ensure that your contribution can be quickly and easily merged.</p>
	</header>

	<Divider />

	<!-- How to Contribute -->
	<section class="space-y-4">
		<h2>How to Contribute</h2>
		<ul class="list-disc list-inside">
			<li>
				Pull requests are always welcome. Read this full guide, <a href="https://github.com/Brain-Bones/skeleton/issues" target="_blank">create or pick an issue</a>, stake your claim, and start
				helping!
			</li>
			<li>
				Let Skeleton contributors know what you would like to see added. See the <a href="https://github.com/Brain-Bones/skeleton/wiki/%F0%9F%9B%A3%EF%B8%8F-The-Skeleton-Roadmap" target="_blank"
					>roadmap</a
				>
				and review the current <a href="https://github.com/Brain-Bones/skeleton/discussions/79" target="_blank">discussion thread</a>.
			</li>
			<li>Help improve documentation. Send a pull request to fix typos or grammar issues and to correct outdated or incorrect information.</li>
			<li>Spread the word. Send Skeleton to your fellow developers or share on social media. This helps a lot more than you think!</li>
		</ul>
	</section>

	<Divider />

	<!-- Roadmap -->
	<section class="space-y-4">
		<h2>
			Workflow
			<sup class="badge bg-warning-500 -translate-y-2">Important</sup>
		</h2>
		<p>Avoid commits and PRs without prior discussion. Open-source is most successful when we all work together.</p>
		<ol class="list-decimal list-inside">
			<li>
				<a href="https://github.com/Brain-Bones/skeleton/issues" target="_blank">Select an issue</a>
				or
				<a href="https://github.com/Brain-Bones/skeleton/wiki/%F0%9F%9B%A3%EF%B8%8F-The-Skeleton-Roadmap-(proposal)" target="_blank">roadmap task</a> you want to contribute to.
			</li>
			<li>
				Leave a comment, join the <a href="https://github.com/Brain-Bones/skeleton/discussions/79" target="_blank">roadmap discussion</a>, or notify other contributors on Discord.
			</li>
			<li>Review with other contributors to define the requirements before you begin. (This is critical!)</li>
			<li>Create a feature branch against the <code>dev</code> branch using the branch naming conventions defined below.</li>
			<li>Make your changes, then run automated tests to ensure no regressions were introduced.</li>
			<li>When ready, submit a pull request to begin the code review process.</li>
			<li>If your PR meets all requirements, it will be merged!</li>
		</ol>
		<p>
			The overwhelming majority of rejected pull requests come from submissions without prior discussion and submissions that do not meet the requirements for a feature or otherwise conflict with
			ongoing efforts. To avoid rejection, be a team player, don't try to be a hero!
		</p>
	</section>

	<Divider />

	<!-- Pull Requests -->
	<section class="space-y-4">
		<h2>Pull Requests</h2>
		<p>
			Per common courtesy, please reach out to contributors before you start work on new features. If you're interested in creating a new feature, create a ticket on <a
				href="https://github.com/Brain-Bones/skeleton/issues"
				target="_blank">GitHub Issues</a
			>. Doing so allows for open discourse and may help prevent redundant work. This includes but is not limited to creating new components, adding new utilities, or notable alterations to existing
			work.
		</p>
		<h3>Git Branches</h3>
		<DataTable headings={tableBranches.headings} source={tableBranches.source} />
		<h3>Branch Naming Conventions</h3>
		<p>The wildcards (*) below should contain a short and semantic description (ex: feature/new-component-name).</p>
		<DataTable headings={tableBranchConventions.headings} source={tableBranchConventions.source} />
	</section>

</div>
