<script lang="ts">
	import { resolve } from '$app/paths';
	import LightSwitch from '$lib/components/common/LightSwitch/LightSwitch.svelte';
	import Logo from '$lib/components/common/Logo/Logo.svelte';
	import { AppBar } from '@skeletonlabs/skeleton-svelte';
</script>

<AppBar class="sticky top-0 z-10 border-b-[1px] border-surface-500/20 bg-surface-50-950">
	<AppBar.Toolbar class="grid-cols-[auto_1fr_auto] justify-between">
		<AppBar.Lead class="flex items-center gap-6">
			<a href="https://skeleton.dev/docs/design/themes" title="Skeleton" class="flex items-center gap-4">
				<Logo />
			</a>
		</AppBar.Lead>
		<AppBar.Headline class="flex opacity-60">
			<a href={resolve('/themes/create')} class="btn hover:preset-tonal">Create</a>
			<a href={resolve('/themes/import')} class="btn hover:preset-tonal">Import</a>
		</AppBar.Headline>
		<AppBar.Trail class="flex items-center gap-4">
			<LightSwitch />
		</AppBar.Trail>
	</AppBar.Toolbar>
</AppBar>
