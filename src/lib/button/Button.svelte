<script lang="ts">
    // Style
    export let filled: boolean = false;
    export let outlined: boolean = false;
    export let text: boolean = false;
    // Colors
    export let primary: boolean = false;
    export let accent: boolean = false;
    // Disabled
    export let disabled: boolean = false;

    // Styles
    const defaultStyles: string = 'bg-[#141414] text-white py-2 px-4 text-center rounded-lg shadow transition-all hover:bg-black active:scale-95';
    const customStyle: any = [
        filled ? 'filled' : null,
        outlined ? 'outlined' : null,
        text ? 'text' : null,
        primary ? 'primary' : null,
        accent ? 'accent' : null,
    ].filter(n => n).join('-');

    // Anchors
    export let href: string = null;
</script>

{#if href}
    <a {href} class="{`${defaultStyles} ${customStyle}`}" {disabled}><slot /></a>
{:else}
    <button class="{`${defaultStyles} ${customStyle}`}" {disabled}><slot /></button>
{/if}

<style lang="postcss">
    /* Filled */
    .filled { @apply bg-surface-500 text-white hover:bg-surface-600; }
    .filled-primary { @apply bg-primary-500 hover:bg-primary-600; }
    .filled-accent  { @apply bg-accent-500 hover:bg-accent-600; }
    /* Outlined */
    .outlined { @apply bg-surface-500/10 text-surface-500 ring-1 ring-surface-500 ring-inset hover:bg-surface-500/20; }
    .outlined-primary { @apply bg-primary-500/10 text-primary-500 ring-1 ring-primary-500 ring-inset hover:bg-primary-500/20; }
    .outlined-accent { @apply bg-accent-500/10 text-accent-500 ring-1 ring-accent-500 ring-inset hover:bg-accent-500/20; }
    /* Text */
    .text { @apply bg-transparent text-surface-500 shadow-none hover:text-surface-400; }
        .text:disabled { @apply bg-transparent hover:bg-transparent !important; }
    .text-primary { @apply bg-transparent text-primary-500 shadow-none hover:text-primary-400; }
    .text-accent { @apply bg-transparent text-accent-500 shadow-none hover:text-accent-400; }
    /* Disabled */
    button:disabled {
        @apply bg-surface-500/10 text-surface-500/70 ring-0 cursor-not-allowed hover:bg-surface-500/10 !important;
    }
</style>
