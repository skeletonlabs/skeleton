<script lang="ts">
	import { Nav } from '$lib/index.js';
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
			<Nav.Bar>
				<Nav.Tile id="0" label="Tile 1" labelExpanded="Expanded Tile 1" onclick={onClickHandler} selected={isActive('0')}>
					<IconBox />
				</Nav.Tile>
				<Nav.Tile id="1" label="Tile 2" labelExpanded="Expanded Tile 2" onclick={onClickHandler} selected={isActive('1')}>
					<IconBox />
				</Nav.Tile>
				<Nav.Tile id="2" label="Tile 3" labelExpanded="Expanded Tile 3" onclick={onClickHandler} selected={isActive('2')}>
					<IconBox />
				</Nav.Tile>
				<Nav.Tile id="3" label="Tile 4" labelExpanded="Expanded Tile 4" onclick={onClickHandler} selected={isActive('3')}>
					<IconBox />
				</Nav.Tile>
			</Nav.Bar>
		</div>
		<Nav.Bar>
			<Nav.Tile id="0" label="Tile 1" labelExpanded="Expanded Tile 1" onclick={onClickHandler} selected={isActive('0')}>
				<IconBox />
			</Nav.Tile>
			<Nav.Tile id="1" label="Tile 2" labelExpanded="Expanded Tile 2" onclick={onClickHandler} selected={isActive('1')}>
				<IconBox />
			</Nav.Tile>
			<Nav.Tile id="2" label="Tile 3" labelExpanded="Expanded Tile 3" onclick={onClickHandler} selected={isActive('2')}>
				<IconBox />
			</Nav.Tile>
			<Nav.Tile id="3" label="Tile 4" labelExpanded="Expanded Tile 4" onclick={onClickHandler} selected={isActive('3')}>
				<IconBox />
			</Nav.Tile>
			<Nav.Tile id="4" label="Tile 5" labelExpanded="Expanded Tile 5" onclick={onClickHandler} selected={isActive('4')}>
				<IconBox />
			</Nav.Tile>
		</Nav.Bar>
	</section>
	<section class="space-y-4">
		<h2 class="h2">Rail</h2>
		<div class="flex h-[960px] justify-center gap-10">
			<Nav.Rail>
				{#snippet header()}
					<Nav.Tile href="/" title="Menu"><IconMenu /></Nav.Tile>
				{/snippet}
				{#snippet tiles()}
					<Nav.Tile id="0" label="Tile 1" labelExpanded="Expanded Tile 1" onclick={onClickHandler} selected={isActive('0')}>
						<IconBox />
					</Nav.Tile>
					<Nav.Tile id="1" label="Tile 2" labelExpanded="Expanded Tile 2" onclick={onClickHandler} selected={isActive('1')}>
						<IconBox />
					</Nav.Tile>
					<Nav.Tile id="2" label="Tile 3" labelExpanded="Expanded Tile 3" onclick={onClickHandler} selected={isActive('2')}>
						<IconBox />
					</Nav.Tile>
					<Nav.Tile id="3" label="Tile 4" labelExpanded="Expanded Tile 4" onclick={onClickHandler} selected={isActive('3')}>
						<IconBox />
					</Nav.Tile>
					<Nav.Tile id="4" label="Tile 5" labelExpanded="Expanded Tile 5" onclick={onClickHandler} selected={isActive('4')}>
						<IconBox />
					</Nav.Tile>
				{/snippet}
				{#snippet footer()}
					<Nav.Tile labelExpanded="Settings" href="/settings" title="settings"><IconSettings /></Nav.Tile>
				{/snippet}
			</Nav.Rail>
			<!-- Expanded -->
			<Nav.Rail expanded>
				{#snippet header()}
					<a href="/" class="flex aspect-square w-full flex-col items-center justify-center gap-2">
						<IconLogo size={48} />
						<span class="type-scale-5 font-bold">Skeleton</span>
					</a>
				{/snippet}
				{#snippet tiles()}
					<Nav.Tile id="0" label="Tile 1" labelExpanded="Expanded Tile 1" href="/page/1">
						<IconBox />
					</Nav.Tile>
					<Nav.Tile id="1" label="Tile 2" labelExpanded="Expanded Tile 2" href="/page/2">
						<IconBox />
					</Nav.Tile>
					<Nav.Tile id="2" label="Tile 3" labelExpanded="Expanded Tile 3" href="/page/3">
						<IconBox />
					</Nav.Tile>
					<Nav.Tile id="3" label="Tile 4" labelExpanded="Expanded Tile 4" href="/page/4">
						<IconBox />
					</Nav.Tile>
					<Nav.Tile id="4" label="Tile 5" labelExpanded="Expanded Tile 5" href="/page/5">
						<IconBox />
					</Nav.Tile>
				{/snippet}
				{#snippet footer()}
					<Nav.Tile labelExpanded="Settings" href="/settings" title="Settings"><IconSettings /></Nav.Tile>
				{/snippet}
			</Nav.Rail>
		</div>
	</section>
</div>
