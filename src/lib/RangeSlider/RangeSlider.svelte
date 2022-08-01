<script lang="ts">
    // Props
    export let id: string = (Math.random() * 10e15).toString(16); // unique id
    export let name: string = id;
    // Props: Values
    export let min: number = 0;
    export let max: number = 10;
    export let step: number = 1;
    export let value: number = 0;
    // Props: Options
    export let label: string = '';
    export let ticked: boolean = false;
    export let accent: string = 'accent-primary-500';

    // Base Styles
    const cBaseLabel: string = 'm-0';
    const cBaseContent: string = 'flex justify-center space-x-4';
    const cBaseInput: string = 'w-full h-2';
    const cBaseValue: string = 'flex-none min-w-[50px] text-center';
    
    // Tickmarks - generate datalist options based on min/max values
    let tickmarks: any[];
    if (ticked) { tickmarks = Array.from({length: (max-min)+1}, (v,i) => i); }

    // Reactive Classes
    $: classesInput = `${cBaseInput} ${accent}`;

    // Prune $$restProps to avoid overwriting $$props.class
    function prunedRestProps(): any {
        delete $$restProps.class;
        return $$restProps;
    }
</script>

<label for={id} class="range-slider {$$props.class}" data-testid="range-slider">

    <!-- Label -->
    <span class="range-label {cBaseLabel}">{label}</span>

    <!-- Content -->
    <div class="range-content {cBaseContent}">

        <!-- Input -->
        <div class="flex-1">
            <input
                type="range"
                {id}
                {name}
                class="range-input {classesInput}"
                list="tickmarks-{id}"
                min={min}
                max={max} 
                step={step}
                bind:value={value}
                on:click 
                on:change
                on:blur
                {...prunedRestProps()}
            >

            <!-- Tickmarks -->
            {#if ticked && tickmarks.length}
            <datalist id="tickmarks-{id}">
                {#each tickmarks as tm}
                <option value={tm} label='{tm}'></option>
                {/each}
            </datalist>
            {/if}

        </div> 

        <!-- Value -->
        <div class="range-value {cBaseValue}">{value}</div>

    </div>
</label>
