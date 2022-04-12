<!-- https://www.sitepoint.com/create-css-conic-gradients-pie-charts/ -->
<!-- https://css-tricks.com/radial-gradient-recipes/ -->
<!-- https://tailwindcss.com/docs/configuration#referencing-in-java-script -->

<script lang="ts">
    import colors from 'tailwindcss/colors';
    
    export let width: string = "w-full";
    export let data: any[] = [{label: 'Progress', swathe: {color: 'slate', weight: 500}, start: 0, end: 100}];
    export let legend: boolean = false;

    // Styles
    const cBase: string = 'inline-block aspect-square rounded-full';

    // Generate Conic Gradient style
    function genConicGradient(): string {
        let d: any = data.map(v => {
            // Set Color
            let c: string;
            switch (v.swathe.color) {
                case('white'): c = colors.white; break;
                case('black'): c = colors.black; break;
                default: c = colors[v.swathe.color][v.swathe.weight];
            }
            // Return mapped value
            return `${c} ${v.start}% ${v.end}%`;
        });
        return `conic-gradient(${d.join(', ')})`;
    }

    // Generate Legend
    function genLegend(): any {
        if (!legend) { return; }
        return data.map(v => {
            return {
                label: v.label,
                swatch: colors[v.swathe.color][v.swathe.weight],
                value: v.end - v.start
            };
        });
    }

    // Reactive
    $: classes = `${cBase} ${width} ${$$props.class}`;
</script>

<!-- <pre>{JSON.stringify(genConicGradient(), null, 2)}</pre> -->
<figure class="progress-spinner">
    <div class="{classes}" style:background={genConicGradient()}></div>
    {#if legend}
    <figcaption class="mt-4 text-sm">
        <ul class="space-y-4">
            {#each genLegend() as {swatch, label, value}}
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

