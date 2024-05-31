<script lang="ts">
	import Switch from '$lib/components/Switch/Switch.svelte';
	// Icons
	import IconX from 'lucide-svelte/icons/x';
	import IconCheck from 'lucide-svelte/icons/check';
	import IconMoon from 'lucide-svelte/icons/moon';
	import IconSun from 'lucide-svelte/icons/sun';
</script>

<div class="space-y-10">
	<header>
		<h1 class="h1">Switch</h1>
	</header>
	<section class="card p-4 space-y-4">
		<label class="label flex justify-between items-center gap-4" for="disturb">
			<p>Defaults to inactive state.</p>
			<Switch id="disturb" name="disturb" />
		</label>
		<hr class="hr" />
		<label class="label flex justify-between items-center gap-4" for="notifications">
			<p>Defaults to active state.</p>
			<Switch id="notifications" name="notifications" checked />
		</label>
		<hr class="hr" />
		<label class="label flex justify-between items-center gap-4" for="disabled">
			<p>Uses the disabled state.</p>
			<Switch id="disabled" name="disabled" disabled />
		</label>
		<hr class="hr" />
		<label class="label flex justify-between items-center gap-4" for="icons">
			<p>Custom Icons</p>
			<Switch id="icons" name="icons" stateActive="bg-secondary-500" checked>
				{#snippet inactiveChild()}<IconX size="14" />{/snippet}
				{#snippet activeChild()}<IconCheck size="14" />{/snippet}
			</Switch>
		</label>
		<hr class="hr" />
		<label class="label flex justify-between items-center gap-4" for="mode">
			<p>Lightswitch</p>
			<Switch id="mode" name="mode" stateActive="bg-surface-200">
				{#snippet inactiveChild()}<IconMoon size="14" />{/snippet}
				{#snippet activeChild()}<IconSun size="14" />{/snippet}
			</Switch>
		</label>
		<hr class="hr" />
		<label class="label flex justify-between items-center gap-4" for="compact">
			<p>Compact</p>
			<Switch id="compact" name="compact" compact width="w-9">
				{#snippet inactiveChild()}<IconMoon size="14" />{/snippet}
				{#snippet activeChild()}<IconSun size="14" />{/snippet}
			</Switch>
		</label>
	</section>
</div>
