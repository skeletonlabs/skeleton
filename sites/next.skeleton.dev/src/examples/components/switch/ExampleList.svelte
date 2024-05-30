<script lang="ts">
	import { Switch } from '@skeletonlabs/skeleton-svelte';
</script>

<section class="card p-4 space-y-4 w-full">
	<label class="label flex justify-between items-center gap-4" for="inactive">
		<p>Defaults to inactive state.</p>
		<Switch id="inactive" name="inactive" />
	</label>
	<hr class="hr" />
	<label class="label flex justify-between items-center gap-4" for="active">
		<p>Defaults to active state.</p>
		<Switch id="active" name="active" checked />
	</label>
	<hr class="hr" />
	<label class="label flex justify-between items-center gap-4" for="disabled">
		<p>Set to disabled.</p>
		<Switch id="disabled" name="disabled" disabled />
	</label>
</section>
