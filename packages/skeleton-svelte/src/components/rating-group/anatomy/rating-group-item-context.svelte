<script lang="ts">
	import { RatingGroupItemContext } from '../modules/context.js';
	import type { RatingGroupItemContextProps } from '../modules/types.js';

	const props: RatingGroupItemContextProps = $props();
	const itemContext = RatingGroupItemContext.consume();
</script>

{@render props.children(itemContext.itemState)}
