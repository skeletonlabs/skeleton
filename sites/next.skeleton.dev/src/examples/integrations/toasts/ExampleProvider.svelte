<script lang="ts">
	import { ToastProvider } from '@skeletonlabs/skeleton-svelte';
	import ExamplePageContent from './ExamplePageContent.svelte';
</script>

<ToastProvider>
	<!-- In a real SvelteKit app, insert the layout slot here: -->
	<!-- {@render children()} -->

	<!-- We're replicate this with a component in this example. -->
	<ExamplePageContent />
</ToastProvider>
