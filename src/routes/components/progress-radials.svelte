<script lang="ts">
    import Card from "$lib/Card/Card.svelte";
    import ProgressSpinner from "$lib/Progress/ProgressRadial.svelte";

    const dataOne: any[] = [
        {label: 'Emerald', swathe: {color: 'emerald', weight: 500}, start: 0, end: 35},
        {label: 'Indigo', swathe: {color: 'indigo', weight: 500}, start: 35, end: 60},
        {label: 'Rose', swathe: {color: 'rose', weight: 500}, start: 60, end: 100},
    ];
    const dataTwo: any[] = [
        {label: 'Orange', swathe: {color: 'orange', weight: 500}, start: 0, end: 35},
        {label: 'Yellow', swathe: {color: 'yellow', weight: 500}, start: 35, end: 60},
        {label: 'Red', swathe: {color: 'red', weight: 500}, start: 60, end: 100},
    ];
    const dataThree: any[] = [
        {swathe: {color: 'white', weight: 500}, start: 0, end: 25},
        {swathe: {color: 'black', weight: 500}, start: 25, end: 50},
        {swathe: {color: 'white', weight: 500}, start: 50, end: 75},
        {swathe: {color: 'black', weight: 500}, start: 75, end: 100}
    ];
</script>

<!-- Examples -->
<section class="grid grid-cols-3 gap-8">
    <Card><ProgressSpinner></ProgressSpinner></Card>
    <Card><ProgressSpinner legend={true}></ProgressSpinner></Card>
    <Card><ProgressSpinner data={dataOne} legend={true}></ProgressSpinner></Card>
    <Card><ProgressSpinner data={dataTwo} legend={true}></ProgressSpinner></Card>
    <Card><ProgressSpinner data={dataThree} class="animate-spin"></ProgressSpinner></Card>
</section>