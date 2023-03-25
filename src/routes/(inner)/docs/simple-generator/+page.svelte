<script lang="ts">
	import { goto } from "$app/navigation";
	import { generatePalette, hexValueIsValid } from "$docs/layouts/DocsThemer/colors";
	import { fontSettings } from "$docs/layouts/DocsThemer/settings";
	import { themeStore } from "$docs/stores/stores";
	import { generateColorCSS, hexValuesAreValid } from "$docs/theme-generator/utils";
	import Step from "$lib/components/Stepper/Step.svelte";
	import Stepper from "$lib/components/Stepper/Stepper.svelte";    
	import LightSwitch from "$lib/utilities/LightSwitch/LightSwitch.svelte";
	import ColorStep from "./ColorStep.svelte";
	import SettingStep from "./SettingStep.svelte";

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
    let cssOutput: string = '';

	const onComplete = () => {
		goto("/docs/advanced-generator");
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
        <h2>Theme Wizard</h2>
        <p>
            This Wizard will guide you through Theme Generation.
        </p>
        <p>
            While you are within Theme Generation, you will see a live preview of your theme.
        </p>
		<LightSwitch class="absolute top-0 right-0"/>
    </header>
    <Stepper on:complete={onComplete}>
        {#each $themeStore.colors as color, i}
            <Step>
                <svelte:fragment slot="header">{`Decide on a ${color.label} color`}</svelte:fragment>
                <ColorStep bind:color={color}/>
            </Step>
        {/each}
		<Step>
			<svelte:fragment slot="header">General Theme Settings</svelte:fragment>
			<SettingStep bind:theme={$themeStore}/>
		</Step>
    </Stepper>
</div>
