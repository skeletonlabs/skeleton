<script lang="ts">
  import ProgressRing from '$lib/components/ProgressRing/ProgressRing.svelte';
  import IconThermometer from 'lucide-svelte/icons/thermometer-sun';

  let value = $state(60);
  let max = $state(100);
</script>

<div class="space-y-10">
  <header>
    <h1 class="h1">Progress Ring</h1>
  </header>
  <section class="grid grid-cols-2 gap-4">
    <label class="label">
      <span class="label-text">Value</span>
      <input class="input" type="number" bind:value />
    </label>
    <label class="label">
      <span class="label-text">Max</span>
      <input class="input" type="number" bind:value={max} />
    </label>
  </section>
  <section class="space-y-4">
    <ProgressRing {value} {max} />
  </section>
  <section class="space-y-4">
    <h2 class="h2">Icons</h2>
    <ProgressRing {value} {max} meterStroke="stroke-error-500">
      <IconThermometer size={48} />
    </ProgressRing>
  </section>
  <section class="space-y-4">
    <h2 class="h2">Indeterminate</h2>
    <ProgressRing meterStroke="stroke-tertiary-600-400" trackStroke="stroke-tertiary-50-950" />
  </section>
</div>
