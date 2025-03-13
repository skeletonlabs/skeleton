<script lang="ts">
	import { Switch } from '@skeletonlabs/skeleton-svelte';
	// Icons
	import IconX from '@lucide/svelte/icons/x';
	import IconCheck from '@lucide/svelte/icons/check';
	import IconMoon from '@lucide/svelte/icons/moon';
	import IconSun from '@lucide/svelte/icons/sun';
	import IconSmile from '@lucide/svelte/icons/frown';
	import IconFrown from '@lucide/svelte/icons/smile';

	let disturb = $state(false);
	let notifications = $state(true);
	let disabled = $state(false);
	let icons = $state(true);
	let lightswitch = $state(false);
	let compact = $state(false);
</script>

<div class="space-y-10">
	<header>
		<h1 class="h1">Switch</h1>
	</header>
	<pre class="pre">{JSON.stringify({ disturb, notifications, disabled, icons, lightswitch, compact }, null, 2)}</pre>
	<section class="space-y-4 p-4">
		<Switch name="disturb" checked={disturb} onCheckedChange={(e) => (disturb = e.checked)}>
			<p>Defaults to inactive state.</p>
		</Switch>
		<hr class="hr" />
		<Switch name="notifications" checked={notifications} onCheckedChange={(e) => (notifications = e.checked)}>
			<p>Defaults to active state.</p>
		</Switch>
		<hr class="hr" />
		<Switch name="disabled" checked={disabled} onCheckedChange={(e) => (disabled = e.checked)} disabled>
			<p>Uses the disabled state.</p>
		</Switch>
		<hr class="hr" />
		<Switch name="icons" controlActive="bg-secondary-500" checked={icons} onCheckedChange={(e) => (icons = e.checked)}>
			{#snippet inactiveChild()}<IconX size="14" />{/snippet}
			{#snippet activeChild()}<IconCheck size="14" />{/snippet}
			<p>Custom Icons</p>
		</Switch>
		<hr class="hr" />
		<Switch name="mode" controlActive="bg-surface-200" checked={lightswitch} onCheckedChange={(e) => (lightswitch = e.checked)}>
			{#snippet inactiveChild()}<IconMoon size="14" />{/snippet}
			{#snippet activeChild()}<IconSun size="14" />{/snippet}
			<p>Lightswitch</p>
		</Switch>
		<hr class="hr" />
		<Switch name="compact" compact controlWidth="w-9" checked={compact} onCheckedChange={(e) => (compact = e.checked)}>
			{#snippet inactiveChild()}<IconSmile size="18" />{/snippet}
			{#snippet activeChild()}<IconFrown size="18" />{/snippet}
			<p>Compact</p>
		</Switch>
	</section>
</div>
