<script lang="ts">
    import { page } from '$app/stores';
    import { createEventDispatcher } from 'svelte';

    import Divider from '$lib/Divider/Divider.svelte';

    export let navigation: any = [
        {
            title: 'Docs',
            list: [
                {href: '/', label: 'Get Started'},
                {href: '/docs/themes', label: 'Themes'},
            ],
        },
        {
            title: 'Components',
            list: [
                {href: '/components/avatars', label: 'Avatars'},
                {href: '/components/breadcrumbs', label: 'Breadcrumb'},
                {href: '/components/buttons', label: 'Buttons'},
                {href: '/components/cards', label: 'Cards'},
                {href: '/components/dividers', label: 'Dividers'},
                {href: '/components/gradient-headings', label: 'Gradient Heading'},
                {href: '/components/logo-clouds', label: 'Logo Clouds'},
                {href: '/components/progress-bars', label: 'Progress Bars'},
                {href: '/components/radio-groups', label: 'Radio Groups'},
            ],
        },
        {
            title: 'Utilities',
            list: [
                {href: '/utilities/filters', label: 'Filters (beta)'},
            ],
        }
    ];
    const dispatch = createEventDispatcher();

    const cBase: string = 'w-[320px] border-r border-surface-200 py-8 space-y-8 bg-surface-50 dark:bg-surface-900 h-screen overflow-y-auto dark:border-surface-800';

    $: classes = `${cBase} ${$$props.class}`;
</script>

<div class="drawer {classes}">

    <!-- Icon -->
    {#if $$slots.header}
        <header class="mx-8"><slot name="header"></slot></header>
        <Divider />
    {/if}

    <!-- Navigation -->
    {#each navigation as {title,list}, i }
    <section class="space-y-4">
        <small class="text-sm text-primary-500 px-8">{title}</small>
        <nav>
            {#each list as {href,label} }
            <a
                {href}
                class="block text-base px-8 py-4 hover:bg-primary-500/10"
                class:active={$page.url.pathname == href}
                on:click={() => { dispatch('close') }}
            >{label}</a>
            {/each}
        </nav>
    </section>
    {#if i+1 < navigation.length}<Divider />{/if}
    {/each}

</div>

<style lang="postcss">
    .active { @apply bg-primary-500 !important; }
</style>
