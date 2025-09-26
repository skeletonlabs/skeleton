<script lang="ts">
	import { resolve } from '$app/paths';
	// Components (common)
	import Logo from '$lib/components/common/Logo/Logo.svelte';
</script>

<header class="sticky top-0 z-10 border-b-[1px] border-surface-500/20 bg-surface-50-950 w-full px-5 py-3">
	<div class="flex justify-between gap-4">
		<div class="flex items-center justify-start gap-6">
			<a href="https://skeleton.dev/docs/design/themes" title="Skeleton" class="flex items-center gap-4">
				<Logo />
			</a>
			<nav class="flex gap-6 opacity-60">
				<!-- <a href="/" class="hover:underline">Browse</a> -->
				<a href={resolve('/themes/create')} class="hover:underline">Create</a>
				<a href={resolve('/themes/import')} class="hover:underline">Import</a>
			</nav>
		</div>
		<nav class="flex items-center gap-4">
			<LightSwitch />
			<!-- <button class="btn preset-filled">Login</button> -->
		</nav>
	</div>
</header>
