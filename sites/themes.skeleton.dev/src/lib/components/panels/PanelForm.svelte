<script lang="ts">
  // Icons
  import IconColors from 'lucide-svelte/icons/palette';
  import IconTypography from 'lucide-svelte/icons/a-large-small';
  import IconSpacing from 'lucide-svelte/icons/scaling';
  import IconEdges from 'lucide-svelte/icons/box-select';
  import IconDisplay from 'lucide-svelte/icons/monitor';
  // Fieldsets
  import Colors from '$lib/components/fieldsets/Colors.svelte';
  import Typography from '$lib/components/fieldsets/Typography.svelte';
  import Spacing from '$lib/components/fieldsets/Spacing.svelte';
  import Edges from '$lib/components/fieldsets/Edges.svelte';
  import Display from '$lib/components/fieldsets/Display.svelte';
  // Components
  import Lightswitch from '$lib/components/utilities/Lightswitch.svelte';

  // Reactive State
  let category = $state('colors');

  function setCategory(value: string) {
    category = value;
  }

  function activeCategory(value: string) {
    return category === value ? 'preset-filled-primary-500' : 'hover:preset-tonal';
  }
</script>

<form>
  <!-- Header -->
  <header class="border-surface-200-800 sticky top-0 z-10 space-y-4 border-b bg-black/0 p-4 !py-4 backdrop-blur-2xl md:p-8">
    <section class="flex items-center gap-4">
      <!-- Form Select -->
      <nav class="btn-group preset-outlined-surface-200-800 grid w-full grid-cols-5 p-2 md:flex-row">
        <button type="button" class="btn {activeCategory('colors')}" onclick={() => setCategory('colors')} title="Colors">
          <IconColors size={20} />
        </button>
        <button type="button" class="btn {activeCategory('typography')}" onclick={() => setCategory('typography')} title="Typography">
          <IconTypography size={24} />
        </button>
        <button type="button" class="btn {activeCategory('spacing')}" onclick={() => setCategory('spacing')} title="Spacing">
          <IconSpacing size={20} />
        </button>
        <button type="button" class="btn {activeCategory('edges')}" onclick={() => setCategory('edges')} title="Edges">
          <IconEdges size={20} />
        </button>
        <button type="button" class="btn {activeCategory('display')}" onclick={() => setCategory('display')} title="display">
          <IconDisplay size={20} />
        </button>
      </nav>
      <!-- Lighswitch -->
      <Lightswitch />
    </section>
  </header>
  <!-- Fieldsets -->
  <div class="p-4 md:p-8">
    {#if category === 'colors'}<Colors />{/if}
    {#if category === 'typography'}<Typography />{/if}
    {#if category === 'spacing'}<Spacing />{/if}
    {#if category === 'edges'}<Edges />{/if}
    {#if category === 'display'}<Display />{/if}
  </div>
</form>
