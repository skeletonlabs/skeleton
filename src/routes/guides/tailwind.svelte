<script lang="ts">
    import Card from "$lib/Card/Card.svelte";
    import CodeBlock from "$lib/CodeBlock/CodeBlock.svelte";
    import Button from "$lib/Button/Button.svelte";
    import Divider from "$lib/Divider/Divider.svelte";
</script>

<div class="space-y-8">

	<!-- Header -->
	<header class="space-y-4">
		<h1>Tailwind Settings</h1>
        <p>Skeleton is fully compatable with <a href="https://tailwindcss.com/" target="_blank">Tailwind</a>, but requires a couple extra steps to ensure everything works.</p>
	</header>

    <!-- Usage -->
    <section class="space-y-4">
        <h4>Update Content</h4>
        <p>Add the following to <a href="https://tailwindcss.com/docs/configuration" target="_blank">content</a> within <strong>tailwind.config.cjs</strong>. This ensures Tailwind is aware of Skeleton's component classes within your local development server.</p>
        <CodeBlock language="js" code={`
module.exports = {
    content: [
        // ...
        './node_modules/@brainandbones/skeleton/**/*.{html,js,svelte,ts}'
    ],
    // ...
}
        `.trim()}></CodeBlock>
        <h4>Add the Skeleton Plugin</h4>
        <p>
            Add the Skeleton <a href="https://tailwindcss.com/docs/plugins#official-plugins" target="_blank">plugin</a> to <strong>tailwind.config.cjs</strong>. This will automatically ingest and utilize your CSS variables defined in your theme.
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

    <Divider />

    <!-- Plugins -->
    <section class="space-y-4">
        <h2>Tailwind Plugins</h2>
        <p>Skeleton pairs well with any of the official Tailwind plugins. Including these is completely optional.</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card class="space-y-4 text-center">
                <h4>Typography</h4>
                <p>Typographic defaults for HTML you don't control.</p>
                <Button variant="filled-accent" href="https://tailwindcss.com/docs/typography-plugin" target="_blank">Typography</Button>
            </Card>
            <Card class="space-y-4 text-center">
                <h4>Forms</h4>
                <p>Provides a basic reset for form elements.</p>
                <Button variant="filled-accent" href="https://github.com/tailwindlabs/tailwindcss-forms" target="_blank">Forms</Button>
            </Card>
            <Card class="space-y-4 text-center">
                <h4>Aspect Ratio</h4>
                <p>Provides a composable API for giving elements a fixed aspect ratio.</p>
                <Button variant="filled-accent" href="https://github.com/tailwindlabs/tailwindcss-aspect-ratio" target="_blank">Aspect Ratio</Button>
            </Card>
            <Card class="space-y-4 text-center">
                <h4>Line Clamp</h4>
                <p>Provides utilities for visually truncating text after a fixed number of lines.</p>
                <Button variant="filled-accent" href="https://github.com/tailwindlabs/tailwindcss-line-clamp" target="_blank">Forms</Button>
            </Card>
        </div>
    </section>

    <Divider />

    <!-- Next Steps -->
    <Card class="flex justify-between items-center space-x-4 space-y-0">
        <p>Next, let's follow the guide for creating a custom theme.</p>
        <Button variant="filled-accent" href="/guides/themes">Create a Theme</Button>
    </Card>

</div>