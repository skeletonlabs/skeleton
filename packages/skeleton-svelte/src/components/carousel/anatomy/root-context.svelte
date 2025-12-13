<script lang="ts" module>
	import type { useCarousel } from '../modules/provider.svelte';
	import type { Snippet } from 'svelte';

	export interface CarouselRootContextProps {
		children: Snippet<[ReturnType<typeof useCarousel>]>;
	}
</script>

<script lang="ts">
	import { RootContext } from '../modules/root-context.js';

	const props: CarouselRootContextProps = $props();

	const carousel = RootContext.consume();

	const { children } = $derived(props);
</script>

{@render children(carousel)}
