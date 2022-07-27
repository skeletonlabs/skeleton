<script lang="ts">
    import CodeBlock from "$lib/CodeBlock/CodeBlock.svelte";
    import Divider from "$lib/Divider/Divider.svelte";
</script>

<div class="space-y-8">

	<!-- Header -->
	<header class="space-y-4">
		<h1>Contributions</h1>
        <p>Thank you for your interest in contributing to Skeleton. We ask that you please review this document in full before submitting your first pull request.</p>
	</header>

    <Divider />

    <!-- Pull Requests -->
    <section class="space-y-4">
        <h2>Pull Requests</h2>
        <p>As a common courtesy, please ask before starting work on any significant new features. If you're interested in creating a new feature, create a feature request ticket in <a href="https://github.com/Brain-Bones/skeleton/issues" target="_blank">Github Issues</a>. This allows for open discourse and may help prevent redudant work. This includes but is not limited to: creating new components, adding new utility features, or major alterations to existing work.</p>
        <h4>Branch Naming Conventions</h4>
        <ul class="list-disc list-inside">
            <li>Branch names should be short and semantic.</li>
            <li>Documentation updates should be prefixed as <strong>docs/*</strong></li>
            <li>New features and components should be prefixed as <strong>feat/*</strong></li>
            <li>Bugfixes should be prefixed as <strong>bugfix/*</strong></li>
            <li>New or improved test cases should be prefixed as <strong>tests/*</strong></li>
        </ul>
    </section>

    <Divider />

    <!-- Depedencies -->
    <section class="space-y-4">
        <h2>Depedencies</h2>
        <p>Skeleton currently requires only Svelte, Sveltekit, and Tailwind as depdendencies for end users. The goal is to keep the project as lean as possible. Please been leery of introducing new depedencies. However, don't be afraid to discuss proposed additions with contributors before proceeding. We just want what's best for users!</p>
    </section>

    <Divider />

    <!-- Naming -->
    <section class="space-y-4">
        <h2>Structure and Conventions</h2>
        <h4>Project Structure</h4>
        <ul class="list-disc list-inside">
            <li><strong>/lib</strong> - houses all functional components, actions, and other utilities.</li>
            <li><strong>/routes</strong> - the public facing documentation site.</li>
        </ul>
        <h4>Naming Conventions</h4>
        <ul class="list-disc list-inside">
            <li>Components should be wrapped in a matching directory. This should be singular and camel-case (ex: /LightSwitch/...)</li>
            <li>Components should have a singular and camel-case filename (ex: .../LightSwitch.svelte)</li>
            <li>Component tests should match the component naming convention, suffixed with '*.test.ts` (ex: LightSwitch.test.ts)</li>
            <li>Documentation pages should be plural, all lowercase, and seperated by dashes (ex: /routes/components/radio-groups.svelte)</li>
            <li>Documentation nav links should match the routing convention, with the plural form of the component (ex: Radio Groups)</li>
        </ul>
        <!-- <CodeBlock language="js" code={`...`}></CodeBlock> -->
    </section>

    <Divider />

    <!-- Component -->
    <section class="space-y-4">
        <h2>Component Markup</h2>
        <p>Ensure any relevant events bubble via <a href="https://svelte.dev/tutorial/dom-event-forwarding" target="_blank">event forwarding</a>.</p>
        <CodeBlock language="html" code={`<button on:click on:mouseover>Skeleton</button>`}></CodeBlock>
        <p>Follow conventions set by existing components when naming slots. These should be short, semantic, and agnostic. Avoid names that are too specific, such as "icon".</p>
        <CodeBlock language="html" code={`{#if $$slots.lead}<slot name="lead" />{/if}`}></CodeBlock>
        <p>Use caution when inlining Tailwind classes that could clash with certain themes. Use a customizable property instead.</p>
        <CodeBlock language="html" code={`<!-- Avoid This -->\n<div class="bg-orange-500">Skeleton</div> /`}></CodeBlock>
        <p>If you need to include all non-specified properties and attributes, use Svelte's $$restProps.</p>
        <CodeBlock language="html" code={`<button {...$$restProps}>Skeleton</button>`}></CodeBlock>
    </section>

    <Divider />
    
    <!-- Proprties -->
    <section class="space-y-4">
        <h2>Component Properties</h2>
        <p>Follow these guidelines when creating component properties.</p>
        <ul class="list-disc list-inside">
            <li>Should be a single word, all lowercase, and sematic. Match Tailwind class naming conventions whenever possible.</li>
            <li>Color properties should follow standard CSS property names.</li>
            <li>Ensure Typescript type definitions are included.</li>
            <li>Always pass full Tailwind classes. Class names cannot be constructed dynamically. Tailwind does not support this.</li>
            <li>Make sure you set a relevant default value when possible.</li>
            <li>If a property is required, make sure this noted in the component documentation.</li>
        </ul>
        <CodeBlock language="typescript" code={`
export let background: string = 'bg-primary-500'; // background color
export let color: string = 'text-primary-500'; // text color
export let rounded: string = 'rounded-xl'; // border radius
        `.trim()}></CodeBlock>
    </section>

    <Divider />

    <!-- Styles -->
    <section class="space-y-4">
        <h2>Component Styling</h2>
        <p>Skeleton utilizes a structured convention for handling static and dynamic Tailwind styles for components. This is accomplished by passing Tailwind classes to the component as properties, as well as defining base structural classes within the script tag. While this may feel odd at first, it works really well in execution.</p>
        <!-- Base Classes -->
        <h4>Base Classes</h4>
        <p>Any core or structural Tailwind classes can be defined as follows. Note the "c" is short for <strong>classes</strong>.</p>
        <CodeBlock language="typescript" code={`
let cBaseElement: string = 'bg-surface-500 p-4 rounded'; // parent element styles
let cBaseLabel: string = 'text-base'; // base label styles
        `.trim()}></CodeBlock>
        <!-- Dynamic Classes -->
        <h4>Dynamic Classes</h4>
        <p>If you expect to set one or more styles based on the current value of a property, handle this within a function as shown below.</p>
        <CodeBlock language="typescript" code={`
export let outlined: boolean;
let cOutlined: string = '';
function setOutlined(): void {
    cOutlined = outlined ? 'border-2 border-primary-500' : 'border-none';
}
        `.trim()}></CodeBlock>
        <p>The following allows these functions to run each time a property updates. Otherwise, the class logic will only be run once, on initialization.</p>
        <CodeBlock language="typescript" code={`
// Update on Property Change
afterUpdate(() => {
    setOutlined();
    setSomethingElse();
});
        `.trim()}></CodeBlock>
        <!-- Reactive Classes -->
        <h4>Reactive Classes</h4>
        <p>Reactive classes combine all base and dynamic classes. These are applied to each respective element.</p>
        <CodeBlock language="typescript" code={`
$: classesCard = \`\${cBase} \${cOutlined}\`; // parent element
$: classesLabel = \`\${cBaseLabel}\`; // child element
        `.trim()}></CodeBlock>
        <p>Apply the reactive classes as follows. Make sure to also include <strong>$$props.classes</strong> as a pass-through for additional classes. Note that the first class acts as a unique identifier for the element, which is useful for testing.</p>
        <CodeBlock language="html" code={`
<div class="card {classesCard} {$$props.classes}">
    <label class="card-label {classesLabel}">My Label</label>
</div>
        `.trim()}></CodeBlock>
    </section>

    <Divider />

    <!-- Pitfalls -->
    <section class="space-y-4">
        <h2>Component Pitfalls</h2>
        <p>Below are a few pitfalls we've encountered when creating Skeleton. Do your best to avoid these whenever possible.</p>
        <ul class="list-disc list-inside">
            <li>As a best practice, avoid style blocks. Going outside of Tailwind can increase the final stylesheet size.</li>
            <li>Do not mix script-defined and inline Tailwind classes. This is a convention that aids readabilty if the code.</li>
            <li>Avoid switch-case statements to create shorthand property values. This makes it harder for devs to overwrite and extend styling.</li>
            <li>We wish to keep Skeleton icon library agnostic, so use embedded SVG icons instead.</li>
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
        <p>While interactive demos are preferred, static demos are welcome. Just make sure to provide a variety of examples to illustrate use cases and feature set your component. If you need help adding an interactive demo, please reach out to any core contributor on the team.</p>
    </section>

    <Divider />

    <!-- Linting -->
    <section class="space-y-4">
        <h2>Linting</h2>
        <p>Code linting is handled via <a href="https://prettier.io/" target="_blank">Prettier</a>.</p>
        <CodeBlock language="console" code={`npm run lint`}></CodeBlock>
    </section>

    <Divider />

    <!-- Running Tests -->
    <section class="space-y-4">
        <h2>Running Tests</h2>
        <p>Tests are handled via <a href="https://vitest.dev/" target="_blank">Vitest</a>, which uses similar conventions and syntax to Jest. Please ensure you write and run tests before submitting a pull request. Bare minimum, these tests should include test components various configurations of your component properties.</p>
        <CodeBlock language="console" code={`npm run test`}></CodeBlock>
    </section>

</div>