<script lang="ts">
	import { mergeProps } from '@zag-js/svelte';
	import { avatarClasses } from '@skeletonlabs/skeleton-common';
	import { AvatarRootContext } from '../modules/context.js';
	import type { AvatarImageProps } from '../modules/types.js';

	const rootContext = AvatarRootContext.consume();
	const props: AvatarImageProps = $props();
	const { element, ...restAttributes } = $derived(props);
	const attributes = $derived(
		mergeProps(
			rootContext.api.getImageProps(),
			{
				class: avatarClasses.image
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
