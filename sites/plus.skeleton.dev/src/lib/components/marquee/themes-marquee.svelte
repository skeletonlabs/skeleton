<script lang="ts">
	import { themes } from './themes.js';
	import { Marquee } from '@skeletonlabs/skeleton-svelte';

	function shuffle<T>(arr: T[]): T[] {
		const result = [...arr];
		for (let i = result.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[result[i], result[j]] = [result[j], result[i]];
		}
		return result;
	}

	const rows = [1, 2, 3, 4].map(() => shuffle(themes));
</script>

<div class="space-y-3 py-4 overflow-hidden">
	{#each rows as row, i}
		<!-- autoFill must not be used here; avoids ResizeObserver recalculation -->
		<Marquee reverse={i % 2 === 1}>
			<Marquee.Edge side="start" />
			<Marquee.Viewport>
				<Marquee.Context>
					{#snippet children(marquee)}
						{#each Array.from({ length: marquee().contentCount }) as _, index}
							<Marquee.Content {index}>
								{#each row as theme}
									<div
										class="card ring ring-inset ring-surface-950-50/10 flex items-center gap-2 px-4 py-2 whitespace-nowrap"
										style="background-color: light-dark({theme.surface50}, {theme.surface950});"
									>
										<span>{theme.emoji}</span>
										<span class="text-sm font-medium">{theme.name}</span>
										<div class="flex gap-1">
											<span class="size-3 rounded-full" style="background-color: {theme.primary500};"></span>
											<span class="size-3 rounded-full" style="background-color: {theme.secondary500};"></span>
											<span class="size-3 rounded-full" style="background-color: {theme.tertiary500};"></span>
										</div>
									</div>
								{/each}
							</Marquee.Content>
						{/each}
					{/snippet}
				</Marquee.Context>
			</Marquee.Viewport>
			<Marquee.Edge side="end" />
		</Marquee>
	{/each}
</div>
