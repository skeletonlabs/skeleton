<script lang="ts" module>
	import type { HTMLAttributes } from '@/internal/html-attributes';
	import type { PropsWithElement } from '@/internal/props-with-element';
	import type { Props } from '@zag-js/tags-input';

	export interface TagsInputRootProps extends Omit<Props, 'id'>, PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir'> {}
</script>

<script lang="ts">
	import { TagsInputRootContext } from '../modules/root-context';
	import { useTagsInput } from '../modules/use-tags-input.svelte';
	import { classesTagsInput } from '@skeletonlabs/skeleton-common';
	import { mergeProps } from '@zag-js/svelte';
	import { splitProps } from '@zag-js/tags-input';

	const props: TagsInputRootProps = $props();
	const [tagsInputProps, componentProps] = $derived(splitProps(props));
	const { element, children, ...rest } = $derived(componentProps);

	const id = $props.id();
	const tagsInput = useTagsInput(() => ({
		id: id,
		...tagsInputProps,
	}));

	const attributes = $derived(
		mergeProps(
			tagsInput().getRootProps(),
			{
				class: classesTagsInput.root,
			},
			rest,
		),
	);

	TagsInputRootContext.provide(() => tagsInput());
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<div {...attributes}>
		{@render children?.()}
	</div>
{/if}
