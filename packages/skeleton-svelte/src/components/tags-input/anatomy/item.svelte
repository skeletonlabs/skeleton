<script lang="ts" module>
	import type { HTMLAttributes } from '../../../internal/html-attributes.js';
	import type { PropsWithElement } from '../../../internal/props-with-element.js';
	import type { ItemProps } from '@zag-js/tags-input';

	export interface TagsInputItemProps extends ItemProps, PropsWithElement<'span'>, HTMLAttributes<'span'> {}
</script>

<script lang="ts">
	import { TagsInputItemContext } from '../modules/item-context.js';
	import { TagsInputRootContext } from '../modules/root-context.js';
	import { mergeProps } from '@zag-js/svelte';
	import { splitItemProps } from '@zag-js/tags-input';

	const props: TagsInputItemProps = $props();

	const tagsInput = TagsInputRootContext.consume();

	const [itemProps, componentProps] = $derived(splitItemProps(props));
	const { element, children, ...rest } = $derived(componentProps);

	const attributes = $derived(mergeProps(tagsInput().getItemProps(itemProps), rest));

	TagsInputItemContext.provide(() => itemProps);
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<span {...attributes}>
		{@render children?.()}
	</span>
{/if}
