<script lang="ts" module>
	import type { Snippet } from 'svelte';
	import type { Api } from '@zag-js/rating-group';

	export interface RatingGroupRootContextProps {
		children: Snippet<[Api]>;
	}
</script>

<script lang="ts">
	import { RatingGroupRootContext } from '../modules/rating-group-root-context.js';

	const props: RatingGroupRootContextProps = $props();
	const rootContext = RatingGroupRootContext.consume();
</script>

{@render props.children(rootContext.api)}
