<script lang="ts">
    import { AppBar } from '@skeletonlabs/skeleton-svelte';
    import ArrowLeft from 'lucide-svelte/icons/arrow-left';
    import Paperclip from 'lucide-svelte/icons/paperclip';
    import Calendar from 'lucide-svelte/icons/calendar';
    import CircleUser from 'lucide-svelte/icons/circle-user';
    import Menu from 'lucide-svelte/icons/menu';

    // FIXME: required for Astro bug
    let {} = $props<any>()
</script>

<AppBar headlineClasses="sm:hidden">
	{#snippet lead()}
        <ArrowLeft size={24} />
	{/snippet}
    <span class="hidden sm:block">Title</span>
    {#snippet trail()}
        <div class="hidden sm:flex space-x-4">
            <Paperclip size={20} />
            <Calendar size={20} />
            <CircleUser size={20} />
        </div>
        <div class="block sm:hidden">
            <Menu size={20} />
        </div>
    {/snippet}
	{#snippet headline()}
        <h2 class="h2">Title</h2>
    {/snippet}
</AppBar>