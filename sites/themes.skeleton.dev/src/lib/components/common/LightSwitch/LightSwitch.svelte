<script lang="ts">
	import { MoonIcon, SunIcon } from '@lucide/svelte';

	type Mode = 'dark' | 'light';

	const FALLBACK: Mode = 'light';

	let mode: Mode = $state(typeof window === 'undefined' ? FALLBACK : ((localStorage.getItem('mode') as Mode) ?? FALLBACK));

	function setMode(newMode: Mode) {
		document.documentElement.setAttribute('data-mode', newMode);
		localStorage.setItem('mode', newMode);
		mode = newMode;
	}
</script>

<svelte:head>
	<script>
		const FALLBACK_THEME = 'cerberus';

		function applyTheme() {
			const storedTheme = localStorage.getItem('theme');
			const theme = storedTheme ?? FALLBACK_THEME;
			document.documentElement.setAttribute('data-theme', theme);
		}

		const FALLBACK_MODE = 'light';

		function applyMode() {
			const storedMode = localStorage.getItem('mode');
			const preferredMode = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
			const mode = storedMode ?? preferredMode ?? FALLBACK_MODE;
			document.documentElement.setAttribute('data-mode', mode);
		}

		applyTheme();
		applyMode();
	</script>
</svelte:head>

<button
	class="btn-icon hover:preset-tonal"
	onclick={() => setMode(mode === 'dark' ? 'light' : 'dark')}
	role="switch"
	aria-checked={mode === 'dark'}
	title="Toggle dark mode."
	aria-label="Toggle dark mode."
>
	{#if mode === 'dark'}
		<MoonIcon class="size-5" />
	{:else}
		<SunIcon class="size-5" />
	{/if}
</button>
