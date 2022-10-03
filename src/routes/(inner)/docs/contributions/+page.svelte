<script lang="ts">
	import { DataTable, Divider } from '@brainandbones/skeleton';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

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
	const tableProjectStructure: any = {
		headings: ['Path', 'Description'],
		source: [
			['<code>/src/lib</code>', 'Houses all functional components, actions, and other utilities that will be distributed with the package'],
			['<code>/src/routes</code>', 'House documentation pages for the public-facing website, such as this guide.']
		]
	};
</script>

<div class="space-y-8">
	<!-- Header -->
	<header class="space-y-4">
		<h1>Contributions</h1>
		<p>Thank you for your interest in contributing to Skeleton. We ask that you please review this document in full before submitting your first pull request.</p>
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
		<h4>Git Branches</h4>
		<DataTable headings={tableBranches.headings} source={tableBranches.source} />
		<h4>Branch Naming Conventions</h4>
		<p>The wildcards (*) below should contain a short and semantic description (ex: feature/new-component-name).</p>
		<DataTable headings={tableBranchConventions.headings} source={tableBranchConventions.source} />
	</section>

	<Divider />

	<!-- Dependencies -->
	<section class="space-y-4">
		<h2>Dependencies</h2>
		<p>
			Skeleton aims to keep dependencies as lean as possible. Please be leery of introducing more. If you have a valid reason to add one, please discuss with core contributors before proceeding. This
			can help avoid conflicts and greatly benefits end users!
		</p>
	</section>

	<Divider />

	<!-- Conventions -->
	<section class="space-y-4">
		<h2>Project Structure</h2>
		<DataTable headings={tableProjectStructure.headings} source={tableProjectStructure.source} />
		<h4>Component Naming Conventions</h4>
		<ul class="list-disc list-inside">
			<li>
				Components and their wrapping directory should be singular and title-case (ex: <code>/lib/LightSwitch/LightSwitch.svelte</code>)
			</li>
			<li>
				Component tests should match the component naming convention, suffixed with <code>'*.test.ts`</code>
				(ex: <code>LightSwitch.test.ts</code>)
			</li>
			<li>
				Documentation pages represent a URL and should be plural, all lowercase, and separated by dashes (ex: <code>/routes/components/radio-groups/+page.svelte</code>)
			</li>
			<li>
				Documentation anchor labels should be capitalized and plural form (ex: <code>Radio Groups</code>)
			</li>
		</ul>
	</section>

	<Divider />

	<!-- Component -->
	<section class="space-y-4">
		<h2>Component Markup Conventions</h2>
		<p>
			Ensure any relevant events bubble via <a href="https://svelte.dev/tutorial/dom-event-forwarding" target="_blank">event forwarding</a>.
		</p>
		<CodeBlock language="html" code={`<button on:click on:mouseover>Skeleton</button>`} />
		<p>
			Follow conventions set by existing components when naming slots. These should be short, semantic, and agnostic. Avoid names that are too specific, such as <code>name="icon"</code>.
		</p>
		<CodeBlock language="html" code={`{#if $$slots.lead}<slot name="lead" />{/if}`} />
		<p>Use caution when inlining Tailwind color classes that would clash with custom themes. Consider using a prop for customization.</p>
		<CodeBlock
			language="html"
			code={`
❌ <div class="bg-orange-500">Skeleton</div>
✅ <div class="bg-accent-500">Skeleton</div> 
        `.trim()}
		/>
		<p>
			If you need to include miscellaneous attributes that were not defined as props, use Svelte's <code>$$restProps</code>. Be careful though, this can overwrite the element's
			<code>$$props.class</code>
			attribute. To avoid this, delete the <code>class</code> key from <code>$$restProps</code>. The function provided below can handle this on both in it and after any form of attribute updates.
		</p>
		<CodeBlock
			language="js"
			code={`
function prunedRestProps(): any {
    delete $$restProps.class;
    return $$restProps;
}`}
		/>
		<CodeBlock language="html" code={`<button class="... {$$props.class ?? ''}" {...prunedRestProps()}>Skeleton</button>`} />
	</section>

	<Divider />

	<!-- Properties -->
	<section class="space-y-4">
		<h2>Component Props</h2>
		<p>Follow these guidelines when creating or adding new component props.</p>
		<ul class="list-disc list-inside">
			<li>Each prop should be a single word, all lowercase, and semantic. Match Tailwind class naming conventions whenever possible.</li>
			<li>If you need multiple words, use camel-casing (ex: ringWidth).</li>
			<li>Color props should follow standard CSS style names (ex: <code>color</code> for text color).</li>
			<li>Avoid passing a set of styles using arrays or objects. String formats work better (ex: <code>border border-primary-500</code>).</li>
			<li>Ensure Typescript types are provided and set relevant default values when possible.</li>
			<li>Always pass the full Tailwind class name. Tailwind does not support contructed class names.</li>
			<li>If a new prop is added, update the documentation. Otherwise users won't know about it!</li>
		</ul>
		<p>Here's a few examples:</p>
		<CodeBlock
			language="typescript"
			code={`
export let background: string = 'bg-primary-500'; // background color
export let color: string = 'text-primary-500'; // text color
export let rounded: string = 'rounded-xl'; // border radius
export let visible: boolean = false;
        `}
		/>
	</section>

	<Divider />

	<!-- Styles -->
	<section class="space-y-4">
		<h2>Component Styling</h2>
		<p>
			Skeleton utilizes a very specific paradigm for handling static and dynamic Tailwind styles for components. This is accomplished by passing Tailwind classes to the component as props, as well as
			by defining base structural classes within the component's script tag. While this may feel odd at first, you will find it works really well in execution.
		</p>
		<!-- Base Classes -->
		<h3>Base Classes</h3>
		<p>
			Any core or structural Tailwind classes can be defined as follows. Note the "c" is short for <strong>classes</strong>.
		</p>
		<CodeBlock
			language="typescript"
			code={`
let cBaseElement: string = 'bg-surface-500 p-4 rounded'; // parent element styles
let cBaseLabel: string = 'text-base'; // base label styles
        `}
		/>
		<!-- Dynamic Classes -->
		<h3>Dynamic Classes</h3>
		<p>If you expect to set one or more styles based on the current value of a property, handle this within a function as shown below.</p>
		<CodeBlock
			language="typescript"
			code={`
// Prop for outlined state
export let outlined: boolean;

// The base classes for outline styles
let cOutlined: string = '';

// Use a function to conditionally update the base classes 
function setOutlined(): void {
    cOutlined = outlined ? 'border-2 border-primary-500' : 'border-none';
}
        `}
		/>
		<p>The following allows these functions to run each time a property updates. Otherwise, the class logic will only be run once on initialization.</p>
		<CodeBlock
			language="typescript"
			code={`
// Update on Property Change
afterUpdate(() => {
    setOutlined();
    setSomethingElse();
});
        `}
		/>
		<!-- Reactive Classes -->
		<h3>Reactive Classes</h3>
		<p>Reactive classes combine all base and dynamic classes. These are applied directly to each respective element.</p>
		<CodeBlock
			language="typescript"
			code={`
$: classesCard = \`\${cBase} \${cOutlined}\`; // parent element
$: classesLabel = \`\${cBaseLabel}\`; // child element
        `}
		/>
		<p>
			Apply the reactive classes as follows. Make sure to include <code>$$props.classes</code> as a pass-through for additional classes. Note that the first class acts as an identifier for the element,
			which is useful for testing and DOM manipulation.
		</p>
		<CodeBlock
			language="html"
			code={`
<div class="card {classesCard} {$$props.classes ?? ''}">
    <label class="card-label {classesLabel}">My Label</label>
</div>
        `}
		/>
		<p>Optionally, we can use reactive classes to simplify the dynamic classes example above.</p>
		<CodeBlock
			language="ts"
			code={`
export let outlined: boolean;

$: classesOutlined = outlined ? 'border-2 border-primary-500' : 'border-none';
$: classesCard = \`\${cBase} \${classesOutlined}\`;
		`}
		/>
		<p>This prevents the need for the <code>afterUpdate()</code> method.</p>
	</section>

	<Divider />

	<!-- Pitfalls -->
	<section class="space-y-4">
		<h2>Component Pitfalls</h2>
		<p>Below are a few pitfalls we've encountered when creating Skeleton. Do your best to avoid these whenever possible.</p>
		<ul class="list-disc list-inside">
			<li>
				As a best practice for Tailwind, avoid using <code>style</code> blocks and <code>@apply</code> in component files. This can increase the final stylesheet bundle size.
			</li>
			<li>Do not mix script-defined and inline Tailwind classes. Doing so can have a negative impact on the readability of the code.</li>
			<li>Avoid switch-case statements to create shorthand property values (ex: sm, md, lg). This can limit prop-based customization.</li>
			<li>Keep Skeleton icon library agnostic. Embed SVGs or unicode instead. Consider using a component slot if an icon is required.</li>
		</ul>
	</section>

	<Divider />

	<!-- Documentation -->
	<section class="space-y-4">
		<h2>Documentation</h2>
		<p>
			A boilerplate template for adding new documentation pages is available under <code>/src/routes/components/(inner)/template/+page.svelte</code>.
		</p>
		<h4>Update Site Navigation</h4>
		<p>
			Open <code>/src/lib/_documentation/SkeletonNavigation/links.ts</code> and document the new links under the appropriate section. In general, simple components go under
			<em>Components</em>, while Svelte actions and complicated features go under <em>Utilities</em>.
		</p>
		<h4>Interactive vs Static Demos</h4>
		<p>
			While interactive demos are preferred, static demos are welcome too. Make sure to provide a variety of examples to illustrate potential use cases and showcase the feature set of the component.
			If you require assistance in setting up an interactive demo, please contact any core contributor on the team. We're happy to help!
		</p>
	</section>

	<Divider />

	<!-- Code Formatting -->
	<section class="space-y-4">
		<h2>Code Linting &amp; Formatting</h2>
		<p>This is is handled via <a href="https://prettier.io/" target="_blank">Prettier</a>. To check for linting issues, run:</p>
		<CodeBlock language="console" code={`npm run lint`} />
		<p>To automatically apply formatting, run:</p>
		<CodeBlock language="console" code={`npm run format`} />
	</section>

	<Divider />

	<!-- Automated Tests -->
	<section class="space-y-4">
		<h2>Automated Tests</h2>
		<p>
			Tests are handled via <a href="https://vitest.dev/" target="_blank">Vitest</a>, which uses similar conventions and syntax to Jest. Please ensure you write and run tests before submitting a pull
			request. At a bare minimum, these tests should test components with the minimum and maximum props. If you're unfamiliar with automated testing, contact a core contributor for help.
		</p>
		<CodeBlock language="console" code={`npm run test`} />
	</section>
</div>
