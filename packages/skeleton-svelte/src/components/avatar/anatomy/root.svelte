<script lang="ts" module>
	import type { HTMLAttributes } from '@/internal/html-attributes';
	import type { PropsWithElement } from '@/internal/props-with-element';
	import type { Props } from '@zag-js/avatar';

	export interface AvatarRootProps extends Omit<Props, 'id'>, PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir'> {}
</script>

<script lang="ts">
	import { mergeProps } from '@zag-js/svelte';
	import { classesAvatar } from '@skeletonlabs/skeleton-common';
	import { AvatarRootContext } from '../modules/root-context';
	import { splitProps } from '@zag-js/avatar';
	import { useAvatar } from '../modules/use-avatar.svelte';

	const props: AvatarRootProps = $props();

	const [avatarProps, componentProps] = $derived(splitProps(props));
	const { element, children, ...rest } = $derived(componentProps);

	const id = $props.id();
	const api = useAvatar(() => ({
		id: id,
		...avatarProps
	}));

	const attributes = $derived(
		mergeProps(api().getRootProps(), rest, {
			class: classesAvatar.root
		})
	);

	AvatarRootContext.provide(api);
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<div {...attributes}>
		{@render children?.()}
	</div>
{/if}
