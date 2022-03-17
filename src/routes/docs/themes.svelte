<script lang="ts">
    import Card from "$lib/Card/Card.svelte";
    import CodeBlock from "$lib/CodeBlock/CodeBlock.svelte";
    import Table from "$lib/_Table/Table.svelte";

    const codeSampleTheme: string = `
:root {
    /* --- The Skeleton Theme --- */
    /* Primary */
    --color-primary-50: 236 253 245;
    --color-primary-100: 209 250 229;
    --color-primary-200: 167 243 208;
    --color-primary-300: 110 231 183;
    --color-primary-400: 52 211 153;
    --color-primary-500: 16 185 129;
    --color-primary-600: 5 150 105;
    --color-primary-700: 4 120 87;
    --color-primary-800: 6 95 70;
    --color-primary-900: 6 78 59;
    /* Accent */
    --color-accent-50: 238 242 255;
    --color-accent-100: 224 231 255;
    --color-accent-200: 199 210 254;
    --color-accent-300: 165 180 252;
    --color-accent-400: 129 140 248;
    --color-accent-500: 99 102 241;
    --color-accent-600: 79 70 229;
    --color-accent-700: 67 56 202;
    --color-accent-800: 55 48 163;
    --color-accent-900: 49 46 129;
    /* Warning */
    --color-warning-50: 255 241 242;
    --color-warning-100: 255 228 230;
    --color-warning-200: 254 205 211;
    --color-warning-300: 253 164 175;
    --color-warning-400: 251 113 133;
    --color-warning-500: 244 63 94;
    --color-warning-600: 225 29 72;
    --color-warning-700: 190 18 60;
    --color-warning-800: 159 18 57;
    --color-warning-900: 136 19 55;
    /* Surface */
    --color-surface-50: 249 250 251;
    --color-surface-100: 243 244 246;
    --color-surface-200: 229 231 235;
    --color-surface-300: 209 213 219;
    --color-surface-400: 156 163 175;
    --color-surface-500: 107 114 128;
    --color-surface-600: 75 85 99;
    --color-surface-700: 55 65 81;
    --color-surface-800: 31 41 55;
    --color-surface-900: 17 24 39;
}
    `.trim();

    const tableProps: any = {
        columns: ['Color', 'Shades', 'Usage'],
        data: [
            ['Primary', '50-900', 'Your primary brand color.'],
            ['Accent', '50-900', 'An accent for offsets or supplimentary values.'],
            ['Warning', '50-900', 'May be used for warnings, alerts, and invalid inputs.'],
            ['Surface', '50-900', 'May be used for typography, backgrounds and card elements.'],
        ],
    };
</script>

<div class="space-y-4">

	<!-- Header -->
	<header class="space-y-4">
		<h1>Themes</h1>
		<p>
			Themes uses <a href="https://tailwindcss.com/docs/customizing-colors#using-css-variables" target="_blank">CSS variables as recommend by Tailwind</a>. In order to use <a href="https://tailwindcss.com/docs/background-color#changing-the-opacity" target="_blank">Tailwind's background opacity scale</a>, the colors must be supplied as RGB. These have a shades ranging from 50-900 where 50 is the lightest value and 900 the darkest. Components will automatically adapt for <a href="https://tailwindcss.com/docs/dark-mode" target="_blank">Tailwind's Dark Mode</a>.
		</p>
	</header>

    <!-- Usage -->
    <Card class="space-y-4">
        <section class="space-y-4">
            <h4>Skeleton Tailwind Plugin</h4>
            <p>
                <a href="https://tailwindcss.com/docs/plugins#official-plugins" target="_blank">Add the Skeleton plugin to your tailwind.config.cjs</a>. This will automatically ingest and utilize your CSS variables defined in the next step.
            </p>
            <CodeBlock language="js" code={`require('@brainandbones/skeleton/tailwind.cjs')`}></CodeBlock>
        </section>
        <section class="space-y-4">
            <h4>CSS Variables</h4>
            <p>
                Customize each CSS variable to match your brand, then add this to your global CSS stylesheet (ex: app.css)
            </p>
            <CodeBlock language="css" code={codeSampleTheme}></CodeBlock>
        </section>
    </Card>
    
    <!-- Usage -->
    <section class="space-y-4">
        <h3>Usage</h3>
        <p>Theme colors are not limited to Skeleton components, you can utilize them anywhere in your app following Tailwind conventions.</p>
        <CodeBlock language="html" code={`<!-- Inlined classes -->\n<div class="bg-primary-500 text-accent-500">Colorful</div>`}></CodeBlock>
        <CodeBlock language="html" code={`<!-- Tailwind opacity scale -->\n<div class="bg-primary-500/50">Transparent</div>`}></CodeBlock>
        <CodeBlock language="css" code={`/* Using Tailwind @apply */\n.example { @apply bg-primary-500; }`}></CodeBlock>
        <CodeBlock language="css" code={`/* Using CSS variables */\nbody { background: var(--color-surface-900); }`}></CodeBlock>
    </section>

    <!-- Colors -->
    <section class="space-y-4">
        <h3>Colors</h3>
        <p>
			Please ensure you add the following set of named colors.
		</p>
        <Table source="{tableProps}"></Table>
    </section>

</div>