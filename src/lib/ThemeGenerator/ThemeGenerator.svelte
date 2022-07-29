<script lang="ts">
    // https://github.com/bartbergmans/Palettey
    import { createPalleteFromColor } from "palettey";

    import Card from "$lib/Card/Card.svelte";
    import Swatches from "./Swatches.svelte";
    import CodeBlock from "$lib/CodeBlock/CodeBlock.svelte";

    const regexHexColor = new RegExp(/^#[0-9a-f]{6}$/i);
    const formValues: any = {
        primary: '#10b981',
        accent: '#6366F1',
        warning: '#f43f5e',
        surface: '#6b7280',
    };
    const hexShades: any = { primary: {}, accent: {}, warning: {}, surface: {} };
    const rgbaShades: any = { primary: {}, accent: {}, warning: {}, surface: {} };
    let cssSnippet: string = ``;

    // Helpers ---

    function pruneHash(v: string): string { return v.replace('#',''); }

    // Convert Hex -> RGB - Source: https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
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

    // Process ---

    // Triggers the generation process
    function processColors(): void {
        if (regexHexColor.test(formValues.primary)) { generateHexShades('primary'); }
        if (regexHexColor.test(formValues.accent)) { generateHexShades('accent'); }
        if (regexHexColor.test(formValues.warning)) { generateHexShades('warning'); }
        if (regexHexColor.test(formValues.surface)) { generateHexShades('surface'); }
    }
    processColors(); // init

    // Creates a hex shade palette from a singular hex value
    function generateHexShades(key: string): void {
        let pallete = createPalleteFromColor(key, pruneHash(formValues[key]), {
            useLightness: false,
            h: 0, s: 0,
            lMin: 100, lMax: 5,
        })[key];
        // Fix the palette order
        pallete = fixPalleteOrder(pallete);
        // Set Palette
        hexShades[key] = pallete;
        // Generate RGB shades
        generateRgbaShades(key);
    }

    // TODO: report to library author, submit a fix as pull request
    // Fix for palettey package incorrectly generating color order as `dark-light` instead of `light-dark`
    function fixPalleteOrder(p: any,): any {
        const fixedPallete = {};
        const swatches: number[] = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
        Object.values(p).reverse().forEach((hex: string, i: number) => {
            fixedPallete[swatches[i]+''] = hex;
        });
        return fixedPallete;
    }

    // Generate a set of RGB shades from Hex shades
    function generateRgbaShades(key: string): void {
        rgbaShades[key] = {
            '50': hexToRgb(pruneHash(hexShades[key]['50'])),
            '100': hexToRgb(pruneHash(hexShades[key]['100'])),
            '200': hexToRgb(pruneHash(hexShades[key]['200'])),
            '300': hexToRgb(pruneHash(hexShades[key]['300'])),
            '400': hexToRgb(pruneHash(hexShades[key]['400'])),
            '500': hexToRgb(pruneHash(hexShades[key]['500'])),
            '600': hexToRgb(pruneHash(hexShades[key]['600'])),
            '700': hexToRgb(pruneHash(hexShades[key]['700'])),
            '800': hexToRgb(pruneHash(hexShades[key]['800'])),
            '900': hexToRgb(pruneHash(hexShades[key]['900'])),
        };
        // Update CSS
        generateCSSSnippet(key);
    }

    // Generates the CSS snippet
    function generateCSSSnippet(key: string): void {
        let css: string = '';
        Object.entries(rgbaShades).forEach((set: any, i: number) => {
            const [colorName, shades] = set;
            css += `${i === 0 ? `\t/* --- Theme --- */\n` : '\n'}\t/* ${colorName} (${formValues[colorName]}) */`;
            Object.entries(shades).forEach((shade) => {
                const [shadeKey, shadeValue] = shade;
                css += `\n\t--color-${colorName}-${shadeKey}: ${shadeValue};`;
            });
        });
        cssSnippet =  `:root {\n${css}\n}`;
    }
</script>

<Card>
    <form class="grid grid-cols-1 lg:grid-cols-2 gap-4">

        <!-- Color Inputs -->
        <fieldset class="grid grid-cols-1 gap-4">
            <label class="flex-1" for="primary">
                <span>Primary</span>
                <input type="text" placeholder="#FFFFFF" bind:value={formValues.primary} on:keyup={processColors}>
                <Swatches palette={hexShades.primary} />
            </label>
            <label class="flex-1" for="accent">
                <span>Accent</span>
                <input type="text" placeholder="#FFFFFF" bind:value={formValues.accent} on:keyup={processColors}>
                <Swatches palette={hexShades.accent} />
            </label>
            <label class="flex-1" for="warning">
                <span>Warning</span>
                <input type="text" placeholder="#FFFFFF" bind:value={formValues.warning} on:keyup={processColors}>
                <Swatches palette={hexShades.warning} />
            </label>
            <label class="flex-1" for="surface">
                <span>Surface</span>
                <input type="text" placeholder="#FFFFFF" bind:value={formValues.surface} on:keyup={processColors}>
                <Swatches palette={hexShades.surface} />
            </label>
        </fieldset>

        <!-- Codeblock -->
        <fieldset class="space-y-4">
            <CodeBlock language="css" code={`${cssSnippet}`} class="max-h-[500px] overflow-y-auto"></CodeBlock>
        </fieldset>

    </form>
</Card>