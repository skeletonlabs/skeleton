<script lang="ts">
    import type { Writable } from "svelte/store";
    import { onMount, setContext } from "svelte";

    // Props
    export let selected: Writable<any>;
    export let justify: string = 'justify-start';
    export let highlight: string = 'border-primary-500';
    export let color: string = 'text-primary-500';

    // Set Context
    setContext('selected', selected);
    setContext('highlight', highlight);
    setContext('color', color);

    // Classes
    const cBaseGroup: string = 'hide-scrollbar overflow-x-auto flex border-b-2 border-surface-300 dark:border-surface-700';

    // Handle Home/End Input
    let elemTabGroup: HTMLElement;
    onMount(() => {
        elemTabGroup.addEventListener('keydown', (event: any) => {
            if (['Home', 'End'].includes(event.code)) {
                event.preventDefault();
                if(event.code === 'Home'){ (elemTabGroup.children[0] as HTMLElement).focus(); }
                if(event.code === 'End'){ (elemTabGroup.children[elemTabGroup.children.length-1] as HTMLElement).focus(); }
            };
        });
    });

    // Reactive Classes
    $: classesGroup = `${cBaseGroup} ${justify}`;
</script>

<nav bind:this={elemTabGroup} data-testid="tab-group" class="tab-group {classesGroup}" role="tablist">
    <slot />
</nav>