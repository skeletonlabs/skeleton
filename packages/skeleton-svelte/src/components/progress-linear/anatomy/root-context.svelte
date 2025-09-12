<script lang="ts" module>
	import type { Snippet } from 'svelte';
	import type { Api } from '@zag-js/progress';

	export interface ProgressLinearRootContextProps {
		children: Snippet<[() => Api]>;
	}
</script>

<script lang="ts">
	import { ProgressLinearRootContext } from '../modules/root-context';

	const props: ProgressLinearRootContextProps = $props();

	const progressLinear = ProgressLinearRootContext.consume();

	const { children } = $derived(props);
</script>

{@render children(progressLinear)}
