<script lang="ts">
    import CodeBlock from "$lib/CodeBlock/CodeBlock.svelte";
    import Divider from "$lib/Divider/Divider.svelte";
    import Card from "$lib/Card/Card.svelte";
    import Button from "$lib/Button/Button.svelte";
</script>

<div class="space-y-8">

	<!-- Header -->
	<header class="space-y-4">
		<h1>Contribution Guidelines</h1>
        <p>Thank you for your interest in contributing to Skeleton. We ask that you please review this document in full before submitting a pull request.</p>
	</header>

    <Divider />

    <!-- Pull Requests -->
    <section class="space-y-4">
        <h2>Pull Requests</h2>
        <p>Please ask before starting work on any significant new features. If you're interested in creating a new feature, create a Feature Request ticket in Github Issues. This allows for open discourse and helps prevent time and effort being spent on features that will not be accepted. This includes but is not limited to: adding utilities, creating new components, or major alterations to existing work.</p>
        <h4>Branches</h4>
        <ul class="list-disc list-inside">
            <li>Branch names should be short and semantic.</li>
            <li>New features and components should be prefixed as <strong>feat/*</strong></li>
            <li>Bugfixes should be prefixed as <strong>bugfix/*</strong></li>
        </ul>
    </section>

    <Divider />

    <!-- Depedencies -->
    <section class="space-y-4">
        <h2>Depedencies</h2>
        <p>At the time of writing this, Skeleton requires only SvelteKit and Tailwind as depdendencies for end users. If a new component depends would require an additional third party depedency, please file a Feature Request ticket on Github Issues and review with core contributors before proceding.</p>
    </section>

    <Divider />

    <!-- Naming -->
    <section class="space-y-4">
        <h2>Structure and File Names</h2>
        <h4>Project Structure</h4>
        <ul class="list-disc list-inside">
            <li><strong>/lib</strong> - houses all functional components, actions, and other utilities.</li>
            <li><strong>/routes</strong> - the public facing documentation site.</li>
        </ul>
        <h4>File Naming Conventions</h4>
        <ul class="list-disc list-inside">
            <li>Components should have a wrapping directory name. This should be singular and camel-case (ex: /LightSwitch/...)</li>
            <li>Components should have a singular and camel-case filename (ex: .../LightSwitch.svelte)</li>
            <li>Component tests should match the component naming convention, suffixed with 'test.ts` (ex: LightSwitch.test.ts)</li>
            <li>Documentation pages should be plural, all lowercase, and seperated by dashes (ex: /routes/components/radio-groups.svelte)</li>
            <li>Documentation navigation links can be singular or plural. Whatever reads best.</li>
        </ul>
        <!-- <CodeBlock language="js" code={`...`}></CodeBlock> -->
    </section>

    <Divider />

    <!-- Component -->
    <section class="space-y-4">
        <h2>Components</h2>
        <!-- HTML Markup -->
        <h3>HTML Markup</h3>
        <p>Ensure any relevant events bubble up.</p>
        <CodeBlock language="html" code={`<button on:click on:mouseover>Skeleton</button>`}></CodeBlock>
        <p>Follow conventions set by existing components when naming slots. These should be short, semantic, and agnostic. Avoid names that are too specific, such as "icon".</p>
        <CodeBlock language="html" code={`{#if $$slots.lead}<slot name="lead" />{/if}`}></CodeBlock>
        <p>Use caution when inlining Tailwind classes that could clashes with certain themes. Use a customizable property instead.</p>
        <CodeBlock language="html" code={`<div class="bg-orange-500">Skeleton</div>`}></CodeBlock>
        <p>If you need to include all non-specified properties and attributes, use $$restProps.</p>
        <CodeBlock language="html" code={`<button {...$$restProps}>Skeleton</button>`}></CodeBlock>
        <!-- Proprties -->
        <h3>Properties</h3>
        <ul class="list-disc list-inside">
            <li>Should be a single word, all lowercase, and sematic. Match Tailwind class naming conventions whenever possible.</li>
            <li>Color proprties should follow standard CSS proprty names.</li>
            <li>Ensure Typescript type definitions are included.</li>
            <li>Pass completed Tailwind classes. Class names cannot be constructed. This does not work.</li>
            <li>Always set a relevant default value when possible.</li>
            <li>If a property is required, make sure this is documented.</li>
        </ul>
        <CodeBlock language="js" code={`
export let background: string = 'bg-primary-500'; // background color
export let color: string = 'text-primary-500'; // text color
export let rounded: string = 'rounded-xl'; // border radius
        `.trim()}></CodeBlock>
        <!-- Styles -->
        <h3>Styles</h3>
        <p>Skeleton utilizes a very structured convention for handling static and dynamic Tailwind styles for components. Please read the following very carefully.</p>
        <!-- Base Classes -->
        <h4>Base Classes</h4>
        <p>Any fixed (read: structural) Tailwind classes can be defined as follows. Note the "c" is short for <strong>classes</strong>.</p>
        <CodeBlock language="js" code={`
let cBase: string = 'bg-surface-500 p-4 rounded'; // parent element styles
let cBaseLabel: string = 'text-base'; // base label styles
        `.trim()}></CodeBlock>
        <!-- Dynamic Classes -->
        <h4>Dynamic Classes</h4>
        <p>If you expect to set one or more styles based on the current value of a property, handle this within a function as shown below.</p>
        <CodeBlock language="js" code={`
let cOutlined: string;
function setOutlined(): void {
    cOutlined ? 'border-2 border-primary-500' : 'border-none';
}
        `.trim()}></CodeBlock>
        <p>The following allows these functions to run each time a property updates. Otherwise the class logic will only be run once, on initilization.</p>
        <CodeBlock language="js" code={`
// Update on Property Change
afterUpdate(() => {
    setOutlined();
    setSomethingElse();
});
        `.trim()}></CodeBlock>
        <!-- Reactive Classes -->
        <h4>Reactive Classes</h4>
        <p>Reactive classes combined all fixed and dynamic classes. These are applied directly to each respective element.</p>
        <CodeBlock language="js" code={`
$: classes = \`\${cBase} \${cOutlined}\`;
$: classesLabel = \`\${cBaseLabel}\`;
        `.trim()}></CodeBlock>
        <p>Apply the reactive classes as follows. Use <strong>$$props.classes</strong> to pass-through for attribute classes. Note that the first class is a unique identifier for the element.</p>
        <CodeBlock language="html" code={`
<div class="card {classes} {$$props.classes}">
    <label class="card-label {classesLabel}">Card</label>
</div>
        `.trim()}></CodeBlock>
        <h3>Pitfalls to Avoid</h3>
        <ul class="list-disc list-inside">
            <li>Avoid style blocks whenever possible. Going outside of Tailwind can bloat the final stylesheet size.</li>
            <li>Avoid mixing script-defined and inlined HTML Tailwind classes. This greatly affects readability of your code.</li>
            <li>Avoid switch-case statements to create shorthand property values. These prevent the use of custom or extended Tailwind classes.</li>
            <li>Avoid embedding icons within Skeleton. We wish to keep Skeleton icon library agnostic. Instead, use a slot or consider embedding an SVG.</li>
        </ul>
    </section>

    <Divider />

    <!-- Documentation -->
    <section class="space-y-4">
        <h2>Documentation</h2>
        <p>An example component documentation page is available under <strong>/routes/components/_template.svelte</strong>.</p>
        <h4>Navigation Links</h4>
        <p>Open <strong>/routes/__layout.svelte</strong> and modify the <strong>navigation</strong> definition to include a link to your new documentation page.</p>
        <h4>Interactive vs Static Demos</h4>
        <p>While interactive demos are always preferred, static demos are welcome. Just make sure to provide a variety of examples to illustrate use cases for your component.</p>
    </section>

    <Divider />

    <!-- Linting -->
    <section class="space-y-4">
        <h2>Linting</h2>
        <p>Code linting is handled via Prettier.</p>
        <CodeBlock language="console" code={`npm run lint`}></CodeBlock>
    </section>

    <Divider />

    <!-- Running Tests -->
    <section class="space-y-4">
        <h2>Running Tests</h2>
        <p>Tests are handled via Vitest. Please ensure you write and run tests before submitting a pull request.</p>
        <CodeBlock language="console" code={`npm run test`}></CodeBlock>
    </section>

</div>