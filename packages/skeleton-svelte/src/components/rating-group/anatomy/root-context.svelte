<script lang="ts" module>
	import type { useRatingGroup } from '../modules/provider.svelte';
	import type { Snippet } from 'svelte';

	export interface RatingGroupRootContextProps {
		children: Snippet<[ReturnType<typeof useRatingGroup>]>;
	}
</script>

<script lang="ts">
	import { RootContext } from '../modules/root-context.js';

	const props: RatingGroupRootContextProps = $props();

	const ratingGroup = RootContext.consume();

	const { children } = $derived(props);
</script>

{@render children(ratingGroup)}
