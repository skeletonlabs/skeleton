<script lang="ts" module>
	import type { HTMLAttributes } from '../../../internal/html-attributes.js';
	import type { PropsWithElement } from '../../../internal/props-with-element.js';
	import type { Props } from '@zag-js/tags-input';

	export interface TagsInputRootProps extends Omit<Props, 'id'>, PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir'> {}
</script>

<script lang="ts">
	import { useTagsInput } from '../modules/provider.svelte';
	import { RootContext } from '../modules/root-context.js';
	import { mergeProps } from '@zag-js/svelte';
	import { splitProps } from '@zag-js/tags-input';

	const props: TagsInputRootProps = $props();
	const [tagsInputProps, componentProps] = $derived(splitProps(props));
	const { element, children, ...rest } = $derived(componentProps);

	const id = $props.id();
	const tagsInput = useTagsInput(() => ({
		...tagsInputProps,
		id: id,
	}));

	const attributes = $derived(mergeProps(tagsInput().getRootProps(), rest));

	RootContext.provide(() => tagsInput());
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<div {...attributes}>
		{@render children?.()}
	</div>
{/if}
