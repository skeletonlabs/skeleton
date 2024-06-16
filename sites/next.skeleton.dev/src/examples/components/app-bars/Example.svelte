<script lang="ts">
  import { AppBar } from '@skeletonlabs/skeleton-svelte';
  import ArrowLeft from 'lucide-svelte/icons/arrow-left';
  import Paperclip from 'lucide-svelte/icons/paperclip';
  import Calendar from 'lucide-svelte/icons/calendar';
  import CircleUser from 'lucide-svelte/icons/circle-user';
</script>

<AppBar>
  {#snippet lead()}
    <ArrowLeft size={24} />
  {/snippet}
  {#snippet trail()}
    <Paperclip size={20} />
    <Calendar size={20} />
    <CircleUser size={20} />
  {/snippet}
  {#snippet headline()}
    <h2 class="h2">Headline</h2>
  {/snippet}
</AppBar>
