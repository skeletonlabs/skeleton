<script lang="ts" module>
	import type { HTMLAttributes } from '@/internal/html-attributes';
	import type { PropsWithElement } from '@/internal/props-with-element';

	export interface TagsInputLabelProps extends PropsWithElement<'label'>, HTMLAttributes<'label'> {}
</script>

<script lang="ts">
	import { TagsInputRootContext } from '../modules/root-context';
	import { classesTagsInput } from '@skeletonlabs/skeleton-common';
	import { mergeProps } from '@zag-js/svelte';

	const props: TagsInputLabelProps = $props();

	const tagsInput = TagsInputRootContext.consume();

	const { element, children, ...rest } = $derived(props);

	const attributes = $derived(
		mergeProps(
			tagsInput().getLabelProps(),
			{
				class: classesTagsInput.label,
			},
			rest,
		),
	);
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<label {...attributes}>
		{@render children?.()}
	</label>
{/if}
