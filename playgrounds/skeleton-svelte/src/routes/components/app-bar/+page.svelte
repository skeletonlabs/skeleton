<script lang="ts">
	import CalendarIcon from '@lucide/svelte/icons/calendar';
	import CircleUserIcon from '@lucide/svelte/icons/circle-user';
	import MenuIcon from '@lucide/svelte/icons/menu';
	import SearchIcon from '@lucide/svelte/icons/search';
	import { AppBar } from '@skeletonlabs/skeleton-svelte';
</script>

<div class="space-y-10">
	<header>
		<h2 class="h2">App Bar</h2>
	</header>
	<section class="space-y-4">
		<AppBar>
			<AppBar.Toolbar class="grid-cols-[auto_1fr_auto]">
				<AppBar.Lead>
					<button type="button" class="btn-icon btn-icon-lg hover:preset-tonal"><MenuIcon /></button>
				</AppBar.Lead>
				<AppBar.Headline>
					<p class="text-2xl">Headline</p>
				</AppBar.Headline>
				<AppBar.Trail>
					<button type="button" class="btn-icon hover:preset-tonal"><SearchIcon class="size-6" /></button>
					<button type="button" class="btn-icon hover:preset-tonal"><CalendarIcon class="size-6" /></button>
					<button type="button" class="btn-icon hover:preset-tonal"><CircleUserIcon class="size-6" /></button>
				</AppBar.Trail>
			</AppBar.Toolbar>
		</AppBar>
	</section>
	<section class="space-y-4">
		<h3 class="h3">Centered</h3>
		<AppBar>
			<AppBar.Toolbar class="grid-cols-[1fr_2fr_1fr]">
				<AppBar.Lead>
					<button type="button" class="btn-icon btn-icon-lg hover:preset-tonal"><MenuIcon /></button>
				</AppBar.Lead>
				<AppBar.Headline class="flex justify-center">
					<p>Headline</p>
				</AppBar.Headline>
				<AppBar.Trail class="justify-end">
					<button type="button" class="btn-icon hover:preset-tonal"><SearchIcon class="size-6" /></button>
					<button type="button" class="btn-icon hover:preset-tonal"><CalendarIcon class="size-6" /></button>
					<button type="button" class="btn-icon hover:preset-tonal"><CircleUserIcon class="size-6" /></button>
				</AppBar.Trail>
			</AppBar.Toolbar>
		</AppBar>
	</section>
	<section class="space-y-4">
		<h3 class="h3">Extended</h3>
		<AppBar>
			<AppBar.Toolbar class="grid-cols-[auto_auto]">
				<AppBar.Lead>
					<button type="button" class="btn-icon btn-icon-lg hover:preset-tonal"><MenuIcon /></button>
				</AppBar.Lead>
				<AppBar.Trail>
					<button type="button" class="btn-icon hover:preset-tonal"><SearchIcon class="size-6" /></button>
					<button type="button" class="btn-icon hover:preset-tonal"><CalendarIcon class="size-6" /></button>
					<button type="button" class="btn-icon hover:preset-tonal"><CircleUserIcon class="size-6" /></button>
				</AppBar.Trail>
			</AppBar.Toolbar>
			<AppBar.Headline>
				<h2 class="h2">Headline</h2>
			</AppBar.Headline>
		</AppBar>
	</section>
</div>
