<script lang='ts'>
    import Divider from '$lib/Divider/Divider.svelte';
    import type {Writable} from 'svelte/store'
    import {setContext, onMount} from 'svelte';

    // Exported props
    export let variant = 'comfortable';
    export let hover: boolean = false;
    export let separate: boolean = false;
    export let selectable: boolean = false;
    export let multiselect: boolean = false;
    export let active: Writable<any> = null;

    // Declare element to be bound to list
    let element: HTMLElement;

    // On mount, add dividers between children if needed. Currently, no customization of dividers
    if(separate){
        onMount(()=>{
        let childrenCount = element.childElementCount;
        let children = element.children;
            for(let i = 0; i < childrenCount - 1; ++i){
                new Divider({target: children[i]});
            }
        })
    }

    // Component styling
    let cStyle = 'mt-1 mb-1'; // Note that a minor margin top and bottom is added to seperate selectable items.   

    // Add padding according to 
    switch(variant){
        case('comfortable'): { cStyle += ' pt-4 pb-4'; break;}
        case('compact'): { cStyle += ' pt-2 pb-2'; break;}
        case('dense'): { cStyle += ' pt-1 pb-1'; break;}
        default: {cStyle += ' pt-4 pb-4'} // Default
    }
    // Set hover style
    if(hover) {cStyle += ' dark:hover:bg-surface-700 hover:bg-surface-300 hover:cursor-pointer'}
    // Set cursor on selectable items
    if(selectable) {cStyle += ' hover:cursor-pointer'}

    // Set component contexts
    setContext('style', cStyle);
    setContext('selectable', selectable);
    setContext('active', active);
    setContext('multiselect', multiselect);

</script>

<div class='listGroup'>
    <ol bind:this={element}>
        <slot />
    </ol>
</div>