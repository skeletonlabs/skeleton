<script lang="ts">
	import IconMoon from '@lucide/svelte/icons/moon';
	import IconSun from '@lucide/svelte/icons/sun';

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

<button class="btn-icon hover:preset-tonal" onclick={toggleDarkMode} title="Toggle dark mode." aria-label="Toggle dark mode.">
	{#if darkMode}
		<IconSun size={20} />
	{:else}
		<IconMoon size={20} />
	{/if}
</button>
