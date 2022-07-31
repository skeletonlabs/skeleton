<script lang="ts">
    import { writable, type Writable } from "svelte/store";

    import Card from "$lib/Card/Card.svelte";
    import CodeBlock from "$lib/CodeBlock/CodeBlock.svelte";
    import DataTable from "$lib/Table/DataTable.svelte";
    import Button from "$lib/Button/Button.svelte";
    import Divider from "$lib/Divider/Divider.svelte";
    import RadioGroup from "$lib/Radio/RadioGroup.svelte";
    import RadioItem from "$lib/Radio/RadioItem.svelte";
    import ThemeGenTailwind from "$lib/ThemeGenerator/ThemeGenTailwind.svelte";
    import ThemeGenCustom from "$lib/ThemeGenerator/ThemeGenCustom.svelte";

    // Stores
    const storeLayout: Writable<string> = writable('tailwind');

    // Tables
    const tableProps: any = {
        headings: ['Name', 'Class', 'Description'],
        source: [
            {n: 'Primary', c:'[x]-primary-[50-900]', d:'Typically your primary brand color.'},
            {n: 'Accent', c:'[x]-accent-[50-900]', d:'An accent for offsets or supplimentary values.'},
            {n: 'Warning', c:'[x]-warning-[50-900]', d:'May be used for warnings, alerts, and invalid inputs.'},
            {n: 'Surface', c:'[x]-surface-[50-900]', d:'May be used for backgrounds, card elements, and some typography.'},
        ],
    };
</script>

<div class="space-y-8">

	<!-- Header -->
	<header class="space-y-4">
		<h1>Themes</h1>
        <p>Skeleton themes integrate with Tailwind using <a href="https://tailwindcss.com/docs/customizing-colors#using-css-variables" target="_blank">CSS custom properties</a> converted RGB values. This enables the use of <a href="https://tailwindcss.com/docs/background-color#changing-the-opacity" target="_blank">background opacity</a> as well as support for <a href="https://tailwindcss.com/docs/dark-mode" target="_blank">dark mode</a>. See the instructions below to get started.</p>
	</header>

    <Divider />

    <!-- Theme Generator Form -->
    <section class="space-y-4">
        <h2>Generator</h2>
        <p>Use the form below to quickly and easly generate a custom theme. Each color you provide represents swatch 500 (ex: bg-primary-500).</p>
        <Card class="space-y-4">
            <header class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
                <RadioGroup selected={storeLayout}>
                    <RadioItem value="tailwind">Tailwind</RadioItem>
                    <RadioItem value="custom">Custom</RadioItem>
                </RadioGroup>
                {#if $storeLayout === 'tailwind'}<p>Create a theme using Tailwind's curated color palette. Recommended for best results. </p>{/if}
                {#if $storeLayout === 'custom'}<p>Create a theme using custom hex colors. Recommended for advance users only.</p>{/if}
            </header>
            <Divider />
            {#if $storeLayout === 'tailwind'}<ThemeGenTailwind />{/if}
            {#if $storeLayout === 'custom'}<ThemeGenCustom />{/if}
        </Card>
        <h4>Advanced Curation</h4>
        <p>To curate or adjust your theme's palette, we recommend using either the <a href="https://tailwindcss.com/docs/customizing-colors" target="_blank">default Tailwind colors</a> or this <a href="https://tailwind.simeongriggs.dev/blue/3B82F6" target="_blank">Palette Generator</a>. Just make sure you convert from Hex -> RGB. The <a href="https://marketplace.visualstudio.com/items?itemName=dakshmiglani.hex-to-rgba" target="_blank">Hex-To-RGB VS Code extension</a> can be used to convert a set of colors in bulk when using multi-select.</p>
    </section>

    <Divider />

    <!-- Import Theme -->
    <section class="space-y-4">
        <h3>Save and Import</h3>
        <p>Save your theme to it's own file, such as <em>/src/theme.css</em>, then import this into your layout. For most projects, this can be handled within your default SvelteKit <em>__layout.svelte</em> component. Ensure your custom theme is imported before your global stylesheet.</p>
        <CodeBlock language="typescript" code={`import '../theme.css';\nimport '../app.css';`}></CodeBlock>
    </section>

    <Divider />

    <!-- Usage -->
    <section class="space-y-4">
        <h3>Usage</h3>
        <p>Theme colors are not limited to Skeleton components. You can utilize them anywhere within your app following Tailwind's standard conventions. Feel free to mix or extend them with <a href="https://tailwindcss.com/docs/customizing-colors" target="_blank">Tailwind's default color palette</a>.</p>
        <CodeBlock language="html" code={`<!-- Inlined classes -->\n<div class="bg-primary-500 text-accent-500">Skeleton</div>`}></CodeBlock>
        <CodeBlock language="html" code={`<!-- Tailwind opacity scale -->\n<div class="bg-primary-500/50">Skeleton</div>`}></CodeBlock>
        <CodeBlock language="css" code={`/* Using Tailwind @apply */\n.example { @apply bg-primary-500; }`}></CodeBlock>
        <CodeBlock language="css" code={`/* Using CSS custom properties */\nbody { background: var(--color-surface-900); }`}></CodeBlock>
    </section>

    <Divider />

    <!-- Reference -->
    <section class="space-y-4">
        <h3>Reference</h3>
        <p>A loose reference for what each color should represent within your project.</p>
        <DataTable headings={tableProps.headings} source="{tableProps.source}"></DataTable>
    </section>

    <Divider />

    <!-- Next Steps -->
    <Card class="flex justify-between items-center space-x-4 space-y-0">
        <div class="flex-1 space-y-4">
            <p>Next, let's review best practices for adding global and per component styles.</p>
        </div>
        <Button variant="filled-accent" href="/guides/styling">Add Styling</Button>
    </Card>

</div>