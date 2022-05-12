<script lang="ts">

import { setContext } from "svelte/internal";
import type { Writable } from "svelte/store";

export let selected: Writable<any>;
export let spacing: string = 'space-y-2';
export let multiple: boolean = false;

setContext('active', selected);
setContext('multiple', multiple);

$:classes = `${spacing} ${$$props.classes}`;
</script>

<dl class="accordionGroup {classes}" data-testid="accordion-group">
    <slot />
</dl>