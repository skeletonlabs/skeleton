<script lang="ts">
	import { Switch } from '@skeletonlabs/skeleton-svelte';

	let disturb = $state(false);
	let notifications = $state(true);
	let disabled = $state(false);
</script>

<section class="w-full space-y-4">
	<div class="flex justify-between items-center gap-4">
		<p>Default to the inactive state.</p>
		<Switch name="disturb" bind:checked={disturb}></Switch>
	</div>
	<hr class="hr" />
	<div class="flex justify-between items-center gap-4">
		<p>Default to the active state.</p>
		<Switch name="notifications" bind:checked={notifications}></Switch>
	</div>
	<hr class="hr" />
	<div class="flex justify-between items-center gap-4">
		<p>Shown in disabled mode.</p>
		<Switch name="disabled" bind:checked={disabled} disabled></Switch>
	</div>
</section>
