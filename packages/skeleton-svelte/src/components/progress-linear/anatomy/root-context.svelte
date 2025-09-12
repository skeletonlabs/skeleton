<script lang="ts" module>
	import type { Snippet } from 'svelte';
	import type { ProgressLinearRootContextType } from '../modules/root-context';

	export interface ProgressLinearRootContextProps {
		children: Snippet<[ProgressLinearRootContextType]>;
	}
</script>

<script lang="ts">
	import { ProgressLinearRootContext } from '../modules/root-context';

	const props: ProgressLinearRootContextProps = $props();

	const rootContext = ProgressLinearRootContext.consume();
</script>

{@render props.children(rootContext)}
