<script lang="ts" module>
	import type { HTMLAttributes } from '@/internal/html-attributes';
	import type { PropsWithElement } from '@/internal/props-with-element';

	export interface FileUploadItemGroupProps extends PropsWithElement<'ul'>, HTMLAttributes<'ul'> {}
</script>

<script lang="ts">
	import { FileUploadRootContext } from '../modules/root-context';
	import { classesFileUpload } from '@skeletonlabs/skeleton-common';
	import { mergeProps } from '@zag-js/svelte';

	const props: FileUploadItemGroupProps = $props();

	const fileUpload = FileUploadRootContext.consume();

	const { element, children, ...rest } = $derived(props);

	const attributes = $derived(
		mergeProps(
			fileUpload().getItemGroupProps(),
			{
				class: classesFileUpload.itemGroup,
			},
			rest,
		),
	);
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<ul {...attributes}>
		{@render children?.()}
	</ul>
{/if}
