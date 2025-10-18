<script lang="ts">
	import { Switch } from '@skeletonlabs/skeleton-svelte';
</script>

<Switch>
	<Switch.Control class="data-[state=checked]:preset-filled-success-500">
		<Switch.Thumb />
	</Switch.Control>
	<Switch.HiddenInput />
</Switch>
