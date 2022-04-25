<script>

import SliderToggle from "$lib/SliderToggle/SliderToggle.svelte";
import Card from "$lib/Card/Card.svelte";

let toggleOnMes = 'Thanks!';
let toggleOffMes = 'Toggle me to agree!';

let checked = false;

</script>

<h1>TESTING</h1>
<div>

    <Card>
        <SliderToggle bind:checked>
        {#if checked}
        {toggleOnMes}
        {:else}
        {toggleOffMes}
        {/if}
        </SliderToggle>
    </Card>
    
</div>