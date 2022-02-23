<script lang="ts">
    export let primary: boolean = false;
    export let accent: boolean = false;
</script>

<button
    class="bg-black text-white py-2 px-4 rounded-lg transition-transform hover:scale-105"
    class:primary
    class:accent
>
    <slot />
</button>

<style>
    .primary {background-color: rgb(var(--color-primary));}
    .accent {background-color: rgb(var(--color-accent));}
</style>
