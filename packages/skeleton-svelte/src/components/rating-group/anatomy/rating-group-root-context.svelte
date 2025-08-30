<script lang="ts">
	import { RatingGroupRootContext } from '../modules/context.js';
	import type { RatingGroupRootContextProps } from '../modules/types.js';

	const props: RatingGroupRootContextProps = $props();
	const rootContext = RatingGroupRootContext.consume();
</script>

{@render props.children(rootContext.api)}
