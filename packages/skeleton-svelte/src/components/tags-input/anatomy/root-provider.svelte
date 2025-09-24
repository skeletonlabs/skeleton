<script lang="ts" module>
	import type { useTagsInput } from '../modules/use-tags-input.svelte';
	import type { HTMLAttributes } from '@/internal/html-attributes';
	import type { PropsWithElement } from '@/internal/props-with-element';

	export interface TagsInputRootProviderProps extends PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir'> {
		value: ReturnType<typeof useTagsInput>;
	}
</script>

<script lang="ts">
	import { TagsInputRootContext } from '../modules/root-context';
	import { classesTagsInput } from '@skeletonlabs/skeleton-common';
	import { mergeProps } from '@zag-js/svelte';

	const props: TagsInputRootProviderProps = $props();
	const { element, children, value: tagsInput, ...rest } = $derived(props);

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
