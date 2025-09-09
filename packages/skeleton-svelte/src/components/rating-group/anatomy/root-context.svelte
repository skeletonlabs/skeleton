<script lang="ts" module>
	import type { Snippet } from 'svelte';
	import type { RatingGroupRootContextType } from '../modules/root-context';

	export interface RatingGroupRootContextProps {
		children: Snippet<[RatingGroupRootContextType]>;
	}
</script>

<script lang="ts">
	import { RatingGroupRootContext } from '../modules/root-context';

	const props: RatingGroupRootContextProps = $props();
	const rootContext = RatingGroupRootContext.consume();
</script>

{@render props.children(rootContext)}
