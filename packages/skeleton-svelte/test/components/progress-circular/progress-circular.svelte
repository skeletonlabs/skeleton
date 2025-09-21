<script lang="ts">
	import { ProgressLinear } from '@/index';
</script>

<ProgressLinear data-testid="root">
	<ProgressLinear.Label data-testid="label" />
	<ProgressLinear.Circle data-testid="circle">
		<ProgressLinear.Range data-testid="range" />
		<ProgressLinear.Track data-testid="track" />
	</ProgressLinear.Circle>
</ProgressLinear>
