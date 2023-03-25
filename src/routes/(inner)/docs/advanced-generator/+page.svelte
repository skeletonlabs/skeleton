<script lang="ts">
	import { themeStore } from "$docs/stores/stores";
	import { generateColorCSS, hexValuesAreValid } from "$docs/theme-generator/utils";
	import { fontSettings } from "$docs/layouts/DocsThemer/settings";
	import LightSwitch from "$lib/utilities/LightSwitch/LightSwitch.svelte";
	import EditableSwatch from "$docs/theme-generator/EditableSwatch.svelte";
	import Preview from "$docs/theme-generator/Preview.svelte";
	import { mixedBadges, mixedButtons } from "$docs/theme-generator/mixedComponents";
    
    let cssOutput: string = '';

    if(!$themeStore) {
        $themeStore = {
            colors: [
                { key: 'primary', label: 'Primary', hex: '#0FBA81', rgb: '0 0 0', on: '0 0 0', palette: generatePalette('#0FBA81') },
                { key: 'secondary', label: 'Secondary', hex: '#4F46E5', rgb: '0 0 0', on: '255 255 255', palette: generatePalette('#4F46E5') },
                { key: 'tertiary', label: 'Tertiary', hex: '#0EA5E9', rgb: '0 0 0', on: '0 0 0', palette: generatePalette('#0EA5E9') },
                { key: 'success', label: 'Success', hex: '#84cc16', rgb: '0 0 0', on: '0 0 0', palette: generatePalette('#84cc16') },
                { key: 'warning', label: 'Warning', hex: '#EAB308', rgb: '0 0 0', on: '0 0 0', palette: generatePalette('#EAB308') },
                { key: 'error', label: 'Error', hex: '#D41976', rgb: '0 0 0', on: '255 255 255', palette: generatePalette('#D41976') },
                { key: 'surface', label: 'Surface', hex: '#495a8f', rgb: '0 0 0', on: '255 255 255', palette: generatePalette('#495a8f') }
            ],
            fontBase: 'system',
            fontHeadings: 'system',
            textColorLight: '0 0 0',
            textColorDark: '255 255 255',
            roundedBase: '9999px',
            roundedContainer: '8px',
            borderBase: '1px'
        };
    }
    
    $: if ($themeStore && hexValuesAreValid($themeStore.colors)) {
		cssOutput = `
:root {
	/* =~= Theme Properties =~= */
	--theme-font-family-base: ${fontSettings[$themeStore.fontBase]};
	--theme-font-family-heading: ${fontSettings[$themeStore.fontHeadings]};
	--theme-font-color-base: ${$themeStore.textColorLight};
	--theme-font-color-dark: ${$themeStore.textColorDark};
	--theme-rounded-base: ${$themeStore.roundedBase};
	--theme-rounded-container: ${$themeStore.roundedContainer};
	--theme-border-base: ${$themeStore.borderBase};
	/* =~= Theme On-X Colors =~= */
	--on-primary: ${$themeStore.colors[0]?.on};
	--on-secondary: ${$themeStore.colors[1]?.on};
	--on-tertiary: ${$themeStore.colors[2]?.on};
	--on-success: ${$themeStore.colors[3]?.on};
	--on-warning: ${$themeStore.colors[4]?.on};
	--on-error: ${$themeStore.colors[5]?.on};
	--on-surface: ${$themeStore.colors[6]?.on};
	/* =~= Theme Colors  =~= */
	${generateColorCSS($themeStore)}
}`;
	}

	$: livePreviewStylesheet = `\<style\>${cssOutput}\</style\>` ;
</script>
<svelte:head>{@html livePreviewStylesheet}</svelte:head>


<div class="page-container">
    <header class="space-y-4 relative">
        <h2>Advanced Theme Generator</h2>
        <p>
            This Theme Generator allows you to customize your Theme in depth.
        </p>
        <p>
            While you are within Theme Generation, you will see a live preview of your theme.
        </p>
        <p>Download your Theme in your preferred format</p>
        <div class="btn-group variant-filled mt-4 ml-auto mr-auto">
            <a class="variant-filled-primary" href={`data:text/css;charset=utf-8${encodeURIComponent(cssOutput)}`} download="theme.postcss">Download as Postcss-File</a>
            <a href={`data:text/json;charset=utf-8${encodeURIComponent(JSON.stringify($themeStore))}`} download="theme.json">Download as JSON-File</a>
        </div>
        <LightSwitch class="absolute top-0 right-0"/>
    </header>
    {#if $themeStore}
        <section class="card variant-glass p-4 space-y-8 flex flex-col">
            {#each $themeStore.colors as color}
                <EditableSwatch bind:color={color}/>
            {/each}
        </section>
    {/if}

    <Preview color="primary" colorLabel="Primary" buttons={mixedButtons} badges={mixedBadges} progressColors={['primary', 'secondary', 'tertiary']} alertColors={['success', 'warning', 'error']}/>
</div>
