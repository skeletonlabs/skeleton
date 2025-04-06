<script lang="ts">
	import { mergeProps } from '@zag-js/svelte';
	import { AvatarRootContext } from '../modules/context.js';
	import type { AvatarImageProps } from '../modules/types.js';

	const rootContext = AvatarRootContext.consume();
	const props: AvatarImageProps = $props();
	const { child, ...restAttributes } = $derived(props);
	const attributes = $derived(
		mergeProps(
			rootContext.api.getImageProps(),
			{
				class: 'base:w-full base:object-cover'
			},
			restAttributes
		)
	);
</script>

{#if child}
	{@render child(attributes)}
{:else}
	<img {...attributes} />
{/if}
