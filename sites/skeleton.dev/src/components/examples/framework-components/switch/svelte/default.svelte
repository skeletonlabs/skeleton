<script lang="ts">
	import { Switch } from '@skeletonlabs/skeleton-svelte';

	let checked = $state(false);
</script>

<div class="flex flex-col items-center gap-4">
	<Switch {checked} onCheckedChange={(details) => (checked = details.checked)}>
		<Switch.Control>
			<Switch.Thumb />
		</Switch.Control>
		<Switch.Label>Label</Switch.Label>
		<Switch.HiddenInput />
	</Switch>
	<p>
		<span class="opacity-60">You selected</span> <code class="code">{checked}</code>
	</p>
</div>
