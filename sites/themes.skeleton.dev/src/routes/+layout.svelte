<!-- Root Layout -->
<script lang="ts">
	import '../app.css';

	import { page } from '$app/stores';

	let { children } = $props();

	$effect(() => {
		// Sets <body data-theme> based on active route
		// Prevents generator CSS property precedence issues.
		if ($page.url.pathname === '/themes/create') {
			document.documentElement.setAttribute('data-theme', 'generated');
		} else {
			document.documentElement.setAttribute('data-theme', ''); // cerberus
		}
	});
</script>

{@render children?.()}
