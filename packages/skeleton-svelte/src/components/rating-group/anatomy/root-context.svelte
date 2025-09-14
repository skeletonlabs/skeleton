<script lang="ts" module>
	import type { Snippet } from 'svelte';

	import type { useRatingGroup } from '../modules/use-rating-group.svelte';

	export interface RatingGroupRootContextProps {
		children: Snippet<[ReturnType<typeof useRatingGroup>]>;
	}
</script>

<script lang="ts">
	import { RatingGroupRootContext } from '../modules/root-context';

	const props: RatingGroupRootContextProps = $props();

	const ratingGroup = RatingGroupRootContext.consume();

	const { children } = $derived(props);
</script>

{@render children(ratingGroup)}
