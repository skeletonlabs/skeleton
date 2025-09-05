<script lang="ts" module>
	import type { HTMLAttributes } from 'svelte/elements';
	import type { PropsWithElement } from '@/internal/props-with-element';

	export interface FileUploadItemGroupProps extends PropsWithElement, HTMLAttributes<HTMLUListElement> {}
</script>

<script lang="ts">
	import { classesFileUpload } from '@skeletonlabs/skeleton-common';
	import { FileUploadRootContext } from '../modules/file-upload-root-context';
	import { mergeProps } from '@zag-js/svelte';

	const rootContext = FileUploadRootContext.consume();
	const props: FileUploadItemGroupProps = $props();
	const { element, children, ...restAttributes } = $derived(props);
	const attributes = $derived(mergeProps(rootContext.api.getItemGroupProps(), { class: classesFileUpload.itemGroup }, restAttributes));
</script>

{#if element}
	{@render element({ attributes })}
{:else}
	<ul {...attributes}>
		{@render children?.()}
	</ul>
{/if}
