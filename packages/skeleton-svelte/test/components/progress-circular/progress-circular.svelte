<script lang="ts">
	import { ProgressCircular } from '@/index';
</script>

<ProgressCircular data-testid="root">
	<ProgressCircular.Label data-testid="label" />
	<ProgressCircular.Circle data-testid="circle">
		<ProgressCircular.Range data-testid="range" />
		<ProgressCircular.Track data-testid="track" />
	</ProgressCircular.Circle>
	<ProgressCircular.ValueText data-testid="value-text" />
</ProgressCircular>
