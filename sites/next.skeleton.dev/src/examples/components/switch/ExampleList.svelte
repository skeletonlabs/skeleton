<script lang="ts">
	import { Switch } from '@skeletonlabs/skeleton-svelte';

	let disturb = $state(false);
	let notifications = $state(true);
	let disabled = $state(false);
</script>

<section class="w-full space-y-4">
	<div class="flex items-center justify-between gap-4">
		<p>Default to the inactive state.</p>
		<Switch name="disturb" checked={disturb} onCheckedChange={(e) => (disturb = e.checked)}></Switch>
	</div>
	<hr class="hr" />
	<div class="flex items-center justify-between gap-4">
		<p>Default to the active state.</p>
		<Switch name="notifications" checked={notifications} onCheckedChange={(e) => (notifications = e.checked)}></Switch>
	</div>
	<hr class="hr" />
	<div class="flex items-center justify-between gap-4">
		<p>Shown in disabled mode.</p>
		<Switch name="disabled" checked={disabled} onCheckedChange={(e) => (disabled = e.checked)} disabled></Switch>
	</div>
</section>
