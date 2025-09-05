<script lang="ts" module>
	import type { Snippet } from 'svelte';
	import type { ProgressLinearRootContextType } from '../modules/progress-linear-root-context.js';

	export interface ProgressLinearRootContextProps {
		children: Snippet<[ProgressLinearRootContextType]>;
	}
</script>

<script lang="ts">
	import { ProgressLinearRootContext } from '../modules/progress-linear-root-context.js';

	const props: ProgressLinearRootContextProps = $props();
	const rootContext = ProgressLinearRootContext.consume();
</script>

{@render props.children(rootContext)}
