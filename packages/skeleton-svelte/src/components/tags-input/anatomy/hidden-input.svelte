<script lang="ts" module>
	import type { HTMLAttributes } from '@/internal/html-attributes';
	import type { PropsWithElement } from '@/internal/props-with-element';

	export interface TagsInputHiddenInputProps extends PropsWithElement<'input'>, HTMLAttributes<'input', 'children'> {}
</script>

<script lang="ts">
	import { TagsInputRootContext } from '../modules/root-context';
	import { classesTagsInput } from '@skeletonlabs/skeleton-common';
	import { mergeProps } from '@zag-js/svelte';

	const props: TagsInputHiddenInputProps = $props();

	const tagsInput = TagsInputRootContext.consume();

	const { element, ...rest } = $derived(props);

	const attributes = $derived(
		mergeProps(
			tagsInput().getHiddenInputProps(),
			{
				class: classesTagsInput.hiddenInput,
			},
			rest,
		),
	);
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<input {...attributes} />
{/if}
