<script lang="ts">
    import { setContext } from "svelte/internal";
    import type { Writable } from "svelte/store";

    // Props
    export let selected: Writable<any>;
    export let multiple: boolean = false;
    export let spacing: string = 'space-y-4';

    // Context
    setContext('selected', selected);
    setContext('multiple', multiple);
</script>

<dl class="accordian-group {spacing} {$$props.classes}" data-testid="accordion-group">
    <slot />
</dl>