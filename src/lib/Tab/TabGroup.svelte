<script lang="ts">

import type { Writable } from "svelte/store";
import { setContext } from "svelte";

export let color: string = '';
export let text: string = '';
export let selected: Writable<any>;
export let justify: string = 'left';

let cJustify: string;
switch(justify){
    case('left'): {cJustify = 'justify-start'; break;}
    case('center'): {cJustify = 'justify-center'; break;}
    default: {cJustify = '';}
}

setContext('color', color);
setContext('text', text);
setContext('selected', selected);

$: classes = `flex border-b-2 space-x-6 border-surface-300 dark:border-surface-700 ${cJustify}`

</script>

<nav data-testid="tab-group" class="tab-group {classes}">
    <slot />
</nav>
