<script lang="ts" module>
	import type { PropsWithElement } from '../../internal/props-with-element';
	import type { HTMLImgAttributes } from 'svelte/elements';

	export interface AvatarImageProps extends PropsWithElement, HTMLImgAttributes {}
</script>

<script lang="ts">
	import { mergeProps } from '@zag-js/svelte';
	import { classesAvatar } from '@skeletonlabs/skeleton-common';
	import { AvatarRootContext } from './avatar-root.context.js';

	const rootContext = AvatarRootContext.consume();
	const props: AvatarImageProps = $props();
	const { element, ...restAttributes } = $derived(props);
	const attributes = $derived(
		mergeProps(
			rootContext.api.getImageProps(),
			{
				class: classesAvatar.image
			},
			restAttributes
		)
	);
</script>

{#if element}
	{@render element({ attributes })}
{:else}
	<img {...attributes} />
{/if}
