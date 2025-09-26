<script lang="ts">
	import IconMoon from '@lucide/svelte/icons/moon';
	import IconSun from '@lucide/svelte/icons/sun';

	type Mode = 'dark' | 'light';

	const FALLBACK: Mode = 'light';

	let mode: Mode = $state(typeof window === 'undefined' ? FALLBACK : ((localStorage.getItem('mode') as Mode) ?? FALLBACK));

	function setMode(newMode: Mode) {
		document.documentElement.setAttribute('data-mode', newMode);
		localStorage.setItem('mode', newMode);
		mode = newMode;
	}
</script>

<button
	class="btn-icon hover:preset-tonal"
	onclick={() => setMode(mode === 'dark' ? 'light' : 'dark')}
	role="switch"
	aria-checked={mode === 'dark'}
	title="Toggle dark mode."
	aria-label="Toggle dark mode."
>
	{#if mode === 'dark'}
		<IconSun class="size-5" />
	{:else}
		<IconMoon class="size-5" />
	{/if}
</button>
