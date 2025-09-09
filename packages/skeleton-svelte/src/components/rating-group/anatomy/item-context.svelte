<script lang="ts" module>
	import type { Snippet } from 'svelte';
	import type { RatingGroupItemContextType } from '../modules/item-context';

	export interface RatingGroupItemContextProps {
		children: Snippet<[RatingGroupItemContextType]>;
	}
</script>

<script lang="ts">
	import { RatingGroupItemContext } from '../modules/item-context';

	const props: RatingGroupItemContextProps = $props();

	const itemContext = RatingGroupItemContext.consume();
</script>

{@render props.children(itemContext)}
