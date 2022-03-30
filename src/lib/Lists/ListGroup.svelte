<script lang='ts'>
    import Divider from '$lib/Divider/Divider.svelte';

    export let variant = 'comfortable';
    export let hover: boolean = false;
    export let separate: boolean = false;
    export let selectable: boolean = false;

    let element: HTMLElement;
    import {setContext, onMount} from 'svelte';

    // On mount,
    if(separate){
        onMount(()=>{
        let childrenCount = element.childElementCount;
        let children = element.children;
            for(let i = 0; i < childrenCount - 1; ++i){
                new Divider({target: children[i]});
            }
        })
    }

    let cStyle = '';    

    switch(variant){
        case('comfortable'): { cStyle += ' pt-4 pb-4'; break;}
        case('compact'): { cStyle += ' pt-2 pb-2'; break;}
        case('dense'): { cStyle += ' pt-1 pb-1'; break;}
    }
    if(hover) {cStyle += ' dark:hover:bg-surface-700 hover:bg-surface-300 hover:cursor-pointer'}

    setContext('style', cStyle);
    setContext('selectable', selectable);


</script>

<div class='listGroup'>
    <ol bind:this={element}>
        <slot />
    </ol>
</div>