<script lang="ts" module>
	import type { useMarquee } from '../modules/provider.svelte.js';
	import type { Snippet } from 'svelte';

	export interface MarqueeRootContextProps {
		children: Snippet<[ReturnType<typeof useMarquee>]>;
	}
</script>

<script lang="ts">
	import { RootContext } from '../modules/root-context.js';

	const props: MarqueeRootContextProps = $props();

	const marquee = RootContext.consume();

	const { children } = $derived(props);
</script>

{@render children(marquee)}
