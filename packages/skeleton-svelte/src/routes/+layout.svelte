<script lang="ts">
	import '../app.pcss';
	// Components
	import ToastProvider from '$lib/components/Toast/ToastProvider.svelte';
	import Switch from '$lib/components/Switch/Switch.svelte';
	// Icons
	import IconMoon from 'lucide-svelte/icons/moon';
	import IconSun from 'lucide-svelte/icons/sun';

	let { children } = $props();
	let modeState = $state(false); // false = dark mode

	function onModeChange() {
		document.documentElement.classList.toggle('dark');
	}
</script>

<ToastProvider>
	<!-- grid-cols-[320px_minmax(0,_1fr)] -->
	<div class="grid h-screen">
		<!-- Page -->
		<main class="space-y-8 overflow-y-auto p-8">
			{@render children?.()}
		</main>
	</div>
</ToastProvider>
