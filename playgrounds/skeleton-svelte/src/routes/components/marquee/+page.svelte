<script lang="ts">
	import { Marquee } from '@skeletonlabs/skeleton-svelte';

	const items = [
		{ emoji: '🐉', label: 'Dragon' },
		{ emoji: '🧙', label: 'Wizard' },
		{ emoji: '⚔️', label: 'Knight' },
		{ emoji: '💀', label: 'Skeleton' },
		{ emoji: '🏰', label: 'Castle' },
		{ emoji: '🧝', label: 'Elf' },
		{ emoji: '🗡️', label: 'Rogue' },
		{ emoji: '🛡️', label: 'Paladin' },
	];
</script>

<div class="space-y-10">
	<header>
		<h1 class="h1">Marquee</h1>
	</header>

	<section class="space-y-4">
		<h2 class="h2">Default</h2>
		<Marquee autoFill pauseOnInteraction>
			<Marquee.Edge side="start" />
			<Marquee.Viewport>
				<Marquee.Context>
					{#snippet children(marquee)}
						{#each Array.from({ length: marquee().contentCount }) as _, index}
							<Marquee.Content {index}>
								{#each items as item}
									<div class="card bg-surface-100-900 flex items-center gap-3 px-6 py-4 whitespace-nowrap">
										<span class="text-3xl">{item.emoji}</span>
										<span class="font-medium">{item.label}</span>
									</div>
								{/each}
							</Marquee.Content>
						{/each}
					{/snippet}
				</Marquee.Context>
			</Marquee.Viewport>
			<Marquee.Edge side="end" />
		</Marquee>
	</section>
</div>
