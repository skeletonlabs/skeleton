<script lang="ts" module>
	import type { useSlider } from '../modules/use-slider.svelte';
	import type { Snippet } from 'svelte';

	export interface SliderRootContextProps {
		children: Snippet<[ReturnType<typeof useSlider>]>;
	}
</script>

<script lang="ts">
	import { SliderRootContext } from '../modules/root-context';

	const props: SliderRootContextProps = $props();

	const slider = SliderRootContext.consume();

	const { children } = $derived(props);
</script>

{@render children(slider)}
