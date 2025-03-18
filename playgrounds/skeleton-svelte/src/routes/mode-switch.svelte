<script lang="ts">
	// Import the Switch component, or any other switch component you want to use.
	import { Switch } from '@skeletonlabs/skeleton-svelte';

	// Define a `checked` state that will be used to store the current mode.
	let checked = $state(typeof window === 'undefined' ? false : localStorage.getItem('mode') === 'dark');

	// Define a function that will be called when the switch is toggled.
	const onCheckedChange = (event: { checked: boolean }) => {
		const mode = event.checked ? 'dark' : 'light';
		document.documentElement.setAttribute('data-mode', mode);
		localStorage.setItem('mode', mode);
		checked = event.checked;
	};
</script>

<!-- Create a script that runs *before* the DOM is mounted, this prevents a FOLM (Flash Of Light Mode) when the stored preference is `dark` -->
<svelte:head>
	<script>
		const mode = localStorage.getItem('mode') || 'light';
		document.documentElement.setAttribute('data-mode', mode);
	</script>
</svelte:head>

<!-- Create the LightSwitch component and hook it up to the previously define functions -->
<Switch {checked} {onCheckedChange}></Switch>
