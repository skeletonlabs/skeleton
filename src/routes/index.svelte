<script lang="ts">
    import Card from "$lib/Card/Card.svelte";
    import Button from "$lib/Button/Button.svelte";
    import CodeBlock from "$lib/CodeBlock/CodeBlock.svelte";
    import Divider from "$lib/Divider/Divider.svelte";
</script>

<div class="space-y-8 lg:text-left">

    <!-- Hero -->
    <header>
        <div class="max-w-[90%] lg:max-w-[80%] mx-auto space-y-6 py-10 md:py-[120px] text-center">
            <h1 class="text-4xl md:text-6xl lg:text-8xl">A <span class="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-accent-500">fully featured</span> Svelte UI component library.</h1>
            <p class="text-xl">Skeleton allows you to build fast and responsive web interfaces using <a href="https://svelte.dev/" target="_blank">Svelte</a> + <a href="https://tailwindcss.com/" target="_blank">Tailwind</a>.</p>
            <nav class="space-x-2">
                <Button variant="filled-primary" size="xl" href="#getStarted">Get Started</Button>
                <Button variant="ghost" size="xl" href="https://github.com/Brain-Bones/skeleton" target="_blank">Github</Button>
            </nav>
        </div>
    </header>
    
    <Divider />

    <!-- Early Access Message -->
    <section class="bg-accent-500/20 border-l-2 border-l-green-500 p-4">
        <p>Skeleton is currently available in early access. If you experience bugs or would like to request a feature, please <a href="https://github.com/Brain-Bones/skeleton/issues" target="_blank">create an issue on Github</a>.</p>
    </section>

    <Divider />

    <!-- Install -->
    <section id="getStarted" class="space-y-4">
        <h2>Install</h2>
        <p>Follow the instructions below to get started.</p>
        <!-- Create SvelteKit Project -->
        <h4>Create a SvelteKit Project</h4>
        <p>See the <a href="https://kit.svelte.dev/docs/introduction#getting-started" target="_blank">official documentation</a>.</p>
        <CodeBlock language="console" code={`npm init svelte@next my-app\ncd my-app\nnpm install\nnpm run dev`}></CodeBlock>
        <!-- Install Tailwind -->
        <h4>Install Tailwind</h4>
        <p><a href="https://github.com/svelte-add/tailwindcss" target="_blank">Svelte-Add</a> makes this quick and painless.</p>
        <CodeBlock language="console" code={`npx svelte-add@latest tailwindcss`}></CodeBlock>
        <!-- Install Skeleton -->
        <h4>Install Skeleton</h4>
        <CodeBlock language="console" code={`npm i @brainandbones/skeleton --save-dev`}></CodeBlock>
    </section>

    <Divider />

    <!-- Next Steps -->
    <section class="space-y-4">
        <h2>Next Steps</h2>
        <p>It's recommended to follow these steps in the provided order.</p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <!-- Tailwind -->
            <Card class="space-y-4 text-center">
                <h4>Configure Tailwind</h4>
                <p>Add the required plugin and settings.</p>
                <Button variant="filled-accent" href="/docs/tailwind">View Guide</Button>
            </Card>
            <!-- Themes -->
            <Card class="space-y-4 text-center">
                <h4>Create a Theme</h4>
                <p>Generate your project's custom theme.</p>
                <Button variant="filled-accent" href="/docs/themes">View Guide</Button>
            </Card>
            <!-- Themes -->
            <Card class="space-y-4 text-center">
                <h4>Add a Component</h4>
                <p>Add your first component.</p>
                <Button variant="filled-accent" href="/components/buttons">Add Button</Button>
            </Card>
        </div>
    </section>

</div>
