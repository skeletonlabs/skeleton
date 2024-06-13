<script lang="ts">
	import NavRail from '$lib/components/Nav/NavRail.svelte';
	import NavBar from '$lib/components/Nav/NavBar.svelte';
	import NavTile from '$lib/components/Nav/NavTile.svelte';
	// Icons
	import IconLogo from 'lucide-svelte/icons/skull';
	import IconMenu from 'lucide-svelte/icons/menu';
	import IconBox from 'lucide-svelte/icons/box';
	import IconSettings from 'lucide-svelte/icons/settings';

	let activeItem = $state('0');

	function onClickHandler(id: string) {
		activeItem = id;
	}

	function isActive(id: string) {
		return activeItem === id;
	}
</script>

<div class="space-y-10">
	<header>
		<h1 class="h1">Navigation</h1>
	</header>
	<section class="space-y-4">
		<h2 class="h2">Bar</h2>
		<div class="w-[320px]">
			<NavBar>
				<NavTile id="0" label="Tile 1" labelExpanded="Expanded Tile 1" onclick={onClickHandler} selected={isActive('0')}>
					<IconBox />
				</NavTile>
				<NavTile id="1" label="Tile 2" labelExpanded="Expanded Tile 2" onclick={onClickHandler} selected={isActive('1')}>
					<IconBox />
				</NavTile>
				<NavTile id="2" label="Tile 3" labelExpanded="Expanded Tile 3" onclick={onClickHandler} selected={isActive('2')}>
					<IconBox />
				</NavTile>
				<NavTile id="3" label="Tile 4" labelExpanded="Expanded Tile 4" onclick={onClickHandler} selected={isActive('3')}>
					<IconBox />
				</NavTile>
				<NavTile id="4" label="Tile 5" labelExpanded="Expanded Tile 5" onclick={onClickHandler} selected={isActive('4')}>
					<IconBox />
				</NavTile>
			</NavBar>
		</div>
		<NavBar>
			<NavTile id="0" label="Tile 1" labelExpanded="Expanded Tile 1" onclick={onClickHandler} selected={isActive('0')}>
				<IconBox />
			</NavTile>
			<NavTile id="1" label="Tile 2" labelExpanded="Expanded Tile 2" onclick={onClickHandler} selected={isActive('1')}>
				<IconBox />
			</NavTile>
			<NavTile id="2" label="Tile 3" labelExpanded="Expanded Tile 3" onclick={onClickHandler} selected={isActive('2')}>
				<IconBox />
			</NavTile>
			<NavTile id="3" label="Tile 4" labelExpanded="Expanded Tile 4" onclick={onClickHandler} selected={isActive('3')}>
				<IconBox />
			</NavTile>
			<NavTile id="4" label="Tile 5" labelExpanded="Expanded Tile 5" onclick={onClickHandler} selected={isActive('4')}>
				<IconBox />
			</NavTile>
		</NavBar>
	</section>
	<section class="space-y-4">
		<h2 class="h2">Rail</h2>
		<div class="flex justify-center gap-10 h-[960px]">
			<NavRail>
				{#snippet header()}
					<NavTile href="/" title="Menu"><IconMenu /></NavTile>
				{/snippet}
				{#snippet tiles()}
					<NavTile id="0" label="Tile 1" labelExpanded="Expanded Tile 1" onclick={onClickHandler} selected={isActive('0')}>
						<IconBox />
					</NavTile>
					<NavTile id="1" label="Tile 2" labelExpanded="Expanded Tile 2" onclick={onClickHandler} selected={isActive('1')}>
						<IconBox />
					</NavTile>
					<NavTile id="2" label="Tile 3" labelExpanded="Expanded Tile 3" onclick={onClickHandler} selected={isActive('2')}>
						<IconBox />
					</NavTile>
					<NavTile id="3" label="Tile 4" labelExpanded="Expanded Tile 4" onclick={onClickHandler} selected={isActive('3')}>
						<IconBox />
					</NavTile>
					<NavTile id="4" label="Tile 5" labelExpanded="Expanded Tile 5" onclick={onClickHandler} selected={isActive('4')}>
						<IconBox />
					</NavTile>
				{/snippet}
				{#snippet footer()}
					<NavTile labelExpanded="Settings" href="/settings" title="settings"><IconSettings /></NavTile>
				{/snippet}
			</NavRail>
			<!-- Expanded -->
			<NavRail expanded>
				{#snippet header()}
					<a href="/" class="w-full aspect-square flex flex-col justify-center items-center gap-2">
						<IconLogo size={48} />
						<span class="type-scale-5 font-bold">Skeleton</span>
					</a>
				{/snippet}
				{#snippet tiles()}
					<NavTile id="0" label="Tile 1" labelExpanded="Expanded Tile 1" href="/page/1">
						<IconBox />
					</NavTile>
					<NavTile id="1" label="Tile 2" labelExpanded="Expanded Tile 2" href="/page/2">
						<IconBox />
					</NavTile>
					<NavTile id="2" label="Tile 3" labelExpanded="Expanded Tile 3" href="/page/3">
						<IconBox />
					</NavTile>
					<NavTile id="3" label="Tile 4" labelExpanded="Expanded Tile 4" href="/page/4">
						<IconBox />
					</NavTile>
					<NavTile id="4" label="Tile 5" labelExpanded="Expanded Tile 5" href="/page/5">
						<IconBox />
					</NavTile>
				{/snippet}
				{#snippet footer()}
					<NavTile labelExpanded="Settings" href="/settings" title="Settings"><IconSettings /></NavTile>
				{/snippet}
			</NavRail>
		</div>
	</section>
</div>
