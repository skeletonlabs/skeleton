<script lang="ts" module>
	import type { Snippet } from 'svelte';
	import type { RatingGroupRootContextType } from '../modules/rating-group-root-context.js';

	export interface RatingGroupRootContextProps {
		children: Snippet<[RatingGroupRootContextType]>;
	}
</script>

<script lang="ts">
	import { RatingGroupRootContext } from '../modules/rating-group-root-context.js';

	const props: RatingGroupRootContextProps = $props();
	const rootContext = RatingGroupRootContext.consume();
</script>

{@render props.children(rootContext)}
