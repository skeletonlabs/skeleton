<script lang="ts" module>
	import type { useAvatar } from '../modules/use-avatar.svelte';
	import type { HTMLAttributes } from '@/internal/html-attributes';
	import type { PropsWithElement } from '@/internal/props-with-element';

	export interface AvatarRootProviderProps extends PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir'> {
		value: ReturnType<typeof useAvatar>;
	}
</script>

<script lang="ts">
	import { AvatarRootContext } from '../modules/root-context';
	import { classesAvatar } from '@skeletonlabs/skeleton-common';
	import { mergeProps } from '@zag-js/svelte';

	const props: AvatarRootProviderProps = $props();

	const { element, children, value: avatar, ...rest } = $derived(props);

	const attributes = $derived(
		mergeProps(
			avatar().getRootProps(),
			{
				class: classesAvatar.root,
			},
			rest,
		),
	);

	AvatarRootContext.provide(() => avatar());
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<div {...attributes}>
		{@render children?.()}
	</div>
{/if}
