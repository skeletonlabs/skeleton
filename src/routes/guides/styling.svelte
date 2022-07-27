<script lang="ts">
    import Card from "$lib/Card/Card.svelte";
    import Button from "$lib/Button/Button.svelte";
    import Divider from "$lib/Divider/Divider.svelte";
    import CodeBlock from "$lib/CodeBlock/CodeBlock.svelte";
</script>

<div class="space-y-8">

	<!-- Header -->
	<header class="space-y-4">
		<h1>Styling</h1>
        <p>Below we'll review best practices for global styles, as well as how to override and adjust individual component styling.</p>
	</header>

    <!-- Global Styles -->
    <section class="space-y-4">
        <h2>Global Styles</h2>
        <p>Click the button below to reference how we setup the global stylesheet for this site, which was built using SvelteKit + Skeleton.</p>
        <Button variant="filled-accent" href="https://github.com/Brain-Bones/skeleton/blob/master/src/app.css" target="_blank">View Stylesheet Example</Button>
        <h4>Best Practices</h4>
        <p>Here's a few best practices guidelines we recommend you follow:</p>
        <ul class="list-disc list-inside">
            <li>Segment our styles into several groups, including: elements, typography, forms, etc.</li>
            <li>Utilize <a href="https://tailwindcss.com/docs/reusing-styles#extracting-classes-with-apply" target="_blank">Tailwind @apply</a> to define and implement styles whenever possible.</li>
            <li>Utilize the <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/:not" target="_blank">CSS :not pseudo-class</a> to create global styles that exclude and avoid overwriting inherit component styles.</li>
            <li>Utilize the <a href="https://github.com/tailwindlabs/tailwindcss-forms" target="_blank">Tailwind Forms plugin</a> to handle form input styling. View our <a href="/guides/forms">Forms guide</a> for more details.</li>
        </ul>
    </section>

    <Divider />

    <!-- Per Component Styles -->
    <section class="space-y-4">
        <h2>Per Component Styles</h2>
        <p>Skeleton components are automatically inherit and utlize each theme color value. However, there may be cases where you want to overwrite or extend the styling on a single component. To do this, simply add a <em>class</em> attribute to any component. You can then apply any valid CSS or Tailwind class as expected.</p>
        <CodeBlock language="html" code={`
<Button variant="filled-primary">Standard</Button>
<Button variant="filled-primary" class="text-3xl px-10 py-5">Big</Button>
        `.trim()}></CodeBlock>
        <p>When overwriting inherit styles, you may need to mark the styles as <em>!important</em>. Tailwind uses a leading exclamation mark to handle this.</p>
        <CodeBlock language="html" code={`<Button class="!p-10">Big</Button>`}></CodeBlock>
        <p>Keep in mind that components are a single line HTML element and represent and contain a set of HTML elements within. This means you should be mindful of your target, as the <em>class</em> attribute is only applied to the top-most parent element. In rare cases you may need to generate a chained class definition, though we recommend using this technique sparingly.</p>
        <CodeBlock language="css" code={`.my-custom-class .menu-content { @apply bg-red-500; }`}></CodeBlock>
        <CodeBlock language="html" code={`<Menu class="my-custom-class">...</Menu>`}></CodeBlock>
    </section>

    <Divider />

    <!-- Next Steps -->
    <Card class="flex justify-between items-center space-x-4 space-y-0">
        <div class="flex-1 space-y-4">
            <p>Next, let's follow the documentation implement and utilize form inputs.</p>
        </div>
        <Button variant="filled-accent" href="/guides/forms">Handling Forms</Button>
    </Card>

</div>