<script lang="ts">
	import IconSun from 'lucide-svelte/icons/sun';
	import IconMoon from 'lucide-svelte/icons/moon';

	let darkMode = $state(true);

	function toggleDarkMode() {
		darkMode = !darkMode;
		darkMode ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark');
	}
</script>

<button class="btn btn-icon preset-outlined-surface-200-800 hover:preset-tonal" onclick={toggleDarkMode}>
	{#if darkMode}
		<IconSun size={18} />
	{:else}
		<IconMoon size={18} />
	{/if}
</button>
