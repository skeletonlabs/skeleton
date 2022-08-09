<script lang='ts'>
    import { setContext, onMount } from 'svelte';
    import type { Writable } from 'svelte/store';

    // Props
    export let tag: string = 'ul';
    export let selected: Writable<any> = undefined; // (store)
    export let highlight: string = '!bg-primary-500'; // '!' required
    export let hover: string = 'hover:bg-primary-500/10'; // 'hover:' required
    // A11y
    export let label: string = 'list';

    // Context
    setContext('parentTag', tag);
    setContext('selected', selected);
    setContext('highlight', highlight);
    setContext('hover', hover);

    // Handle Home/End Input
    let elemList: HTMLElement;
    onMount(() => {
        elemList.addEventListener('keydown', (event: any) => {
            if (['Home', 'End'].includes(event.code)) {
                event.preventDefault();
                if(event.code === 'Home'){ (elemList.children[0] as HTMLElement).focus(); }
                if(event.code === 'End'){ (elemList.children[elemList.children.length-1] as HTMLElement).focus(); }
            };
        });
    });

    // Classes
    const cBase: string = 'whitespace-nowrap space-y-1';
    let cSpacing: string = 'space-y-1';

    // Reactive Classes
    $: classes = `${cBase} ${cSpacing} ${$$props.class}`;
</script>

<svelte:element
    bind:this={elemList}
    this={tag}
    class="list-group
    {classes}"
    data-testid="list-group"
    role="menu"
    {label}
    tabindex="-1"
>
    <slot />
</svelte:element>
