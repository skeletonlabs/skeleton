<script lang="ts">
	import Switch from '$lib/components/Switch/Switch.svelte';
</script>

<div class="space-y-10">
	<header>
		<h1 class="h1">Switch</h1>
	</header>
	<section class="card p-4 space-y-4">
		<label class="label flex justify-between gap-4" for="disturb">
			<p>Defaults to inactive state.</p>
			<Switch id="disturb" name="disturb" />
		</label>
		<hr class="hr" />
		<label class="label flex justify-between gap-4" for="notifications">
			<p>Defaults to active state.</p>
			<Switch id="notifications" name="notifications" checked />
		</label>
		<hr class="hr" />
		<label class="label flex justify-between gap-4" for="disabled">
			<p>Uses the disabled state.</p>
			<Switch id="disabled" name="disabled" disabled />
		</label>
		<hr class="hr" />
		<label class="label flex justify-between gap-4" for="disabled">
			<p>Custom Icons</p>
			<Switch id="disabled" name="disabled" stateActive="bg-secondary-500" checked />
		</label>
	</section>
</div>
