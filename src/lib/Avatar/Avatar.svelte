<script lang="ts">
    export let img: string = null;
    export let rounded: boolean = false;
    export let size: String = 'small';
    export let cBase = 'flex justify-center items-center';

    export function makeStyle(){
        let style: string = '';
        if(rounded){
            style += 'rounded-full';
        }
        if(!img){
            style += ' bg-surface-400 dark:bg-surface-700';
        }
     
        switch(size){
            case('small'): { style += ' w-8 h-8 text-base'; break;}
            case('medium'): { style += ' w-12 h-12 text-lg'; break; }
            case('large'): { style += ' w-16 h-16 text-2xl'; break; }
            case('xlarge'): { style += ' w-24 h-24 text-4xl'; break; }
        }
        return style;
    }

</script>

<div on:click class="{cBase} {makeStyle()}">
    {#if img}
        <img src={img} alt="" class='rounded-full object-contain shadow-lg'>
    {:else}
        <p>A</p>
    {/if}
</div>

<style lang="postcss">

</style>