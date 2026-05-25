<script lang="ts" module>
	import type { HTMLAttributes } from '../../../internal/html-attributes.js';
	import type { PropsWithElement } from '../../../internal/props-with-element.js';

	export interface TagsInputItemTextProps extends PropsWithElement<'span'>, HTMLAttributes<'span'> {}
</script>

<script lang="ts">
	import { TagsInputItemContext } from '../modules/item-context.js';
	import { TagsInputRootContext } from '../modules/root-context.js';
	import { mergeProps } from '@zag-js/svelte';

	const props: TagsInputItemTextProps = $props();

	const tagsInput = TagsInputRootContext.consume();
	const itemProps = TagsInputItemContext.consume();

	const { element, children, ...rest } = $derived(props);

	const attributes = $derived(mergeProps(tagsInput().getItemTextProps(itemProps()), rest));
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<span {...attributes}>
		{@render children?.()}
	</span>
{/if}
