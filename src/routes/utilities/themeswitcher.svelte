<script lang="ts">
    import CodeBlock from '$lib/CodeBlock/CodeBlock.svelte';
    import Card from "$lib/Card/Card.svelte";
    import ThemeSwitcher from "$lib/ThemeSwitcher/ThemeSwitcher.svelte";

    const presets = [
        { name: 'Skeleton', colors: ['#10b981', '#6366f1', '#f43f5e'], surface: '#111827' }
    ]
</script>

<div class="space-y-8">

    <!-- Header -->
    <header class="space-y-4">
        <h1>ThemeSwitcher</h1>
        <p>Allows users to toggle their preferred theme, color scheme. This uses <a href="https://tailwindcss.com/docs/dark-mode" target="_blank">Tailwind's dark mode</a> feature.</p>
        <CodeBlock language="javascript" code={`import { ThemeSwitcher } from '@brainandbones/skeleton';`}></CodeBlock>
    </header>

    <!-- Examples -->
    <Card class="text-center py-10 overflow-visible">
        <ThemeSwitcher variants={presets} />
    </Card>

    <!-- Usage -->
    <section class="space-y-4">
        <h2>Usage</h2>
        
        <p>Theme files should stay in <code>static/themes/theme-{"{name}"}.css</code></p>
        <CodeBlock language="js" code={`const presets = [
    { name: 'Skeleton', colors: ['#10b981', '#6366f1', '#f43f5e'], surface: '#111827' }
]`}></CodeBlock>
        <CodeBlock language="html" code={`<ThemeSwitcher variants={presets} select={true} open={false} origin="tl" />`}></CodeBlock>

        <p>Slide togle change en html body class</p>
        <CodeBlock language="html" code={`<html class="dark">`}></CodeBlock>

        <p>Theme selector will load a css file in header</p>
        <CodeBlock language="html" code={`<link rel="stylesheet" href='/themes/theme-name.css' />`}></CodeBlock>
        

        <p>Please refer to Tailwind's official instructions to setup and configure your project for <a href="https://tailwindcss.com/docs/dark-mode" target="_blank">dark mode</a>.</p>
    </section>
    
    <!-- Properties -->
    <section class="space-y-4">
        <h2>Properties</h2>
        <p>Allows access to all <a href="/components/menus">Menu component properties</a>, but defaults to <code>select: true</code>.</p>
    </section>
</div>
