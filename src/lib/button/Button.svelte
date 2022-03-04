<script lang="ts">
    export let display: string = '';
    export let color: string = '';

    const styleKey: any = [display, color].filter(n => n).join('-'); // ex: 'filled-primary'
    let cActive: string;

    // Define Base Classes
    const cBase = `text-base text-center py-2.5 px-5 rounded-lg transition-all active:scale-95`;

    // Set Active Classes
    switch(styleKey) {
        // Filled
        case('filled'):
            cActive = `
                bg-surface-800 text-surface-50 hover:bg-surface-900
                dark:bg-surface-50 dark:text-surface-900 dark:hover:bg-surface-300
            `;
            break;
        case('filled-primary'): cActive = `text-surface-50 bg-primary-500 hover:bg-primary-600`; break;
        case('filled-accent'): cActive = `text-surface-50 bg-accent-500 hover:bg-accent-600`; break;
        case('filled-warning'): cActive = `text-surface-50 bg-warning-500 hover:bg-warning-600`; break;
        // Outlined:
        case('outlined'):
            cActive = `
                bg-surface-800/10 text-surface-900 ring-1 ring-surface-900 ring-inset hover:bg-surface-900/10
                dark:bg-surface-50/10 dark:text-surface-50 dark:ring-surface-50 dark:hover:bg-surface-300/10
            `;
            break;
        case('outlined-primary'): cActive = `bg-primary-500/10 text-primary-500 ring-1 ring-primary-500 ring-inset hover:bg-primary-600/10`; break;
        case('outlined-accent'): cActive = `bg-accent-500/10 text-accent-500 ring-1 ring-accent-500 ring-inset hover:bg-accent-600/10`; break;
        case('outlined-warning'): cActive = `bg-warning-500/10 text-warning-500 ring-1 ring-warning-500 ring-inset hover:bg-warning-600/10`; break;
        // Text:
        case('text'):
            cActive = `
                bg-transparent text-surface-800 shadow-none hover:bg-transparent hover:text-surface-900
                dark:text-surface-50 dark:hover:text-surface-300
            `;
        break;
        case('text-primary'): cActive = `bg-transparent text-primary-500 shadow-none hover:bg-transparent hover:text-primary-600`; break;
        case('text-accent'): cActive = `bg-transparent text-accent-500 shadow-none hover:bg-transparent hover:text-accent-600`; break;
        case('text-warning'): cActive = `bg-transparent text-warning-500 shadow-none hover:bg-transparent hover:text-warning-600`; break;
        // Default
        default: cActive = `bg-black text-white`;
    }

    // Maintain the current state of styles
    $: classes = `${cBase} ${cActive} ${$$props.class}`;
</script>

{#if $$props.href}
    <a
        class="{classes}"
        href={$$props.href} 
        target={$$props.target}
        disabled={$$props.disabled}
        on:click
        on:mouseover
        on:focus
    ><slot /></a>
{:else}
    <button
        class="{classes}"
        disabled={$$props.disabled}
        type={$$props.type}
        name={$$props.name}
        id={$$props.id}
        on:click
        on:mouseover
        on:focus
    ><slot /></button>
{/if}

<style lang="postcss">
    button:disabled { @apply opacity-10 cursor-not-allowed !important; }
</style>
