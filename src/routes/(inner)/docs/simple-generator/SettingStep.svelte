<script lang="ts">
	import { inputSettings } from "$docs/layouts/DocsThemer/settings";
	import type { FormTheme } from "$docs/layouts/DocsThemer/types";
	import { mixedButtons, mixedBadges } from "$docs/theme-generator/mixedComponents";
	import Preview from "$docs/theme-generator/Preview.svelte";

    export let theme: FormTheme;
</script>
<section class="card p-4 grid grid-cols-2 gap-4 col-span-2 lg:col-span-1">
    <!-- Fonts -->
    <h3 class="col-span-2" data-toc-ignore>Fonts</h3>
    <label class="label">
        <span>Base</span>
        <select class="select" bind:value={theme.fontBase}>
            {#each inputSettings.fonts as f}<option value={f}>{f}</option>{/each}
        </select>
    </label>
    <label class="label">
        <span>Headings</span>
        <select class="select" bind:value={theme.fontHeadings}>
            {#each inputSettings.fonts as f}<option value={f}>{f}</option>{/each}
        </select>
    </label>
    <!-- Text Color -->
    <h3 class="col-span-2" data-toc-ignore>Text Color</h3>
    <label class="label">
        <span>Light Mode</span>
        <select class="select" bind:value={theme.textColorLight}>
            {#each inputSettings.colorProps as c}<option value={c.value}>{c.label}</option>{/each}
        </select>
    </label>
    <label class="label">
        <span>Dark Mode</span>
        <select class="select" bind:value={theme.textColorDark}>
            {#each inputSettings.colorProps as c}<option value={c.value}>{c.label}</option>{/each}
        </select>
    </label>
    <!-- Border Radius -->
    <h3 class="col-span-2" data-toc-ignore>Border Radius</h3>
    <label class="label">
        <span>Base</span>
        <select class="select" bind:value={theme.roundedBase}>
            {#each inputSettings.rounded as r}<option value={r}>{r}</option>{/each}
            <option value="9999px">9999px</option>
        </select>
    </label>
    <label class="label">
        <span>Container</span>
        <select class="select" bind:value={theme.roundedContainer}>
            {#each inputSettings.rounded as r}<option value={r}>{r}</option>{/each}
        </select>
    </label>
    <!-- Border Size -->
    <h3 class="col-span-2" data-toc-ignore>Border Size</h3>
    <label class="label">
        <span>Base</span>
        <select class="select" bind:value={theme.borderBase}>
            {#each inputSettings.border as b}<option value={b}>{b}</option>{/each}
        </select>
    </label>
</section>
<!-- Examples -->
<Preview color="primary" colorLabel="Primary" buttons={mixedButtons} badges={mixedBadges} progressColors={['secondary']} alertColors={['warning']}/>