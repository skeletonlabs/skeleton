<script lang="ts">
	import Breadcrumb from '$lib/components/Breadcrumb/Breadcrumb.svelte';
	import Crumb from '$lib/components/Breadcrumb/Crumb.svelte';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';
</script>

<div class="page-container">
	<!-- Breadcrumbs -->
	<Breadcrumb>
		<Crumb href="/guides/frameworks">Frameworks</Crumb>
		<Crumb>Vite</Crumb>
	</Breadcrumb>

	<!-- Header -->
	<header>
		<div class="grid grid-cols-[1fr_auto] gap-4">
			<div class="space-y-2">
				<h1>Vite</h1>
				<p>This guide will help you scaffold a basic Skeleton application within Vite.</p>
			</div>
			<div class="place-self-end">
				<a class="btn btn-filled-primary" href="https://vitejs.dev/" target="_blank">Documentation</a>
			</div>
		</div>
	</header>

	<hr />

	<!-- XXX -->
	<section class="space-y-4">
		<p>Coming Soon...</p>
	</section>
</div>
