<script lang="ts">
	import { Switch } from '@skeletonlabs/skeleton-svelte';

	let checked = $state(false);
</script>

<Switch {checked} onCheckedChange={(e) => (checked = e.checked)}>
	<Switch.Control>
		<Switch.Thumb />
	</Switch.Control>
	<Switch.Label>Label</Switch.Label>
	<Switch.HiddenInput />
</Switch>
