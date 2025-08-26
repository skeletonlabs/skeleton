<script lang="ts">
	import { mergeProps } from '@zag-js/svelte';
	import { avatarClasses } from '@skeletonlabs/skeleton-common';
	import { AvatarRootContext } from '../modules/context.js';
	import type { AvatarFallbackProps } from '../modules/types.js';

	const rootContext = AvatarRootContext.consume();
	const props: AvatarFallbackProps = $props();
	const { element, children, ...restAttributes } = $derived(props);
	const attributes = $derived(
		mergeProps(
			rootContext.api.getFallbackProps(),
			{
				class: avatarClasses.fallback
			},
			restAttributes
		)
	);
</script>

{#if element}
	{@render element({ attributes })}
{:else}
	<span {...attributes}>
		{@render children?.()}
	</span>
{/if}
