<script lang="ts">
	import LayoutPage from '$docs/layouts/LayoutPage/LayoutPage.svelte';
	import { CodeBlock } from '@skeletonlabs/skeleton';
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

	<!-- File Names -->
	<section class="space-y-4">
		<h2 class="h2">File Name Conventions</h2>
		<ul class="list-disc list-outside ml-4 space-y-1">
			<li>Feature directories should be singular and title case: <code class="code">../LightSwitch/..</code></li>
			<li>Components should be singular and title case: <code class="code">LightSwitch.svelte</code></li>
			<li>Svelte Actions should be singular, lowercase, and use Typescript: <code class="code">clipboard.ts</code></li>
			<li>Tailwind Element stylesheets should be plural and lowercase: <code class="code">buttons.css</code></li>
			<li>Documentation should be lowercase and use dashes: <code class="code">/routes/components/radio-groups/+page.svelte</code></li>
			<li>
				Tests should be suffixed with <code class="code">*.test.ts</code> and match the feature naming convention:
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
			Follow conventions set by existing components when naming slots. These should be short, semantic, and agnostic. Avoid names that are
			too specific, such as <code class="code">name="icon"</code>.
		</p>
		<CodeBlock language="html" code={`{#if $$slots.lead}<slot name="lead" />{/if}`} />
		<p>
			Use caution when inlining Tailwind color classes that would clash with custom themes. Ideally use a custom component property to allow
			for customization.
		</p>
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
			though, this can overwrite the element's <code class="code">$$props.class</code> attribute. To avoid this, delete the <code class="code">class</code> key from <code class="code">$$restProps</code>. The function provided below can handle this on both init and after any form of attribute updates.
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
		<h2 class="h2">Property Conventions</h2>
		<p>Follow these guidelines when creating or adding new component props.</p>
		<ul class="list-disc list-outside ml-4 space-y-1">
			<li>Each prop should be a single word, all lowercase, and semantic. Match Tailwind class naming conventions whenever possible.</li>
			<li>Color props should follow standard CSS style conventions (ex: <code class="code">color</code> for text color).</li>
			<li>If you need multiple words, use camel-casing (ex: <code class="code">ringWidth</code>).</li>
			<li>Never pass class props as arrays or objects. Strings work better (ex: <code class="code">border border-primary-500</code>).</li>
			<li>Always pass the full Tailwind class name. <u>Tailwind does not support constructed class names</u>.</li>
			<li>Ensure Typescript types are provided and set relevant default values when possible.</li>
			<li>If a new prop is added or modified then please consider updating the documentation with an example if necessary.</li>
		</ul>
		<p>Here's a few examples:</p>
		<CodeBlock
			language="ts"
			code={`
export let background: string = 'bg-primary-500'; // background color
export let color: string = 'text-primary-500'; // text color
export let rounded: string = 'rounded-xl'; // border radius
export let visible: boolean = false;
		`}
		/>
	</section>

	<hr />

	<!-- Styles -->
	<section class="space-y-4">
		<h2 class="h2">CSS Styling Conventions</h2>
		<p>
			Skeleton utilizes a specific paradigm for handling static and dynamic Tailwind styles for components. This is accomplished by passing
			Tailwind classes to the component as props, as well as by defining base structural classes within the component's script tag. While
			this may feel odd at first, you will find it works really well in execution.
		</p>
		<!-- Base Classes -->
		<h3 class="h3">Base Classes</h3>
		<p>
			Any core or structural Tailwind classes can be defined as follows. Note the "c" is short for <strong>classes</strong>.
		</p>
		<CodeBlock
			language="ts"
			code={`
let cBase: string = 'bg-surface-500 p-4 rounded'; // parent element styles
let cLabel: string = 'text-base'; // child element label styles
		`}
		/>
		<!-- Dynamic Classes -->
		<h3 class="h3">Dynamic Classes</h3>
		<p>
			If you expect to set one or more styles based on the current value of a property, handle this within a reactive statement as shown
			below.
		</p>
		<CodeBlock
			language="ts"
			code={`
// Prop for outlined state
export let outlined: boolean;

// Create a reactive property that uses a tertiary statement
$: classesOutlined = outlined ? 'border-2 border-primary-500' : 'border-none';
		`}
		/>
		<!-- Reactive Classes -->
		<h3 class="h3">Reactive Classes</h3>
		<p>Reactive classes combine all base and dynamic classes. These are applied directly to each respective element.</p>
		<CodeBlock
			language="ts"
			code={`
$: classesTab = \`\${cBase} \${classesOutlined}\`; // parent element
$: classesLabel = \`\${cBaseLabel}\`; // child element
		`}
		/>
		<p>Classes are applied in three ways:</p>
		<ol class="list-decimal list-outside ml-4 space-y-1">
			<li>The first class should be an "identifier" class, providing a selection target for global stylesheet overrides.</li>
			<li>The combined set of reactive class values, which can mix base and dynamic classes.</li>
			<li>For parent elements, add <code class="code">$$props.classes</code> to supply additional arbitrary classes.</li>
		</ol>
		<CodeBlock
			language="html"
			code={`
<div class="tab {classesTab} {$$props.classes ?? ''}">
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
				Avoid <code class="code">style</code> blocks and <code class="code">@apply</code> in component files. This can increase the final stylesheet bundle size.
			</li>
			<li>Do not mix script-defined and inline Tailwind classes. Doing so can have a negative impact on the readability of the code.</li>
			<li>Avoid switch-case statements to create shorthand property values (ex: sm, md, lg). This limits customization.</li>
			<li>Keep Skeleton icon library agnostic. Embed SVGs or unicode instead. Implement a slot with a default so that the user can override if necessary.</li>
		</ul>
	</section>
</LayoutPage>
