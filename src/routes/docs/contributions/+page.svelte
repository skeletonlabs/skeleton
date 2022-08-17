<script lang="ts">
	import Badge from '$lib/Badge/Badge.svelte';
	import CodeBlock from '$lib/CodeBlock/CodeBlock.svelte';
	import Divider from '$lib/Divider/Divider.svelte';
	import DataTable from '$lib/Table/DataTable.svelte';

	const tableBranches: any = {
		headings: ['Branch', 'Description', 'Accepts PRs'],
		source: [
			['<code>master</code>', 'Represents the mainline production branch. Pull requests sent to this branch will be rejected.', 'No'],
			['<code>dev</code>', 'When submitting a pull request, please <u>target this branch</u>.', 'Yes']
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
				Let us know what you want to see added. We are actively seeking feedback on the <a
					href="https://github.com/Brain-Bones/skeleton/wiki/%F0%9F%9B%A3%EF%B8%8F-The-Skeleton-Roadmap-(proposal)"
					target="_blank">roadmap</a
				>, see the
				<a href="https://github.com/Brain-Bones/skeleton/discussions/79" target="_blank">discussion thread</a>.
			</li>
			<li>Help improve documentation. Send a pull request to fix typos, grammar issues, as well as correct outdated or incorrect information.</li>
			<li>Help spread the word. Send Skeleton to your fellow developers. This helps a lot more than you think!</li>
		</ul>
	</section>

	<Divider />

	<!-- Roadmap -->
	<section class="space-y-4">
		<h2>
			Workflow
			<Badge background="bg-warning-500" class="-translate-y-2">Important</Badge>
		</h2>
		<p>Avoid going rogue and commiting changes without prior discuss. Open-source is most successful when we all work together.</p>
		<ol class="list-decimal list-inside">
			<li>
				<a href="https://github.com/Brain-Bones/skeleton/issues" target="_blank">Select an issue</a>
				or
				<a href="https://github.com/Brain-Bones/skeleton/wiki/%F0%9F%9B%A3%EF%B8%8F-The-Skeleton-Roadmap-(proposal)" target="_blank">roadmap task</a> you wish to make a contribution to.
			</li>
			<li>
				Leave a comment, join the <a href="https://github.com/Brain-Bones/skeleton/discussions/79" target="_blank">roadmap discussion</a>, or notify core contributors on Discord.
			</li>
			<li>Review with other contributors to define the requirements before you begin. This is critical!</li>
			<li>Create a branch using the conventions defined in the sections below.</li>
			<li>Make all changes, then run automated tests to ensure no regressions were introduced.</li>
			<li>When ready, submit a pull request to begin the code review process.</li>
			<li>If your PR meets all requirements it <u>will</u> be merged!</li>
		</ol>
		<p>
			The overwhelming majority of rejected pull requests come from unrequested submissions that do not meet the requirements for a feature or otherwise conflict with other ongoing efforts. To avoid
			rejection, be a team player, don't try and be a hero!
		</p>
	</section>

	<Divider />

	<!-- Pull Requests -->
	<section class="space-y-4">
		<h2>Pull Requests</h2>
		<p>
			As a common courtesy, please reach out to contributors before you start work on new features. If you're interested in creating a new feature, create a ticket on <a
				href="https://github.com/Brain-Bones/skeleton/issues"
				target="_blank">Github Issues</a
			>. This allows for open discourse and may help prevent redudant work. This includes but is not limited to: creating new components, adding new utilities, or alterations to existing work.
		</p>
		<h4>Git Branches</h4>
		<DataTable headings={tableBranches.headings} source={tableBranches.source} />
		<h4>Branch Naming Conventions</h4>
		<p>Branch wildcard (*) values should contain a short and semantic description (ex: feature/new-component-name).</p>
		<DataTable headings={tableBranchConventions.headings} source={tableBranchConventions.source} />
	</section>

	<Divider />

	<!-- Dependencies -->
	<section class="space-y-4">
		<h2>Dependencies</h2>
		<p>
			Skeleton aims to keep depedencies to as few as possible to keep the project lean. Please be leery of introducing new dependencies. However, don't be afraid to discuss additions you would like to
			propose with core contributors before proceeding. We just want what's best for end users!
		</p>
	</section>

	<Divider />

	<!-- Conventions -->
	<section class="space-y-4">
		<h2>Conventions</h2>
		<h4>Project Structure</h4>
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
				Documentation pages represent a URL and should be plural, all lowercase, and separated by dashes (ex: <code>/routes/components/radio-groups.svelte</code>)
			</li>
			<li>
				Documentation anchor labels should be capitalized and and plural form (ex: <code>Radio Groups</code>)
			</li>
		</ul>
	</section>

	<Divider />

	<!-- Component -->
	<section class="space-y-4">
		<h2>Component Markup</h2>
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
<div class="bg-orange-500">Skeleton</div> ❌
<div class="bg-accent-500">Skeleton</div> ✅ 
        `.trim()}
		/>
		<p>
			If you need to include miscellaneous attributes that were not defined as props, use Svelte's <code>$$restProps</code>. Be careful though, this can overwrite the element's
			<code>$$props.class</code>
			attribute. To avoid this, delete the <code>class</code> key from <code>$$restProps</code>. The function provided below can handle this on both init and after any form of attribute updates.
		</p>
		<CodeBlock
			language="js"
			code={`
function prunedRestProps(): any {
    delete $$restProps.class;
    return $$restProps;
}`.trim()}
		/>
		<CodeBlock language="html" code={`<button class="... {$$props.class}" {...prunedRestProps()}>Skeleton</button>`} />
	</section>

	<Divider />

	<!-- Properties -->
	<section class="space-y-4">
		<h2>Component Props</h2>
		<p>Follow these guidelines when creating or adding new component props.</p>
		<ul class="list-disc list-inside">
			<li>Should be a single word, all lowercase, and semantic. Match Tailwind class naming conventions whenever possible.</li>
			<li>If you need multiple words, use camel-casing.</li>
			<li>Color props should follow standard CSS style names.</li>
			<li>Ensure Typescript type definitions are included.</li>
			<li>Always pass full Tailwind classes. Class names cannot be constructed dynamically. Tailwind does not support this.</li>
			<li>Make sure you set a relevant default value when possible.</li>
			<li>If a property is added, please ensure you update the component documentation.</li>
		</ul>
		<CodeBlock
			language="typescript"
			code={`
export let background: string = 'bg-primary-500'; // background color
export let color: string = 'text-primary-500'; // text color
export let rounded: string = 'rounded-xl'; // border radius
        `.trim()}
		/>
	</section>

	<Divider />

	<!-- Styles -->
	<section class="space-y-4">
		<h2>Component Styling</h2>
		<p>
			Skeleton utilizes a strict paradigm for handling static and dynamic Tailwind styles for components. This is accomplished by passing Tailwind classes to the component as props, as well as
			defining base structural classes within the component's script tag. While this may feel odd at first, you'll find it works really well in execution.
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
        `.trim()}
		/>
		<!-- Dynamic Classes -->
		<h3>Dynamic Classes</h3>
		<p>If you expect to set one or more styles based on the current value of a property, handle this within a function as shown below.</p>
		<CodeBlock
			language="typescript"
			code={`
export let outlined: boolean;
let cOutlined: string = '';
function setOutlined(): void {
    cOutlined = outlined ? 'border-2 border-primary-500' : 'border-none';
}
        `.trim()}
		/>
		<p>The following allows these functions to run each time a property updates. Otherwise, the class logic will only be run once, on initialization.</p>
		<CodeBlock
			language="typescript"
			code={`
// Update on Property Change
afterUpdate(() => {
    setOutlined();
    setSomethingElse();
});
        `.trim()}
		/>
		<!-- Reactive Classes -->
		<h4>Reactive Classes</h4>
		<p>Reactive classes combine all base and dynamic classes. These are applied directly to each respective element.</p>
		<CodeBlock
			language="typescript"
			code={`
$: classesCard = \`\${cBase} \${cOutlined}\`; // parent element
$: classesLabel = \`\${cBaseLabel}\`; // child element
        `.trim()}
		/>
		<p>
			Apply the reactive classes as follows. Make sure to also include <code>$$props.classes</code> as a pass-through for additional classes. Note that the first class acts as an identifier for the element,
			which is useful for testing and DOM manipulation.
		</p>
		<CodeBlock
			language="html"
			code={`
<div class="card {classesCard} {$$props.classes||''}">
    <label class="card-label {classesLabel}">My Label</label>
</div>
        `.trim()}
		/>
	</section>

	<Divider />

	<!-- Pitfalls -->
	<section class="space-y-4">
		<h2>Component Pitfalls</h2>
		<p>Below are a few pitfalls we've encountered when creating Skeleton. Do your best to avoid these whenever possible.</p>
		<ul class="list-disc list-inside">
			<li>
				As a best practice for Tailwind, avoid component <code>style</code> blocks. This can increase the final stylesheet bundle size.
			</li>
			<li>Do not mix script-defined and inline Tailwind classes. Doing so can have negative impact on the readability of the code.</li>
			<li>Avoid switch-case statements to create shorthand property values (ex: sm, md, lg). This limits prop-based customization.</li>
			<li>Keep Skeleton icon library agnostic. Use embedded SVGs or unicode instead. Slots and props are also great for customization.</li>
		</ul>
	</section>

	<Divider />

	<!-- Documentation -->
	<section class="space-y-4">
		<h2>Updating Documentation</h2>
		<p>
			A boilerplate template for documentation pages is available under <code>/routes/components/_template.svelte</code>.
		</p>
		<h4>Update Site Navigation</h4>
		<p>
			Open <code>/routes/__layout.svelte</code> and modify the contents of <code>navigation</code> definition to link to any documentation pages you add.
		</p>
		<h4>Interactive vs Static Demos</h4>
		<p>
			While interactive demos are preferred, static demos are fine. Just make sure to provide a variety of examples to illustrate potential use cases and showcase the feature set of the component. If
			you need help adding an interactive demo, please contact any core contributor on the team.
		</p>
	</section>

	<Divider />

	<!-- Linting -->
	<section class="space-y-4">
		<h2>Linting</h2>
		<p>Code linting is handled via <a href="https://prettier.io/" target="_blank">Prettier</a>.</p>
		<CodeBlock language="console" code={`npm run lint`} />
	</section>

	<Divider />

	<!-- Running Tests -->
	<section class="space-y-4">
		<h2>Running Tests</h2>
		<p>
			Tests are handled via <a href="https://vitest.dev/" target="_blank">Vitest</a>, which uses similar conventions and syntax to Jest. Please ensure you write and run tests before submitting a pull
			request. Bare minimum, these tests should test components with the minimal and maximum available prop changes.
		</p>
		<CodeBlock language="console" code={`npm run test`} />
	</section>
</div>
