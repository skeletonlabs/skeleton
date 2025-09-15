<script lang="ts" module>
	import type { HTMLAttributes } from '@/internal/html-attributes';
	import type { PropsWithElement } from '@/internal/props-with-element';

	export interface TagsInputItemInputProps extends PropsWithElement<'input'>, HTMLAttributes<'input', 'children'> {}
</script>

<script lang="ts">
	import { classesTagsInput } from '@skeletonlabs/skeleton-common';
	import { mergeProps } from '@zag-js/svelte';

	import { TagsInputItemContext } from '../modules/item-context';
	import { TagsInputRootContext } from '../modules/root-context';

	const props: TagsInputItemInputProps = $props();

	const tagsinput = TagsInputRootContext.consume();
	const itemProps = TagsInputItemContext.consume();

	const { element, ...rest } = $derived(props);

	const attributes = $derived(
		mergeProps(tagsinput().getItemInputProps(itemProps()), rest, {
			class: classesTagsInput.itemInput,
		}),
	);
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<input {...attributes} />
{/if}
