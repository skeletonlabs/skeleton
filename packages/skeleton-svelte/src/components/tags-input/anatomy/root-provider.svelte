<script lang="ts" module>
	import type { HTMLAttributes } from '@/internal/html-attributes';
	import type { PropsWithElement } from '@/internal/props-with-element';

	import type { useTagsInput } from '../modules/use-tags-input.svelte';

	export interface TagsInputRootProviderProps extends PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir'> {
		value: ReturnType<typeof useTagsInput>;
	}
</script>

<script lang="ts">
	import { classesTagsInput } from '@skeletonlabs/skeleton-common';
	import { mergeProps } from '@zag-js/svelte';

	import { TagsInputRootContext } from '../modules/root-context';

	const props: TagsInputRootProviderProps = $props();
	const { element, children, value: tagsinput, ...rest } = $derived(props);

	const attributes = $derived(
		mergeProps(tagsinput().getRootProps(), rest, {
			class: classesTagsInput.root,
		}),
	);

	TagsInputRootContext.provide(() => tagsinput());
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<div {...attributes}>
		{@render children?.()}
	</div>
{/if}
