<script lang="ts" module>
	import type { HTMLAttributes } from '../../../internal/html-attributes.js';
	import type { PropsWithElement } from '../../../internal/props-with-element.js';

	export interface TagsInputItemDeleteTriggerProps extends PropsWithElement<'button'>, HTMLAttributes<'button'> {}
</script>

<script lang="ts">
	import { TagsInputItemContext } from '../modules/item-context.js';
	import { TagsInputRootContext } from '../modules/root-context.js';
	import { mergeProps } from '@zag-js/svelte';

	const props: TagsInputItemDeleteTriggerProps = $props();

	const tagsInput = TagsInputRootContext.consume();
	const itemProps = TagsInputItemContext.consume();

	const { element, children = times, ...rest } = $derived(props);

	const attributes = $derived(mergeProps(tagsInput().getItemDeleteTriggerProps(itemProps()), rest));
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
