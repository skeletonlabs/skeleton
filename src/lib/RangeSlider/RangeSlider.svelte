<script lang="ts">
    import { afterUpdate } from "svelte";

    // Props - Generate unique component ID if none specified.
    export let id: string = (Math.random() * 10e15).toString(16);
    export let name: string = id;
    // Props: Values
    export let min: number = 0;
    export let max: number = 10;
    export let step: number = 1;
    export let value: number = 0;
    // Props: Options
    export let label: string = '';
    export let ticked: boolean = false;
    export let accent: string = 'accent-accent-500';

    // Styles
    const cBase: string = 'range-slider w-full h-2';
    
    // Tickmarks - generate datalist options based on min/max values
    let tickmarks: any[];
    function setTickmarks(): void {
        tickmarks = Array.from({length: (max-min)+1}, (v,i) => i);
    }

    // Reactive
    afterUpdate(() => {
        if (ticked) { setTickmarks(); }
    });
    $: classes = `${cBase} ${accent} ${$$props.class||''}`;
</script>

<label for={id} data-testid="range-slider">
    <span class="m-0">{label}</span>
    <div class="flex justify-center space-x-4">
        <!-- Slider + Ticks -->
        <div class="flex-1">
            <input
                type="range"
                {id}
                {name}
                class={classes} 
                list="tickmarks-{id}"
                min={min}
                max={max} 
                step={step}
                bind:value={value}
                on:click 
                on:change
                on:blur
                {...$$restProps} 
            >
            <!-- Tickmarks -->
            {#if ticked && tickmarks}
            <datalist id="tickmarks-{id}">
                {#each tickmarks as tm}
                <option value={tm} label='{tm}'></option>
                {/each}
            </datalist>
            {/if}
        </div> 
        <!-- Current -->
        <div class="flex-none min-w-[50px] text-center">{value}</div>
    </div>
</label>
