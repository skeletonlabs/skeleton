<script lang='ts'>

export let dismissable: boolean = false;
export let title: string = 'Title required..';
export let message: string = 'Body text goes here!';
export let actionMessage: string = 'ActionMessage';
export let outlined: boolean = false;
export let color: string = '';
export let actionFunction = null;

let style;
// Set the color of the alert
if(outlined){
    switch(color){
        case('primary'): { style = 'border-2 border-primary-500 bg-white-500'; break;}
        case('accent'): { style = 'border-2 border-primary-500 bg-white-500'; break;}
        case('warning'): { style = 'border-2 border-primary-500 bg-white-500'; break;}
        case('error'): { style = 'border-2 border-primary-500 bg-white-500'; break;}
        default: { style = 'border-2 border-surface-500 bg-white-500'; break;}
    }
}
else{
    switch(color){
    case('primary'): { style = 'bg-primary-400'; break;}
    case('accent'): { style = 'bg-accent-500'; break;}
    case('warning'): { style = 'bg-orange-300'; break;}
    case('error'): { style = 'bg-warning-400'; break;}
    default: { style = 'bg-surface-200 dark:bg-surface-800'; break;}
}
}

$: visible = true;
$: animClass = 'alert';
$: cBase = 'flex flex-col sm:flex-col md:flex-row lg:flex-row rounded-lg';
$: cStyle = style;
$: textStyle = color && !outlined ? '!text-surface-900' : '';


// Dismiss function - Should be callable from outside this scope
export function dismiss(){
    animClass = 'disappear';
    setTimeout(()=>{
            visible = false;
    }, 450)
}

$: classes = `${cBase} ${animClass} ${cStyle} ${$$props.class}`

</script>
<!-- Shown if visible -->
{#if visible}
<div class='alert {classes}'>
    {#if !$$slots.content}
        {#if $$slots.icon}
        <!-- Icon slot -->
        <div class='dark:fill-stone-100 fill-black m-5 w-8'>
            <slot name='icon'/>
        </div>
        {/if}
        <!-- Title + Message -->
        <div class='flex flex-col w-full {textStyle}'>
            <h5 class='m-4'>{title}</h5>
            <p class='m-4 mt-1 mb-6 text-surface-700 dark:text-surface-200 {textStyle}'>{message}</p>
        </div>
    {:else}
    <!-- Slotted content -->
    <div class='flex flex-col w-full'>
        <slot name='content' />
    </div>
    {/if}

    <!-- Action Buttons -->
    <div class='flex flex-row'>
        {#if dismissable}
        <!-- Dismiss -->
        <div class='flex m-8 items-center hover:opacity-60 {textStyle}'>
            <button class='h-min'  on:click={dismiss}>Dismiss</button>
        </div>
        {/if}
        {#if actionFunction}
        <!-- Custom Action Button -->
        <div class='flex m-8 items-center hover:opacity-60 {textStyle}'>
            <button class='h-min' on:click={actionFunction}>{actionMessage}</button>
        </div>
        {/if}
    </div>
</div>
{/if}

<style>
    @keyframes appear{
        from{
            opacity: 0%;
        }
        to{
            opacity: 100%;
        }
    }
    @keyframes disappear{
        from{
            opacity: 100%;
            -webkit-transform: scale(1.0);
        }
        
        to{
            opacity: 0%;
            -webkit-transform: scale(0.8);
        }
    }

    .alert{
        animation: appear;
        animation-duration: 0.1s;
    }

    .disappear{
        animation: disappear;
        animation-duration: 0.5s;
    }
</style>