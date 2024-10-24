<!-- Root Layout -->
<script lang="ts">
	import { page } from '$app/stores';

	import '../app.pcss';

	let { children } = $props();

	$effect(() => {
		// Sets <body data-theme> based on active route
		// Prevents generator CSS property precedence issues.
		$page.url.pathname === '/themes/create'
			? document.body.setAttribute('data-theme', 'generated')
			: document.body.setAttribute('data-theme', 'cerberus');
	});
</script>

{@render children?.()}
