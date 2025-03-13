<script lang="ts">
	import IconSun from '@lucide/svelte/icons/sun';
	import IconMoon from '@lucide/svelte/icons/moon';

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

<button class="btn-icon hover:preset-tonal" onclick={toggleDarkMode}>
	{#if darkMode}
		<IconSun size={20} />
	{:else}
		<IconMoon size={20} />
	{/if}
</button>
