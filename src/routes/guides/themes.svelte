<script lang="ts">
    import { writable, type Writable } from "svelte/store";
    
    import Card from "$lib/Card/Card.svelte";
    import CodeBlock from "$lib/CodeBlock/CodeBlock.svelte";
    import RadioGroup from "$lib/Radio/RadioGroup.svelte";
    import RadioItem from "$lib/Radio/RadioItem.svelte";
    import DataTable from "$lib/Table/DataTable.svelte";
    import Button from "$lib/Button/Button.svelte";
    import Divider from "$lib/Divider/Divider.svelte";

    const weights: number[] = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
    const storeTab: Writable<string> = writable('primary'); // primary | accent | warning | surface

    const tableProps: any = {
        headings: ['Name', 'Class', 'Description'],
        source: [
            {n: 'Primary', c:'[x]-primary-[50-900]', d:'Typically your primary brand color.'},
            {n: 'Accent', c:'[x]-accent-[50-900]', d:'An accent for offsets or supplimentary values.'},
            {n: 'Warning', c:'[x]-warning-[50-900]', d:'May be used for warnings, alerts, and invalid inputs.'},
            {n: 'Surface', c:'[x]-surface-[50-900]', d:'May be used for backgrounds, card elements, and some typography.'},
        ],
    };

    // Based on: https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
    // Usage: hexToRgb('bada55'); --> 186 218 85
    function hexToRgb(hex): string {
        hex = `#${hex}`;
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        if (result) {
            const color = {
                r: parseInt(result[1], 16),
                g: parseInt(result[2], 16),
                b: parseInt(result[3], 16)
            };
            return `${color.r} ${color.g} ${color.b}`;
        }
        return '(invalid)';
    }

    // Reset Visible Fields
    function reset(): void {
        if(confirm(`This will clear all ${$storeTab} fields. Are you sure you wish you proceed?`)) {
            for (let i = 0; i < weights.length; i++) {
                formColors[$storeTab][weights[i]] = '';
            }
        }
    }

    $: formColors = {
        name: 'Skeleton',
		primary: {
            50: 'ecfdf5',
            100: 'd1fae5',
            200: 'a7f3d0',
            300: '6ee7b7',
            400: '34d399',
            500: '10b981',
            600: '059669',
            700: '047857',
            800: '065f46',
            900: '064e3b',
        },
		accent: {
            50: 'eef2ff',
            100: 'e0e7ff',
            200: 'c7d2fe',
            300: 'a5b4fc',
            400: '818cf8',
            500: '6366f1',
            600: '4f46e5',
            700: '4338ca',
            800: '3730a3',
            900: '312e81',
        },
		warning: {
            50: 'fff1f2',
            100: 'ffe4e6',
            200: 'fecdd3',
            300: 'fda4af',
            400: 'fb7185',
            500: 'f43f5e',
            600: 'e11d48',
            700: 'be123c',
            800: '9f1239',
            900: '881337',
        },
		surface: {
            50: 'f8fafc',
            100: 'f1f5f9',
            200: 'e2e8f0',
            300: 'cbd5e1',
            400: '94a3b8',
            500: '64748b',
            600: '475569',
            700: '334155',
            800: '1e293b',
            900: '0f172a',
        },
	};
</script>

<div class="space-y-8">

	<!-- Header -->
	<header class="space-y-4">
		<h1>Themes</h1>
        <p>
            Skeleton themes integrate with Tailwind using <a href="https://tailwindcss.com/docs/customizing-colors#using-css-variables" target="_blank">RGB CSS custom properties</a> to define each theme color. This enables the use of <a href="https://tailwindcss.com/docs/background-color#changing-the-opacity" target="_blank">background opacity</a> as well as support for <a href="https://tailwindcss.com/docs/dark-mode" target="_blank">dark mode</a>. VS Code users may use the <a href="https://marketplace.visualstudio.com/items?itemName=dakshmiglani.hex-to-rgba" target="_blank">Hex-To-RGB extension</a> to convert colors on-the-fly. Otherwise utilize the handy conversion form provided below.
        </p>
        <p>If you would like to get started right away, feel free to use the default Skeleton theme as is.</p>
	</header>

    <!-- Form -->
    <Card class="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <form class="space-y-8">
            <fieldset>
                <label>
                    <span>Theme Name</span>
                    <input type="text" bind:value={formColors.name} placeholder="Enter theme name..." required />
                </label>
            </fieldset>
            <fieldset class="flex justify-between">
                <RadioGroup background="bg-surface-100 dark:bg-surface-500" color="text-black dark:text-white" selected={storeTab}>
                    <RadioItem value="primary">Primary</RadioItem>
                    <RadioItem value="accent">Accent</RadioItem>
                    <RadioItem value="warning">Warning</RadioItem>
                    <RadioItem value="surface">Surface</RadioItem>
                </RadioGroup>
                <Button type="button" variant="ghost" on:click={reset}>Clear</Button>
            </fieldset>
            <!-- Fields -->
            <fieldset class="space-y-6">
                {#each weights as w}
                <label for="">
                    <div class="flex space-x-4 items-center">
                        <div
                            class="bg-black ring-2 ring-[grey]/10 aspect-square w-4 rounded-full"
                            style:background={`#${formColors[$storeTab][w]}`}
                        ></div>
                        <p class="w-[40px] text-center">{w}</p>
                        <input type="text" bind:value={formColors[$storeTab][w]} required />
                    </div>
                </label>
                {/each}
            </fieldset>
        </form>
        <CodeBlock language="css" class="max-h-[820px] overflow-y-auto" code={
`:root {
    /* --- ${formColors.name ? formColors.name : 'Skeleton'} Theme --- */
    /* Primary */
    --color-primary-50: ${hexToRgb(formColors.primary[50])};
    --color-primary-100: ${hexToRgb(formColors.primary[100])};
    --color-primary-200: ${hexToRgb(formColors.primary[200])};
    --color-primary-300: ${hexToRgb(formColors.primary[300])};
    --color-primary-400: ${hexToRgb(formColors.primary[400])};
    --color-primary-500: ${hexToRgb(formColors.primary[500])};
    --color-primary-600: ${hexToRgb(formColors.primary[600])};
    --color-primary-700: ${hexToRgb(formColors.primary[700])};
    --color-primary-800: ${hexToRgb(formColors.primary[800])};
    --color-primary-900: ${hexToRgb(formColors.primary[900])};
    /* Accent */
    --color-accent-50: ${hexToRgb(formColors.accent[50])};
    --color-accent-100: ${hexToRgb(formColors.accent[100])};
    --color-accent-200: ${hexToRgb(formColors.accent[200])};
    --color-accent-300: ${hexToRgb(formColors.accent[300])};
    --color-accent-400: ${hexToRgb(formColors.accent[400])};
    --color-accent-500: ${hexToRgb(formColors.accent[500])};
    --color-accent-600: ${hexToRgb(formColors.accent[600])};
    --color-accent-700: ${hexToRgb(formColors.accent[700])};
    --color-accent-800: ${hexToRgb(formColors.accent[800])};
    --color-accent-900: ${hexToRgb(formColors.accent[900])};
    /* Warning */
    --color-warning-50: ${hexToRgb(formColors.warning[50])};
    --color-warning-100: ${hexToRgb(formColors.warning[100])};
    --color-warning-200: ${hexToRgb(formColors.warning[200])};
    --color-warning-300: ${hexToRgb(formColors.warning[300])};
    --color-warning-400: ${hexToRgb(formColors.warning[400])};
    --color-warning-500: ${hexToRgb(formColors.warning[500])};
    --color-warning-600: ${hexToRgb(formColors.warning[600])};
    --color-warning-700: ${hexToRgb(formColors.warning[700])};
    --color-warning-800: ${hexToRgb(formColors.warning[800])};
    --color-warning-900: ${hexToRgb(formColors.warning[900])};
    /* Surface */
    --color-surface-50: ${hexToRgb(formColors.surface[50])};
    --color-surface-100: ${hexToRgb(formColors.surface[100])};
    --color-surface-200: ${hexToRgb(formColors.surface[200])};
    --color-surface-300: ${hexToRgb(formColors.surface[300])};
    --color-surface-400: ${hexToRgb(formColors.surface[400])};
    --color-surface-500: ${hexToRgb(formColors.surface[500])};
    --color-surface-600: ${hexToRgb(formColors.surface[600])};
    --color-surface-700: ${hexToRgb(formColors.surface[700])};
    --color-surface-800: ${hexToRgb(formColors.surface[800])};
    --color-surface-900: ${hexToRgb(formColors.surface[900])};
}`.trim()}
        ></CodeBlock>
    </Card>

    <Divider />

    <!-- Import Theme -->
    <section class="space-y-4">
        <h3>Save and Import Theme</h3>
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