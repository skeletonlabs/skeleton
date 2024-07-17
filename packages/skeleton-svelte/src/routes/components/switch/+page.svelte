<script lang="ts">
	import Switch from '$lib/components/Switch/Switch.svelte';
	// Icons
	import IconCheck from 'lucide-svelte/icons/check';
	import IconSmile from 'lucide-svelte/icons/frown';
	import IconMoon from 'lucide-svelte/icons/moon';
	import IconFrown from 'lucide-svelte/icons/smile';
	import IconSun from 'lucide-svelte/icons/sun';
	import IconX from 'lucide-svelte/icons/x';

	let disturb = false;
	let notifications = true;
	let disabled = false;
	let icons = true;
	let lightswitch = false;
	let compact = false;
</script>

<div class="space-y-10">
	<header>
		<h1 class="h1">Switch</h1>
	</header>
	<pre class="pre">{JSON.stringify({ disturb, notifications, disabled, icons, lightswitch, compact }, null, 2)}</pre>
	<section class="space-y-4 p-4">
		<label class="label flex items-center justify-between gap-4" for="disturb">
			<p>Defaults to inactive state.</p>
			<Switch id="disturb" name="disturb" checked={disturb} onchange={() => (disturb = !disturb)} />
		</label>
		<hr class="hr" />
		<label class="label flex items-center justify-between gap-4" for="notifications">
			<p>Defaults to active state.</p>
			<Switch id="notifications" name="notifications" checked={notifications} onchange={() => (notifications = !notifications)} />
		</label>
		<hr class="hr" />
		<label class="label flex items-center justify-between gap-4" for="disabled">
			<p>Uses the disabled state.</p>
			<Switch id="disabled" name="disabled" disabled checked={disabled} onchange={() => (disabled = !disabled)} />
		</label>
		<hr class="hr" />
		<label class="label flex items-center justify-between gap-4" for="icons">
			<p>Custom Icons</p>
			<Switch id="icons" name="icons" stateActive="bg-secondary-500" checked={icons} onchange={() => (icons = !icons)}>
				{#snippet inactiveChild()}<IconX size="14" />{/snippet}
				{#snippet activeChild()}<IconCheck size="14" />{/snippet}
			</Switch>
		</label>
		<hr class="hr" />
		<label class="label flex items-center justify-between gap-4" for="mode">
			<p>Lightswitch</p>
			<Switch id="mode" name="mode" stateActive="bg-surface-200" checked={lightswitch} onchange={() => (lightswitch = !lightswitch)}>
				{#snippet inactiveChild()}<IconMoon size="14" />{/snippet}
				{#snippet activeChild()}<IconSun size="14" />{/snippet}
			</Switch>
		</label>
		<hr class="hr" />
		<label class="label flex items-center justify-between gap-4" for="compact">
			<p>Compact</p>
			<Switch id="compact" name="compact" compact width="w-9" checked={compact} onchange={() => (compact = !compact)}>
				{#snippet inactiveChild()}<IconSmile size="18" />{/snippet}
				{#snippet activeChild()}<IconFrown size="18" />{/snippet}
			</Switch>
		</label>
	</section>
</div>
