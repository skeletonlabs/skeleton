<script lang="ts">
    import Card from "$lib/Card/Card.svelte";
    import CodeBlock from "$lib/CodeBlock/CodeBlock.svelte";
    import Button from "$lib/Button/Button.svelte";
</script>

<div class="space-y-8">

	<!-- Header -->
	<header class="space-y-4">
		<h1>Configure Tailwind</h1>
        <p>Skeleton is fully compatable with Tailwind, but requires a few configuration steps. Please follow the steps below.</p>
	</header>

    <!-- Usage -->
    <Card class="space-y-4">
        <section class="space-y-4">
            <h4>Tailwind Content</h4>
            <p>Add the following to <a href="https://tailwindcss.com/docs/configuration" target="_blank">content</a> within <strong>tailwind.config.cjs</strong>. This ensures Tailwind is aware of Skeleton's component classes within your development local server.</p>
            <CodeBlock language="js" code={`
module.exports = {
    content: [
        // ...
        './node_modules/@brainandbones/skeleton/**/*.{html,js,svelte,ts}'
    ],
    // ...
}
            `.trim()}></CodeBlock>
        </section>
        <section class="space-y-4">
            <h4>Tailwind Plugin</h4>
            <p>
                Add the Skeleton <a href="https://tailwindcss.com/docs/plugins#official-plugins" target="_blank">plugin</a> to <strong>tailwind.config.cjs</strong>. This will automatically ingest and utilize your CSS variables defined in the next step.
            </p>
            <CodeBlock language="js" code={`
module.exports = {
    // ...
    plugins: [
        // ...
        require('@brainandbones/skeleton/tailwind.cjs')
    ]
}
            `.trim()}></CodeBlock>
        </section>
    </Card>

    <!-- Next Steps -->
    <Card class="space-y-4">
        <h4>Generate Theme</h4>
        <p>Follow the guide below to generate a custom theme for your project.</p>
        <Button variant="filled-accent" href="/docs/themes">Next: Themes Guide</Button>
    </Card>

</div>