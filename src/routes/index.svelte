<script lang="ts">
    import Card from "$lib/Card/Card.svelte";
    import Button from "$lib/Button/Button.svelte";
    import CodeBlock from "$lib/CodeBlock/CodeBlock.svelte";
    import Divider from "$lib/Divider/Divider.svelte";
    import Alert from "$lib/Alert/Alert.svelte";
</script>

<div class="space-y-8 lg:text-left">

    <!-- Hero -->
    <header>
        <div class="max-w-[90%] lg:max-w-[80%] mx-auto space-y-6 py-10 md:py-[120px] text-center">
            <h1 class="text-4xl md:text-6xl lg:text-8xl">A <span class="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-accent-500">fully featured</span> Svelte components library.</h1>
            <p class="text-xl">Skeleton allows you to build fast, reponsive web apps, using <a class="underline underline-offset-4 decoration-primary-500/20 decoration-dotted" href="https://svelte.dev/" target="_blank">Svelte</a> + <a class="underline underline-offset-4 decoration-primary-500/20 decoration-dotted" href="https://tailwindcss.com/" target="_blank">Tailwind</a>.</p>
        </div>
    </header>

    <Divider />

    <!-- Warning -->
    <Alert background="bg-warning-500" visible={true}>
        <svelte:fragment slot="lead">
            <svg class="w-8 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"/></svg>
        </svelte:fragment>
        <svelte:fragment slot="title">Warning</svelte:fragment>
        <svelte:fragment slot="message">Please note that Skeleton is currently in early release and subject to breaking changes. Use at your own risk.</svelte:fragment>      
    </Alert>

    <Divider />

    <!-- Install -->
    <section class="space-y-4">
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
        <CodeBlock language="console" code={`npm install @brainandbones/skeleton`}></CodeBlock>
    </section>

    <Divider />

    <section class="space-y-4">
        <h2>Next Steps</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <!-- Tailwind -->
            <Card class="space-y-4 text-center">
                <h4>Configure Tailwind</h4>
                <p>Configure required settings.</p>
                <Button variant="filled-accent" href="/docs/tailwind">View Guide</Button>
            </Card>
            <!-- Themes -->
            <Card class="space-y-4 text-center">
                <h4>Create a Theme</h4>
                <p>Generate a custom theme.</p>
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

    <Divider />
    
    <!-- Recommendations -->
    <section class="space-y-4">
        <h2>Recommended Extensions</h2>
        <p>Below is a list of plugins and tooling we recommend you use alongside Skeleton.</p>
        <div class="space-y-4">
            <h6>Official Tailwind Plugins</h6>
            <nav class="flex flex-row space-x-2">
                <Button variant="filled-accent" href="https://tailwindcss.com/docs/typography-plugin" target="_blank">Typography</Button>
                <Button variant="filled-accent" href="https://github.com/tailwindlabs/tailwindcss-forms" target="_blank">Forms</Button>
            </nav>
        </div>
    </section>

    <Divider />
    
    <!-- Contributions -->
    <section class="space-y-4">
        <h3>Contributions</h3>
        <p>If you're interested in contributing, please see the guide below.</p>
        <Button variant="filled-accent" href="/docs/contributions">Contributing Guide</Button>
    </section>

</div>
