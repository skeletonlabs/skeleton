<script lang='ts'>
import { onMount } from "svelte";

export let dismissable: boolean = false;
export let actionMessage: string = 'ActionMessage';
export let outlined: boolean = false;
export let color: string = '';
export let actionFunction = null;

let style: string = '';

// Set the color of the alert/outline to style
if(outlined) {
    switch(color){
        case('primary'):    { style = 'border-2 border-primary-400 bg-white-500'; break; }
        case('accent'):     { style = 'border-2 border-accent-500 bg-white-500'; break; }
        case('caution'):    { style = 'border-2 border-yellow-300 bg-white-500'; break; }
        case('warning'):    { style = 'border-2 border-warning-400 bg-white-500'; break; }
        default:            { style = 'border-2 border-surface-500 bg-white-500'; break; }
    }
}
else {
    switch(color) {
    case('primary'):        { style = 'bg-primary-400'; break;}
    case('accent'):         { style = 'bg-accent-500'; break;}
    case('caution'):        { style = 'bg-yellow-300'; break;}
    case('warning'):        { style = 'bg-warning-400'; break;}
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

// Unsure if I want to keep this, instead of just inlining it. It's just there for the animation
// which I am also not sure if should be kept. Delete if agreeing.
export function dismiss(){
    animClass = 'disappear';
    setTimeout(()=>{
            visible = false;
    }, 250)
}

onMount(()=>{
    animClass = 'appear';
})

$: classes = `${cBase} ${animClass} ${cStyle} ${$$props.class}`;

</script>
<!-- Shown if visible -->
{#if visible}
<div data-testid='alert' on:click on:mouseover on:focus class='alert {classes}'>
    {#if $$slots.icon}
    <!-- Icon slot -->
    <div class='m-6 mb-1 mr-2 w-6 flex-row justify-center'>
        <slot name='icon'/>
    </div>
    {/if}

    <!-- Title + Message -->
    <div class='flex flex-col w-full justify-center'>
        {#if $$slots.title}
        <div data-testid='title-slot' class='m-4 ml-6 mb-2 font-semibold {textStyle}'>
            <slot name=title/>
        </div>
        {/if}

        {#if $$slots.message}
        <div data-testid='title-slot' class='m-4 ml-6 mt-0 mb-6 {textStyle}'>
            <slot name='message'/>
        </div>
        {/if}
    </div>

    <!-- Action Buttons -->
    <div class='flex flex-row'>
        {#if dismissable}
        <!-- Dismiss -->
        <div class='flex m-8 items-center hover:opacity-60 {textStyle}'>
            <button data-testid='dismissBtn' class='h-min font-semibold' on:click={dismiss}>Dismiss</button>
        </div>
        {/if}
        {#if actionFunction}
        <!-- Custom Action Button -->
        <div class='flex m-8 items-center hover:opacity-60 whitespace-nowrap {textStyle}'>
            <button data-testid='customActionBtn' class='h-min font-semibold' on:click={actionFunction}>{actionMessage}</button>
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