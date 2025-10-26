<script lang="ts" module>
	import type { useSlider } from '../modules/provider.svelte';
	import type { Snippet } from 'svelte';

	export interface SliderRootContextProps {
		children: Snippet<[ReturnType<typeof useSlider>]>;
	}
</script>

<script lang="ts">
	import { RootContext } from '../modules/root-context.js';

	const props: SliderRootContextProps = $props();

	const slider = RootContext.consume();

	const { children } = $derived(props);
</script>

{@render children(slider)}
