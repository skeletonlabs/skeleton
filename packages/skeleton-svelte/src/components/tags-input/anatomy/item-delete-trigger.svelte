<script lang="ts" module>
	import type { HTMLAttributes } from '@/internal/html-attributes';
	import type { PropsWithElement } from '@/internal/props-with-element';

	export interface TagsInputItemDeleteTriggerProps extends PropsWithElement<'button'>, HTMLAttributes<'button'> {}
</script>

<script lang="ts">
	import { classesTagsInput } from '@skeletonlabs/skeleton-common';
	import { mergeProps } from '@zag-js/svelte';

	import { TagsInputItemContext } from '../modules/item-context';
	import { TagsInputRootContext } from '../modules/root-context';

	const props: TagsInputItemDeleteTriggerProps = $props();

	const tagsinput = TagsInputRootContext.consume();
	const itemProps = TagsInputItemContext.consume();

	const { element, children = times, ...rest } = $derived(props);

	const attributes = $derived(
		mergeProps(tagsinput().getItemDeleteTriggerProps(itemProps()), rest, {
			class: classesTagsInput.itemDeleteTrigger,
		}),
	);
</script>

{#snippet times()}
	&times;
{/snippet}

{#if element}
	{@render element(attributes)}
{:else}
	<button {...attributes}>
		{@render children()}
	</button>
{/if}
