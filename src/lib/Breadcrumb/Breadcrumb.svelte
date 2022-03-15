<script lang="ts">

    export let separator = '>';
    export let styled: boolean = false;
    import {setContext} from 'svelte';
    // Set the separator context to be retrieved by the slots
    setContext('sep', separator)

</script>

<div class="flex justify-start">
    <slot />
</div>
