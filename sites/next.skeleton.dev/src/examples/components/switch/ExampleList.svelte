<script lang="ts">
	import { Switch } from '@skeletonlabs/skeleton-svelte';
</script>

<section class="w-full space-y-4">
	<Switch name="inactive">
		<p>Default to the inactive state.</p>
	</Switch>
	<hr class="hr" />
	<Switch name="active" checked>
		<p>Default to the active state.</p>
	</Switch>
	<hr class="hr" />
	<Switch name="disabled" disabled>
		<p>Shown in disabled mode.</p>
	</Switch>
</section>
