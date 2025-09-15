<script lang="ts" module>
	import type { HTMLAttributes } from '@/internal/html-attributes';
	import type { PropsWithElement } from '@/internal/props-with-element';

	export interface TagsInputLabelProps extends PropsWithElement<'label'>, HTMLAttributes<'label'> {}
</script>

<script lang="ts">
	import { classesTagsInput } from '@skeletonlabs/skeleton-common';
	import { mergeProps } from '@zag-js/svelte';

	import { TagsInputRootContext } from '../modules/root-context';

	const props: TagsInputLabelProps = $props();

	const tagsinput = TagsInputRootContext.consume();

	const { element, children, ...rest } = $derived(props);

	const attributes = $derived(
		mergeProps(tagsinput().getLabelProps(), rest, {
			class: classesTagsInput.label,
		}),
	);
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<label {...attributes}>
		{@render children?.()}
	</label>
{/if}
