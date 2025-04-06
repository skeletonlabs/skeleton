<script lang="ts">
	import { mergeProps } from '@zag-js/svelte';
	import { AvatarRootContext } from '../modules/context.js';
	import type { AvatarFallbackProps } from '../modules/types.js';

	const rootContext = AvatarRootContext.consume();
	const props: AvatarFallbackProps = $props();
	const { children, ...restAttributes } = $derived(props);
	const attributes = $derived(
		mergeProps(
			rootContext.api.getFallbackProps(),
			{
				class: 'base:size-full base:flex base:justify-center base:items-center'
			},
			restAttributes
		)
	);
</script>

<span {...attributes}>
	{@render children?.()}
</span>
