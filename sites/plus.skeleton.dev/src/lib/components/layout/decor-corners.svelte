<script lang="ts">
	import PlusIcon from '@lucide/svelte/icons/plus';
	import type { Snippet } from 'svelte';

	type Corner = 'tl' | 'tr' | 'bl' | 'br';

	interface Props {
		corners?: Corner[];
		class?: string;
		children?: Snippet;
	}

	let { corners = [], class: classList, children }: Props = $props();

	const cornerClasses: Record<Corner, string> = {
		tl: 'top-0 left-0 translate-x-[-50%] translate-y-[-50%]',
		tr: 'top-0 right-0 translate-x-[50%] translate-y-[-50%]',
		bl: 'bottom-0 left-0 translate-x-[-50%] translate-y-[50%]',
		br: 'bottom-0 right-0 translate-x-[50%] translate-y-[50%]',
	};
</script>

<section class="relative">
	{#each corners as corner}
		<PlusIcon class="absolute stroke-surface-600-400 size-elem-sm {cornerClasses[corner]}" />
	{/each}
	<div class={classList}>{@render children?.()}</div>
</section>
