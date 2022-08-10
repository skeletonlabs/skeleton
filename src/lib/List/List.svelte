<script lang='ts'>
    import { setContext } from 'svelte';
    import type { Writable } from 'svelte/store';

    // Props
    export let tag: string = 'ul';
    export let selected: Writable<any> = undefined; // (store)
    export let highlight: string = '!bg-primary-500'; // '!' required
    export let hover: string = 'hover:bg-primary-500/10'; // 'hover:' required
    // A11y
    export let role: string = 'list';
    export let labelledby: string = undefined;

    // Context
    setContext('parentTag', tag);
    setContext('selected', selected);
    setContext('highlight', highlight);
    setContext('hover', hover);

    let elemList: HTMLElement;
    
    // A11y Input Handler
    function onKeyDown(event: any): void {
        // Home/End Keys
        if (['Home', 'End'].includes(event.code)) {
            event.preventDefault();
            if(event.code === 'Home'){ (elemList.children[0] as HTMLElement).focus(); }
            if(event.code === 'End'){ (elemList.children[elemList.children.length-1] as HTMLElement).focus(); }
        };
    }

    // Classes
    const cBase: string = 'whitespace-nowrap space-y-1';
    let cSpacing: string = 'space-y-1';

    // Reactive Classes
    $: classes = `${cBase} ${cSpacing} ${$$props.class}`;
</script>

<svelte:element
    bind:this={elemList}
    this={tag}
    class="list-group {classes}"
    data-testid="list-group"
    on:keydown={onKeyDown}
    {role}
    aria-labelledby={labelledby}
    aria-multiselectable={Array.isArray($selected)}
>
    <slot />
</svelte:element>
