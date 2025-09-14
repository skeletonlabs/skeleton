<script lang="ts" module>
	import type { PropsWithElement } from '@/internal/props-with-element';
	import type { HTMLAttributes } from '@/internal/html-attributes';

	export interface AvatarImageProps extends PropsWithElement<'img'>, HTMLAttributes<'img'> {}
</script>

<script lang="ts">
	import { mergeProps } from '@zag-js/svelte';
	import { classesAvatar } from '@skeletonlabs/skeleton-common';
	import { AvatarRootContext } from '../modules/root-context';

	const props: AvatarImageProps = $props();

	const avatar = AvatarRootContext.consume();

	const { element, ...rest } = $derived(props);

	const attributes = $derived(
		mergeProps(avatar().getImageProps(), rest, {
			class: classesAvatar.image,
		}),
	);
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<img {...attributes} />
{/if}
