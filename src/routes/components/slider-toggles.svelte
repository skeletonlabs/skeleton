<script>

import SliderToggle from "$lib/SliderToggle/SliderToggle.svelte";
import Card from "$lib/Card/Card.svelte";

let toggleOnMes = 'Thanks!';
let toggleOffMes = 'Toggle me to agree!';

let checked = false;

</script>

<h1>TESTING</h1>
<div class="space-y-4">

    <Card class="space-y-4">
        <SliderToggle bind:checked>
        {#if checked}
        {toggleOnMes}
        {:else}
        {toggleOffMes}
        {/if}
        </SliderToggle>
        <h4>Inner label</h4>
        <SliderToggle onLabel="ON" offLabel="OFF" color="bg-warning-500" />
        <h4>Disabled</h4>
        <SliderToggle disabled color="bg-warning-500" />
    
    </Card>
</div>