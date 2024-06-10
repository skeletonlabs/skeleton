<script lang="ts">
	import { ProgressRing } from '@skeletonlabs/skeleton-svelte';
	import IconThermometer from 'lucide-svelte/icons/thermometer-sun';

	let value = $state(60);
	let max = 100;
</script>

<ProgressRing {value} {max} meterStroke="stroke-error-500" strokeLinecap="butt">
	<IconThermometer size={48} />
</ProgressRing>
