<script lang="ts" module>
	import type { HTMLAttributes } from '@/internal/html-attributes';
	import type { PropsWithElement } from '@/internal/props-with-element';

	export interface TagsInputInputProps extends PropsWithElement<'input'>, HTMLAttributes<'input', 'children'> {}
</script>

<script lang="ts">
	import { TagsInputRootContext } from '../modules/root-context';
	import { classesTagsInput } from '@skeletonlabs/skeleton-common';
	import { mergeProps } from '@zag-js/svelte';

	const props: TagsInputInputProps = $props();

	const tagsInput = TagsInputRootContext.consume();

	const { element, ...rest } = $derived(props);

	const attributes = $derived(
		mergeProps(
			tagsInput().getInputProps(),
			{
				class: classesTagsInput.input,
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
