<script lang="ts" module>
	import type { Props } from '@zag-js/tags-input';

	import type { HTMLAttributes } from '@/internal/html-attributes';
	import type { PropsWithElement } from '@/internal/props-with-element';

	export interface TagsInputRootProps extends Omit<Props, 'id'>, PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir'> {}
</script>

<script lang="ts">
	import { classesTagsInput } from '@skeletonlabs/skeleton-common';
	import { mergeProps } from '@zag-js/svelte';
	import { splitProps } from '@zag-js/tags-input';

	import { TagsInputRootContext } from '../modules/root-context';
	import { useTagsInput } from '../modules/use-tags-input.svelte';

	const props: TagsInputRootProps = $props();
	const [tagsinputProps, componentProps] = $derived(splitProps(props));
	const { element, children, ...rest } = $derived(componentProps);

	const id = $props.id();
	const tagsinput = useTagsInput(() => ({
		id: id,
		...tagsinputProps,
	}));

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
