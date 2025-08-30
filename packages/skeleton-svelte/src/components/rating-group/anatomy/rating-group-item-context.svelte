<script lang="ts" module>
	import type { Snippet } from 'svelte';
	import type { RatingGroupItemContextType } from '../modules/rating-group-item-context.js';

	export interface RatingGroupItemContextProps {
		children: Snippet<[RatingGroupItemContextType]>;
	}
</script>

<script lang="ts">
	import { RatingGroupItemContext } from '../modules/rating-group-item-context.js';

	const props: RatingGroupItemContextProps = $props();
	const itemContext = RatingGroupItemContext.consume();
</script>

{@render props.children(itemContext)}
