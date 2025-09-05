<script lang="ts" module>
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import type { PropsWithElement } from '@/internal/props-with-element';

	export interface FileUploadTriggerProps extends PropsWithElement, HTMLButtonAttributes {}
</script>

<script lang="ts">
	import { classesFileUpload } from '@skeletonlabs/skeleton-common';
	import { FileUploadRootContext } from '../modules/file-upload-root-context';
	import { mergeProps } from '@zag-js/svelte';

	const props: FileUploadTriggerProps = $props();
	const rootContext = FileUploadRootContext.consume();
	const { element, children, ...restAttributes } = $derived(props);
	const attributes = $derived(mergeProps(rootContext.api.getTriggerProps(), { class: classesFileUpload.trigger }, restAttributes));
</script>

{#if element}
	{@render element({ attributes })}
{:else}
	<button {...attributes}>
		{@render children?.()}
	</button>
{/if}
