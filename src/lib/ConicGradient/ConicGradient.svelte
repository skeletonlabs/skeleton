<!-- https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/conic-gradient -->
<!-- https://www.sitepoint.com/create-css-conic-gradients-pie-charts/ -->
<!-- https://css-tricks.com/radial-gradient-recipes/ -->
<!-- https://tailwindcss.com/docs/configuration#referencing-in-java-script -->

<!-- Colors -->
<!-- https://www.w3.org/wiki/CSS/Properties/color/keywords -->

<script lang="ts">
import { afterUpdate } from 'svelte';
    // import colors from 'tailwindcss/colors';
    
    export let data: any[] = [{label: 'Progress', swathe: {color: 'slate', weight: 500}, start: 0, end: 100}];
    export let legend: boolean = false;
    export let width: string = "w-full";

    // Data
    let currentCone: string;
    let currentLegent: any[];

    // Styles
    const cBase: string = 'inline-block aspect-square rounded-full';

    // Generate Conic Gradient style
    function genConicGradient(): void {
        let d: any = data.map(v => {
            // -- FIXME: temporary solution ---
            // // Set Color
            // let c: string;
            // switch (v.swathe.color) {
            //     case('white'): c = colors.white; break;
            //     case('black'): c = colors.black; break;
            //     case('transparent'): c = 'transparent'; break;
            //     default: c = colors[v.swathe.color][v.swathe.weight];
            // }
            // // Return mapped value
            // return `${c} ${v.start}% ${v.end}%`;
            return `${v.swathe.color} ${v.start}% ${v.end}%`;
        });
        currentCone = `conic-gradient(${d.join(', ')})`;
    }

    // Generate Legend
    function genLegend(): any {
        if (!legend) { return; }
        currentLegent = data.map(v => {
            return {
                label: v.label,
                // -- FIXME: temporary solution ---
                // swatch: colors[v.swathe.color][v.swathe.weight],
                swatch: v.swathe.color,
                value: v.end - v.start
            };
        });
    }

    // Reactive
    afterUpdate(() => {
        genConicGradient();
        genLegend();
    });
    $: classes = `${cBase} ${width} ${$$props.class}`;
</script>

<!-- <pre>{JSON.stringify(currentCone, null, 2)}</pre> -->

<figure class="conic-gradient text-center space-y-4" data-testid="conic-gradient">
    <!-- Conic Shape -->
    {#if currentCone}
    <div class="{classes}" style:background={currentCone}></div>
    {/if}
    <!-- Slot -->
    {#if $$slots.default}
    <figcaption><slot /></figcaption>
    {/if}
    <!-- Legend -->
    {#if legend && currentLegent}
    <figcaption class="text-sm">
        <ul class="space-y-4">
            {#each currentLegent as {swatch, label, value}}
            <li class="flex justify-between">
                <div class="flex space-x-4">
                    <span class="block aspect-square bg-black w-5 rounded-full mr-2" style:background={swatch} />
                    <strong>{label}</strong>
                </div>
                <span>{value}%</span>
            </li>
            {/each}
        </ul>
    </figcaption>
    {/if}
</figure>

