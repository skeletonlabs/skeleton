<script lang="ts" module>
	import type { Snippet } from 'svelte';

	export interface RatingGroupRootContextProps {
		children: Snippet<[() => Api]>;
	}
</script>

<script lang="ts">
	import { RatingGroupRootContext } from '../modules/root-context';
	import type { Api } from '@zag-js/rating-group';

	const props: RatingGroupRootContextProps = $props();

	const ratingGroup = RatingGroupRootContext.consume();

	const { children } = $derived(props);
</script>

{@render children(ratingGroup)}
