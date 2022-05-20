<script lang="ts">
    import Card from "$lib/Card/Card.svelte";
    import CodeBlock from "$lib/CodeBlock/CodeBlock.svelte";
    import Button from "$lib/Button/Button.svelte";
</script>

<div class="space-y-8">

	<!-- Header -->
	<header class="space-y-4">
		<h1>Tailwind Settings</h1>
        <p>Skeleton is fully compatable with Tailwind, but requires a couple extra steps. Please follow the instructions below.</p>
	</header>

    <!-- Usage -->
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

    <!-- Next Steps -->
    <Card class="flex items-center space-x-4">
        <div class="flex-1 space-y-4">
            <p>Next let's follow the guide for creating a custom theme.</p>
        </div>
        <Button variant="filled-accent" href="/docs/themes">Next: Themes Guide</Button>
    </Card>

</div>