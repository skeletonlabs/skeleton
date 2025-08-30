<script lang="ts" module>
	import type { Snippet } from 'svelte';
	import type { ItemState } from '@zag-js/rating-group';

	export interface RatingGroupItemContextProps {
		children: Snippet<[ItemState]>;
	}
</script>

<script lang="ts">
	import { RatingGroupItemContext } from '../modules/rating-group-item-context.js';

	const props: RatingGroupItemContextProps = $props();
	const itemContext = RatingGroupItemContext.consume();
</script>

{@render props.children(itemContext.itemState)}
