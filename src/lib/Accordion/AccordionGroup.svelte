<script lang="ts">
    import { setContext } from "svelte/internal";
    import type { Writable } from "svelte/store";

    export let selected: Writable<any>;
    export let spacing: string = 'space-y-4';
    export let multiple: boolean = false;

    setContext('active', selected);
    setContext('multiple', multiple);

    $:classes = `${spacing}`;
</script>

<dl class="accordian-group {classes} {$$props.classes}" data-testid="accordion-group">
    <slot />
</dl>