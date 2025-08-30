<script lang="ts" module>
	import type { PropsWithElement } from '../../internal/props-with-element.js';
	import type { HTMLAttributes } from 'svelte/elements';

	interface AvatarFallbackProps extends PropsWithElement, HTMLAttributes<HTMLSpanElement> {}

	export type { AvatarFallbackProps };
</script>

<script lang="ts">
	import { mergeProps } from '@zag-js/svelte';
	import { classesAvatar } from '@skeletonlabs/skeleton-common';
	import { AvatarRootContext } from './avatar-root-context.js';

	const rootContext = AvatarRootContext.consume();
	const props: AvatarFallbackProps = $props();
	const { element, children, ...restAttributes } = $derived(props);
	const attributes = $derived(
		mergeProps(
			rootContext.api.getFallbackProps(),
			{
				class: classesAvatar.fallback
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
