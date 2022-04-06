<script lang='ts'>
import { onMount } from "svelte";

export let dismissable: boolean = false;
export let actionMessage: string = 'ActionMessage';
export let outlined: boolean = false;
export let color: string = '';
export let actionFunction = null;

let style: string = '';

// Set the color of the alert
if(outlined) {
    switch(color){
        case('primary'):    { style = 'border-2 border-primary-500 bg-white-500'; break; }
        case('accent'):     { style = 'border-2 border-accent-500 bg-white-500'; break; }
        case('caution'):    { style = 'border-2 border-orange-500 bg-white-500'; break; }
        case('warning'):      { style = 'border-2 border-warning-500 bg-white-500'; break; }
        default:            { style = 'border-2 border-surface-500 bg-white-500'; break; }
    }
}
else {
    switch(color) {
    case('primary'):        { style = 'bg-primary-400'; break;}
    case('accent'):         { style = 'bg-accent-500'; break;}
    case('warning'):        { style = 'bg-orange-300'; break;}
    case('error'):          { style = 'bg-warning-400'; break;}
    default: {
            if(!color) { style = 'bg-surface-300 dark:bg-surface-900'; break;}
            else { style = color; }
        }
    }
}

$: visible = true;
$: animClass = 'alert';
$: cBase = 'flex flex-col sm:flex-col md:flex-row lg:flex-row rounded-lg';
$: cStyle = style;
$: textStyle = color && !outlined ? '!text-surface-900' : '';

// Dismiss function - Should be callable from outside this scope if needed by maybe an eventDispatch
export function dismiss(){
    animClass = 'disappear';
    setTimeout(()=>{
            visible = false;
    }, 250)
}

onMount(()=>{
    animClass = 'appear';
})

$: classes = `${cBase} ${animClass} ${cStyle} ${$$props.class}`

</script>
<!-- Shown if visible -->
{#if visible}
<div on:click on:mouseover on:focus class='alert {classes}'>
    {#if $$slots.icon}
    <!-- Icon slot -->
    <div class='ml-6 mt-6 w-6 '>
        <slot name='icon'/>
    </div>
    {/if}

    <!-- Title + Message -->
    <div class='flex flex-col w-full'>
        <div class='m-4 ml-8 mt-6 font-semibold {textStyle}'>
            <slot name=title/>
        </div>

        <div class='m-4 ml-8 mt-2 mb-6 {textStyle}'>
            <slot name='message'/>
        </div>
    </div>

    <!-- Action Buttons -->
    <div class='flex flex-row'>
        {#if dismissable}
        <!-- Dismiss -->
        <div class='flex m-8 items-center hover:opacity-60 {textStyle}'>
            <button class='h-min font-semibold' on:click={dismiss}>Dismiss</button>
        </div>
        {/if}
        {#if actionFunction}
        <!-- Custom Action Button -->
        <div class='flex m-8 items-center hover:opacity-60 whitespace-nowrap {textStyle}'>
            <button class='h-min font-semibold' on:click={actionFunction}>{actionMessage}</button>
        </div>
        {/if}
    </div>
      
</div>
{/if}

<style>
    @keyframes appear{
        from{
            opacity: 0%;
            -webkit-transform: scale(0.8);
        }
        to{
            opacity: 100%;
            -webkit-transform: scale(1.0);
        }
    }
    @keyframes disappear{
        from{
            opacity: 100%;
            -webkit-transform: scale(1.0);
        }
        
        to{
            opacity: 0%;
            -webkit-transform: scale(0.9);
        }
    }

    .appear{
        animation: appear;
        animation-duration: 0.1s;
    }

    .disappear{
        animation: disappear;
        animation-duration: 0.3s;
    }
</style>