<script lang="ts">
	import { generatePalette, hexValueIsValid } from "$docs/layouts/DocsThemer/colors";
	import { fontSettings } from "$docs/layouts/DocsThemer/settings";
	import Step from "$lib/components/Stepper/Step.svelte";
	import Stepper from "$lib/components/Stepper/Stepper.svelte";    
	import ColorStep from "./ColorStep.svelte";
	import type { ColorSettings, FormTheme } from "./types";

    let theme: FormTheme = {
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

    const setColor = (index: number, color: ColorSettings): void => {
        theme.colors[index] = color;
        theme = theme;
    }

    const generateColorCSS = (): string => {
		let newCSS = '';
		theme.colors.forEach((color: ColorSettings, i: number) => {
			const colorKey = color.key;
			// The color set comment
			newCSS += `/* ${colorKey} | ${color.palette[500].hex} */\n\t`;
			// CSS props for shade 50-900 per each color
			for (let [k, v] of Object.entries(color.palette)) {
				newCSS += `--color-${colorKey}-${k}: ${v.rgb}; /* ⬅ ${v.hex} */\n\t`;
			}
		});
		return newCSS;
	}

    const hexValuesAreValid = (colors: ColorSettings[]) => {
		// Check all hex values for validity.
		let valid = true;
		colors?.forEach((color: ColorSettings) => {
			valid = valid && hexValueIsValid(color.hex);
		});

		return valid;
	};

    $: if (hexValuesAreValid(theme.colors)) {
		cssOutput = `
:root {
	/* =~= Theme Properties =~= */
	--theme-font-family-base: ${fontSettings[theme.fontBase]};
	--theme-font-family-heading: ${fontSettings[theme.fontHeadings]};
	--theme-font-color-base: ${theme.textColorLight};
	--theme-font-color-dark: ${theme.textColorDark};
	--theme-rounded-base: ${theme.roundedBase};
	--theme-rounded-container: ${theme.roundedContainer};
	--theme-border-base: ${theme.borderBase};
	/* =~= Theme On-X Colors =~= */
	--on-primary: ${theme.colors[0]?.on};
	--on-secondary: ${theme.colors[1]?.on};
	--on-tertiary: ${theme.colors[2]?.on};
	--on-success: ${theme.colors[3]?.on};
	--on-warning: ${theme.colors[4]?.on};
	--on-error: ${theme.colors[5]?.on};
	--on-surface: ${theme.colors[6]?.on};
	/* =~= Theme Colors  =~= */
	${generateColorCSS()}
}`;
	}

	$: livePreviewStylesheet = `\<style\>${cssOutput}\</style\>` ;
</script>
<svelte:head>{@html livePreviewStylesheet}</svelte:head>

<div class="page-container">
    <header class="space-y-4">
        <h1>Theme Wizard</h1>
        <p>
            This Wizard will guide you through Theme Generation.
        </p>
        <p>
            While you are within Theme Generation, you will see a live preview of your theme.
        </p>
    </header>
    <Stepper>
        {#each theme.colors as color, i}
            <Step>
                <svelte:fragment slot="header">{`Decide on a ${color.label} color`}</svelte:fragment>
                <ColorStep bind:color={color}/>
            </Step>
        {/each}
    </Stepper>
</div>