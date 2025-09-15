<script lang="ts" module>
	import type { HTMLAttributes } from '@/internal/html-attributes';
	import type { PropsWithElement } from '@/internal/props-with-element';

	export interface TagsInputItemTextProps extends PropsWithElement<'span'>, HTMLAttributes<'span'> {}
</script>

<script lang="ts">
	import { classesTagsInput } from '@skeletonlabs/skeleton-common';
	import { mergeProps } from '@zag-js/svelte';

	import { TagsInputItemContext } from '../modules/item-context';
	import { TagsInputRootContext } from '../modules/root-context';

	const props: TagsInputItemTextProps = $props();

	const tagsinput = TagsInputRootContext.consume();
	const itemProps = TagsInputItemContext.consume();

	const { element, children, ...rest } = $derived(props);

	const attributes = $derived(
		mergeProps(tagsinput().getItemTextProps(itemProps()), rest, {
			class: classesTagsInput.itemText,
		}),
	);
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<span {...attributes}>
		{@render children?.()}
	</span>
{/if}
