<script lang="ts" module>
	import type { HTMLAttributes } from '../../../internal/html-attributes.js';
	import type { PropsWithElement } from '../../../internal/props-with-element.js';
	import type { Props } from '@zag-js/avatar';

	export interface AvatarRootProps extends Omit<Props, 'id'>, PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir'> {}
</script>

<script lang="ts">
	import { useAvatar } from '../modules/provider.svelte';
	import { RootContext } from '../modules/root-context.js';
	import { splitProps } from '@zag-js/avatar';
	import { mergeProps } from '@zag-js/svelte';

	const props: AvatarRootProps = $props();

	const [avatarProps, componentProps] = $derived(splitProps(props));
	const { element, children, ...rest } = $derived(componentProps);

	const id = $props.id();
	const avatar = useAvatar(() => ({
		...avatarProps,
		id: id,
	}));

	const attributes = $derived(mergeProps(avatar().getRootProps(), rest));

	RootContext.provide(() => avatar());
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<div {...attributes}>
		{@render children?.()}
	</div>
{/if}
