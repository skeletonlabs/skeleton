<script lang="ts" module>
	import type { ItemProps } from '@zag-js/tags-input';

	import type { HTMLAttributes } from '@/internal/html-attributes';
	import type { PropsWithElement } from '@/internal/props-with-element';

	export interface TagsInputItemProps extends ItemProps, PropsWithElement<'span'>, HTMLAttributes<'span'> {}
</script>

<script lang="ts">
	import { classesTagsInput } from '@skeletonlabs/skeleton-common';
	import { mergeProps } from '@zag-js/svelte';
	import { splitItemProps } from '@zag-js/tags-input';

	import { TagsInputItemContext } from '../modules/item-context';
	import { TagsInputRootContext } from '../modules/root-context';

	const props: TagsInputItemProps = $props();

	const tagsinput = TagsInputRootContext.consume();

	const [itemProps, componentProps] = $derived(splitItemProps(props));
	const { element, children, ...rest } = $derived(componentProps);

	const attributes = $derived(
		mergeProps(tagsinput().getItemProps(itemProps), rest, {
			class: classesTagsInput.item,
		}),
	);

	TagsInputItemContext.provide(() => itemProps);
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<span {...attributes}>
		{@render children?.()}
	</span>
{/if}
