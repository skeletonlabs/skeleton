<script lang="ts">
	import IconSun from '@lucide/svelte/icons/sun';
	import IconMoon from '@lucide/svelte/icons/moon';
	import type { LightswitchProps } from './types';

	const { title = 'Toggle dark mode.', ariaLabel = 'Toggle dark mode.' }: LightswitchProps = $props();

	let darkMode = $state(true);

	function toggleDarkMode() {
		darkMode = !darkMode;
		if (darkMode) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}
</script>

<button class="btn-icon hover:preset-tonal" onclick={toggleDarkMode} {title} aria-label={ariaLabel}>
	{#if darkMode}
		<IconSun size={20} />
	{:else}
		<IconMoon size={20} />
	{/if}
</button>
