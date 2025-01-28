<script lang="ts">
	import { Tab, TabGroup, CodeBlock } from '@skeletonlabs/skeleton';
    import { themes, type Theme } from '$lib/themes';
    // Tailwind Snippets
    import TwExampleTs from './tw-example-ts.txt?raw';
    import TwExampleJs from './tw-example-js.txt?raw';
    import TwExampleCjs from './tw-example-cjs.txt?raw';
    // Local
	let tabConfigFormat = 'ts';
	let activeTheme = themes[1];
	$: activeThemeStylesheet = `
plugins: [
	skeleton({
		themes: { preset: [ "${activeTheme.file}" ] }
	})
]\n
`;

	// Copy Theme Import to Clipboard
	function setActiveTheme(theme: Theme): void {
		activeTheme = theme;
	}
</script>

<div class="space-y-10">

    <!-- Generate SvelteKit Project -->
    <section class="space-y-4">
        <p>
            First we'll generate a new SvelteKit project. If you're updating an existing app, skip to the next step.
        </p>
        <CodeBlock
            language="shell"
            code={`
npm create svelte@6.4.0 my-skeleton-app
- Enable Typescript when prompted (recommended)
cd my-skeleton-app
npm install
        `}
        />
        <aside class="alert variant-ghost">
            <p>WARNING: we do not yet advise use of the <a href="https://svelte.dev/docs/cli/overview" target="_blank" class="anchor">Svelte CLI</a>. This will install <u>Svelte 5</u>, which is not fully compatible with this version of Skeleton. Additionally, it will install <u>Tailwind v4</u>, which is not compatible at all. Full support for the CLI will be added in future versions.</p>
        </aside>
    </section>

    <!-- Install Skeleton -->
    <section class="space-y-4">
        <h2 class="h2">Install Skeleton</h2>
        <CodeBlock language="shell" code={`npm i -D @skeletonlabs/skeleton @skeletonlabs/tw-plugin`} />
    </section>

    <!-- Install Tailwind -->
    <section class="space-y-4">
        <h2 class="h2">Install Tailwind</h2>
        <CodeBlock language="shell" code={`npx svelte-add@latest tailwindcss\nnpm install`} />
        <p>
            Then open the <code class="code">tailwind.config</code> file found in the root of your project.
        </p>
        <TabGroup regionPanel="space-y-4">
            <!-- Tabs -->
            <Tab bind:group={tabConfigFormat} name="ts" value="ts">Typescript (.ts)</Tab>
            <Tab bind:group={tabConfigFormat} name="js" value="js">Javascript (.js)</Tab>
            <!-- <Tab bind:group={tabConfigFormat} name="cjs" value="cjs">CommonJS (.cjs)</Tab> -->
            <!-- Panel -->
            <svelte:fragment slot="panel">
                {#if tabConfigFormat === 'ts'}
                    <!-- <p>For SvelteKit projects using Typescript, install the standard node type definitions.</p> -->
                    <!-- <CodeBlock language="shell" code={`npm add -D @types/node`} /> -->
                    <CodeBlock language="ts" code={TwExampleTs} />
                {:else if tabConfigFormat === 'js'}
                    <CodeBlock language="js" code={TwExampleJs} />
                <!-- {:else} -->
                    <!-- <CodeBlock language="cjs" code={TwExampleCjs} /> -->
                {/if}
            </svelte:fragment>
        </TabGroup>
    </section>

    <!-- Configure Themes -->
    <section class="space-y-4">
        <h2 class="h2">Configure Themes</h2>
        <p>Skeleton provides several preset themes out of the box. Select any available theme, then follow the instructions below.</p>
        <!-- Presets -->
        <div class="space-y-4">
            <nav class="grid grid-cols-1 md:grid-cols-2 gap-4">
                {#each themes.slice(1, themes.length) as preset}
                    <button
                        class="card card-hover p-4 text-white hover:ring-surface-500/50 cursor-pointer space-y-4"
                        style:background={preset.surface}
                        on:click={() => {
                            setActiveTheme(preset);
                        }}
                        on:keydown={() => {
                            setActiveTheme(preset);
                        }}
                    >
                        <div class="flex justify-between items-center gap-4">
                            <span class="text-center font-bold">{preset.name}</span>
                            <ul class="flex justify-center items-center -space-x-1">
                                {#each preset.colors as color}
                                    <li class="aspect-square w-3 xl:w-4 rounded-full" style:background={color}></li>
                                {/each}
                            </ul>
                        </div>
                    </button>
                {/each}
            </nav>
            <p>
                Open <code class="code">tailwind.config</code> found in the root of your project, then register any number of preset themes.
            </p>
            <CodeBlock language="ts" code={activeThemeStylesheet} />
            <p>
                Open <code class="code">/src/app.html</code> and define the active theme using the <code class="code">data-theme</code>
                attribute.
            </p>
            <CodeBlock language="html" code={`<body data-theme="${activeTheme.file}">`} />
        </div>
    </section>

</div>