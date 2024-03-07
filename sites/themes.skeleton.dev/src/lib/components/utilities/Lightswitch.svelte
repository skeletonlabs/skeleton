<script lang="ts">
	import IconSun from 'lucide-svelte/icons/sun';
	import IconMoon from 'lucide-svelte/icons/moon';

	let darkMode = $state(true);

	function toggleDarkMode() {
		darkMode = !darkMode;
		darkMode ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark');
	}
</script>

<button class="btn btn-lg preset-outlined-surface-200-800" onclick={toggleDarkMode}>
	{#if darkMode}
		<IconSun size={20} />
	{:else}
		<IconMoon size={20} />
	{/if}
</button>
