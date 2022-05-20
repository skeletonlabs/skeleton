<script lang="ts">
    export let checked: boolean = false;
    export let accent: string = 'bg-accent-500';
    export let size: string = 'md';

    // Base Styles
    const cBaseLabel: string = 'inline-block';
    const cBaseTrack: string = 'flex rounded-full transition-all duration-[200ms] hover:brightness-90 cursor-pointer';
    const cBaseThumb: string = 'w-[50%] h-full scale-[0.7] rounded-full cursor-pointer transition-all duration-[200ms] shadow-lg';
   
    // Set track size
    let trackSize: string;
    switch(size){
        case('sm'): trackSize = 'w-12 h-6'; break;
        case('lg'): trackSize = 'w-20 h-10'; break;
        default:    trackSize = 'w-16 h-8';
    }

    // Interactive
    $: cTrackAccent = checked ? accent : 'bg-surface-400 dark:bg-surface-700 cursor-pointer';
    $: cThumbBackground = checked ? 'bg-white' : 'bg-white/50';
    $: cThumbPos = checked ? 'translate-x-full' : '';

    // Reactive Classes
    $: classesTrack = `${cBaseTrack} ${trackSize} ${cTrackAccent}`;
    $: classesThumb = `${cBaseThumb} ${cThumbBackground} ${cThumbPos}`;
</script>

<label class="slide-toggl {cBaseLabel} {$$props.class}" class:opacity-30={$$props.disabled} data-testid="slide-toggle">

    <!-- Input (Hidden) -->
    <input
        type="checkbox" 
        class="hidden"
        bind:checked 
        on:click
        on:mouseover
        on:focus
        on:blur
        {...$$restProps}
        disabled={$$props.disabled}
    >

    <div class="flex items-center space-x-4">

        <!-- Slider Track/Thumb -->
        <div class="track {classesTrack}" class:cursor-not-allowed={$$props.disabled}>
            <div class="thumb {classesThumb}" class:cursor-not-allowed={$$props.disabled}></div>
        </div>

        <!-- Label -->
        {#if $$slots.default}<div><slot/></div>{/if}

    </div>

</label>
