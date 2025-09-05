<script lang="ts" module>
	import type { HTMLInputAttributes } from 'svelte/elements';
	import type { PropsWithElement } from '@/internal/props-with-element';

	export interface FileUploadHiddenInputProps extends PropsWithElement, Omit<HTMLInputAttributes, 'children'> {}
</script>

<script lang="ts">
	import { classesFileUpload } from '@skeletonlabs/skeleton-common';
	import { FileUploadRootContext } from '../modules/file-upload-root-context';
	import { mergeProps } from '@zag-js/svelte';

	const props: FileUploadHiddenInputProps = $props();
	const rootContext = FileUploadRootContext.consume();
	const { element, ...restAttributes } = $derived(props);
	const attributes = $derived(mergeProps(rootContext.api.getHiddenInputProps(), { class: classesFileUpload.hiddenInput }, restAttributes));
</script>

{#if element}
	{@render element({ attributes })}
{:else}
	<input {...attributes} />
{/if}
