<script lang="ts">
  import { ProgressRing } from '@skeletonlabs/skeleton-svelte';
  import IconThermometer from 'lucide-svelte/icons/thermometer-sun';
</script>

<ProgressRing value={60} max={100} meterStroke="stroke-error-500" strokeLinecap="butt">
  <IconThermometer size={48} />
</ProgressRing>
