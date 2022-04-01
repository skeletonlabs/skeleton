<script lang='ts'>

export let dismissable: boolean = false;
export let title: string = 'Subscription Required';
export let message: string = 'This requires your attention.. Please do an action for blah blah blah... This is just a simple warning.. Nothing to be too concerned about.. Thanks and youre welcome';
export let actionMessage: string = 'ActionMessage';
export let variant: string = '';
export let actionFunction = null;

$: visible = true;
$: animClass = 'alert';

export function dismiss(){

    animClass = 'disappear';
    setTimeout(()=>{
            visible = false;
    }, 450)
}

</script>
{#if visible}
<div class=' alert {animClass} flex flex-col sm:flex-col md:flex-row lg:flex-row bg-white-500 rounded-lg border-2 border-primary-500'>
    {#if !$$slots.content}
    {#if $$slots.icon}
    <div class='dark:fill-stone-100 fill-black m-5'>
        <slot name='icon'/>
    </div>
    {/if}
    <div class='flex flex-col w-full'>
        <h5 class='m-4'>{title}</h5>
        <p class='m-4 mt-1 mb-6 text-primary-200'>{message}</p>
    </div>
    {:else}
    <slot name='content' />
    {/if}

    <div class='flex flex-row'>
        {#if dismissable}
        <div class='flex m-8 items-center text-accent-500 dark:hover:text-surface-600 hover:text-surface-400'>
            <button class='h-min'  on:click={dismiss}>Dismiss</button>
        </div>
        {/if}
        {#if actionFunction}
        <div class='flex m-8 items-center text-accent-500 dark:hover:text-surface-600 hover:text-surface-400'>
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