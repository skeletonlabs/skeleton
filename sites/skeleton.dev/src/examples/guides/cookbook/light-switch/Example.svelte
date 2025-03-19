<script lang="ts">
	// Import the Switch component
	import { Switch } from '@skeletonlabs/skeleton-svelte';

	// Define a `checked` state to store the current mode.
	let checked = $state(typeof window === 'undefined' ? false : localStorage.getItem('mode') === 'dark');

	// Handle the switch toggle event.
	const onCheckedChange = (event: { checked: boolean }) => {
		const mode = event.checked ? 'dark' : 'light';
		document.documentElement.setAttribute('data-mode', mode);
		localStorage.setItem('mode', mode);
		checked = event.checked;
	};
</script>

<!-- Use this to prevent a flash when dark mode is set. -->
<svelte:head>
	<script>
		const mode = localStorage.getItem('mode') || 'light';
		document.documentElement.setAttribute('data-mode', mode);
	</script>
</svelte:head>

<!-- Implement the switch, state, and event handler. -->
<Switch {checked} {onCheckedChange}></Switch>
