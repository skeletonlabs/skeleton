<script lang="ts">

import { setContext } from "svelte/internal";
import type { Writable } from "svelte/store";

export let selected: Writable<any>;
export let spacing: string = 'space-y-2';

setContext('active', selected);

</script>

<dl class="space-y-4">
    <slot />
</dl>