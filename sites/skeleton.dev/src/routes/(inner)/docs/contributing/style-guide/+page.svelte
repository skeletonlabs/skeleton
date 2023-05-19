<script lang="ts">
	import LayoutPage from '$lib/layouts/LayoutPage/LayoutPage.svelte';
	import { CodeBlock, Table, type TableSource } from '@skeletonlabs/skeleton';

	// Tables
	const tableBranchNaming: TableSource = {
		head: ['Prefix', 'Description'],
		body: [
			['<code class="code">docs/*</code>', 'Updates to the documentation pages or text copy.'],
			['<code class="code">feat/*</code>', 'New features, components, or far-reaching updates.'],
			['<code class="code">chore/*</code>', 'Simple and localized updates.'],
			['<code class="code">bugfix/*</code>', 'Commits that address or fix issues.']
		]
	};
</script>

<LayoutPage>
	<!-- Breadcrumbs -->
	<ol class="breadcrumb">
		<li class="crumb"><a class="anchor" href="/docs/contributing">Contributing</a></li>
		<li class="crumb-separator" aria-hidden>&rsaquo;</li>
		<li>Style Guide</li>
	</ol>

	<!-- Header -->
	<header class="space-y-4">
		<h1 class="h1">Style Guide</h1>
		<p>If you wish to contribute to Skeleton, please review our opinionated code style guide below.</p>
	</header>

	<hr />

	<!-- Branches -->
	<section class="space-y-4">
		<h2 class="h2">Feature Branches</h2>
		<Table source={tableBranchNaming} />
		<p>Each wildcard (*) should be replaced with short and semantic descriptions using kebab-case.</p>
		<pre class="pre">feat/my-new-component-name</pre>
	</section>

	<!-- File Names -->
	<section class="space-y-4">
		<h2 class="h2">File Names</h2>
		<ul class="list-disc list-outside ml-4 space-y-1">
			<li>Feature directories should be singular and title case: <code class="code">../LightSwitch/..</code></li>
			<li>Components should be singular and title case: <code class="code">LightSwitch.svelte</code></li>
			<li>Svelte Actions should be singular, lowercase, and use Typescript: <code class="code">clipboard.ts</code></li>
			<li>Tailwind Element stylesheets should be plural and lowercase: <code class="code">buttons.css</code></li>
			<li>Documentation should be lowercase and use dashes: <code class="code">/routes/components/radio-groups/+page.svelte</code></li>
			<li>
				Tests should be suffixed with <code class="code">*.test.ts</code>, matching feature conventions:
				<code class="code">LightSwitch.test.ts</code>
			</li>
		</ul>
	</section>

	<!-- Conventions -->
	<section class="space-y-4">
		<h2 class="h2">Conventions</h2>
		<p>
			Ensure relevant events bubble via <a
				class="anchor"
				href="https://svelte.dev/tutorial/dom-event-forwarding"
				target="_blank"
				rel="noreferrer">event forwarding</a
			>.
		</p>
		<CodeBlock language="html" code={`<button on:click on:mouseover>Skeleton</button>`} />
		<p>
			Slot names should be short, semantic, and agnostic. Avoid names that are too specific, such as <code class="code">name="icon"</code>.
		</p>
		<CodeBlock language="html" code={`{#if $$slots.lead}<slot name="lead" />{/if}`} />
		<p>Use adaptive theme colors for component styling.</p>
		<CodeBlock
			language="html"
			code={`
❌ <div class="bg-orange-500">Skeleton</div>
✅ <div class="bg-secondary-500">Skeleton</div> 
		`.trim()}
		/>
		<!-- prettier-ignore -->
		<p>
			If you need to include miscellaneous attributes that were not defined as properties, use Svelte's <code class="code">$$restProps</code>. Be careful
			though, this can overwrite the element's <code class="code">$$props.class</code> attribute. To avoid this, delete the <code class="code">class</code> key from <code class="code">$$restProps</code>. We recommend introducing a <code class="code">prunedRestProps</code> function as shown below.
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

	<hr />

	<!-- Properties -->
	<section class="space-y-4">
		<h2 class="h2">Component Props</h2>
		<CodeBlock
			language="ts"
			code={`
export let flavor = 'Chocolate';
export let visible = false;
export let parameters: Record<string, string> = { foo: 'bar' };
		`}
		/>
		<!-- prettier-ignore -->
		<ul class="list-disc list-outside ml-4 space-y-1">
			<li>Each prop should be a single word, all lowercase, and semantic. Match Tailwind class names if possible.</li>
			<li>If you need multiple words, use camel-casing (ex: <code class="code">ringWidth</code>).</li>
			<li>Typescript will automatically handle primitive types that can be trivially inferred, such as <em>string</em>, <em>number</em>, or <em>boolean</em>.</li>
			<li>Make sure to set relevant default values when possible.</li>
			<li>When an existing prop is modified, consider documenting an example if relevant.</li>
		</ul>
		<h3 class="h3">Tailwind Class Props</h3>
		<p>
			For props that pass one or more CSS utility classes, make sure to import and append the <code class="code">CSSClasses</code> type.
			This resolve to a type of <code class="code">string</code> and allows our build process to identify props that support Tailwind Intellisense.
		</p>
		<CodeBlock language="typescript" code={`import type { CssClasses } from '../..';`} />
		<CodeBlock
			language="typescript"
			code={`
export let background: CssClasses = 'bg-primary-500'; // background color
export let color: CssClasses = 'text-primary-500'; // text color
export let rounded: CssClasses = 'rounded-xl'; // border radius
		`}
		/>
		<ul class="list-disc list-outside ml-4 space-y-1">
			<li>Color props should follow standard CSS style conventions (ex: <code class="code">color</code> for text color).</li>
			<li>
				Never pass class props as arrays or objects, strings are always preferred (ex: <code class="code">border border-primary-500</code>).
			</li>
			<li>
				Always pass the <u>entire</u> Tailwind class name. Tailwind does not support
				<a class="anchor" href="https://tailwindcss.com/docs/content-configuration#dynamic-class-names" target="_blank" rel="noreferrer"
					>dynamic class names</a
				>.
			</li>
		</ul>
	</section>

	<hr />

	<!-- Styles -->
	<section class="space-y-4">
		<h2 class="h2">CSS Styling Conventions</h2>
		<p>
			Skeleton utilizes an opinionated set of conventions for defining structural and component props for CSS utility classes within
			components. Please review existing components for examples of this in practice.
		</p>
		<!-- Base Classes -->
		<h3 class="h3">Base Classes</h3>
		<p>The default classses for a component template element. Note the "c" is short for <strong>classes</strong>.</p>
		<CodeBlock
			language="ts"
			code={`
let cBase = 'bg-surface-500 p-4 rounded'; // parent element styles
let cLabel = 'text-base'; // child element label styles
		`}
		/>
		<!-- Dynamic Classes -->
		<h3 class="h3">Dynamic Classes</h3>
		<p>To dynamically modify classes based on a variable or prop, use a reactive statement as follows.</p>
		<CodeBlock
			language="ts"
			code={`
// Prop for outlined state
export let outlined = false;

// Create a reactive property that uses a tertiary statement
$: classesOutlined = outlined ? 'border-2 border-primary-500' : 'border-none';
		`}
		/>
		<!-- Reactive Classes -->
		<h3 class="h3">Reactive Classes</h3>
		<p>
			We use the following pattern to combine base and dynamic classes. Note the parent element classes includes <code class="code"
				>$$props.classes</code
			>
			to enable arbitrary classes passed by the user via <code class="code">class="my-custom-class"</code>.
		</p>
		<CodeBlock
			language="ts"
			code={`
$: classesTab = \`\${cBase} \${classesOutlined} \${{$$props.classes ?? ''}}\`; // parent element
$: classesLabel = \`\${cBaseLabel}\`; // child element
		`}
		/>
		<!-- Applying Classes -->
		<h3 class="h3">Applying Classes</h3>
		<ul class="list-disc list-outside ml-4 space-y-1">
			<li>
				The first class should be an "id" class, which semantically describes the element for global overrides (ex: <code class="code"
					>tab</code
				>)
			</li>
			<li>Then followed immediately by the reactive class set (ex: <code class="code">classesTab</code>).</li>
		</ul>
		<CodeBlock
			language="html"
			code={`
<div class="tab {classesTab}">
	<span class="tab-label {classesLabel}">Label</span>
</div>
		`}
		/>
	</section>

	<hr />

	<!-- Pitfalls -->
	<section class="space-y-4">
		<h2 class="h2">Pitfalls</h2>
		<p>Below are a few pitfalls we've encountered when creating Skeleton. Do your best to avoid these whenever possible.</p>
		<!-- prettier-ignore -->
		<ul class="list-disc list-outside ml-4 space-y-1">
			<li>Never construct utility class names, <a class="anchor" href="https://tailwindcss.com/docs/content-configuration#dynamic-class-names" target="_blank" rel="noreferrer">Tailwind does not support this feature</a>.</li>
			<li>
				Avoid <code class="code">style</code> blocks and <code class="code">@apply</code> in component files. This will bloat the stylesheet bundle size.
			</li>
			<li>Do not mix script-defined and inline Tailwind classes. Doing so can have a negative impact on the readability of the code.</li>
			<li>Avoid switch-case statements to create shorthand property values (ex: sm, md, lg). This restricts customization.</li>
			<li>Keep Skeleton icon library agnostic. Embed SVGs or unicode instead, which can be passed via a slot.</li>
		</ul>
	</section>
</LayoutPage>
