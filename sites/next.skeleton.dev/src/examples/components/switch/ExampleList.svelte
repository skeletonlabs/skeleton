<script lang="ts">
	import { Switch } from '@skeletonlabs/skeleton-svelte';
</script>

<section class="w-full space-y-4">
	<label class="label flex justify-between items-center gap-4" for="inactive">
		<p>Default to the inactive state.</p>
		<Switch id="inactive" name="inactive" />
	</label>
	<hr class="hr" />
	<label class="label flex justify-between items-center gap-4" for="active">
		<p>Default to the active state.</p>
		<Switch id="active" name="active" checked />
	</label>
	<hr class="hr" />
	<label class="label flex justify-between items-center gap-4" for="disabled">
		<p>Shown in disabled mode.</p>
		<Switch id="disabled" name="disabled" disabled />
	</label>
</section>
