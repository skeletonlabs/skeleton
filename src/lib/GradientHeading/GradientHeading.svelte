<script lang="ts">

    export let direction: String = "l";
    export let size: String = "4xl";
    export let textStyle = '';
    export let gradientStyle = '';


    $: sizes = `text-${size} lg:leading-tight font-bold`;
    $: gradient = `bg-gradient-to-${direction} bg-clip-text text-transparent from-primary-500 to-accent-500`;
</script>

<h2 class="{$$props.class} {sizes}">
    <span class="{gradient}"><slot /></span>
</h2>