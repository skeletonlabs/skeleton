<script lang="ts">
    import { AppBar } from '@skeletonlabs/skeleton-svelte';
    import ArrowLeft from 'lucide-svelte/icons/arrow-left';
    import Paperclip from 'lucide-svelte/icons/paperclip';
    import Calendar from 'lucide-svelte/icons/calendar';
    import CircleUser from 'lucide-svelte/icons/circle-user';

    let {} = $props<any>()
</script>

<AppBar>
	{#snippet lead()}
        <ArrowLeft size={24} />
	{/snippet}
	{#snippet trail()}
        <Paperclip size={24} />
        <Calendar size={24} />
        <CircleUser size={24} />
	{/snippet}
	{#snippet headline()}
		<h2 class="h2">Headline</h2>
	{/snippet}
</AppBar>