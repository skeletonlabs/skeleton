<script lang="ts" module>
	import type { HTMLAttributes } from '@/internal/html-attributes';
	import type { PropsWithElement } from '@/internal/props-with-element';

	export interface FileUploadTriggerProps extends PropsWithElement, HTMLAttributes<'button'> {}
</script>

<script lang="ts">
	import { classesFileUpload } from '@skeletonlabs/skeleton-common';
	import { FileUploadRootContext } from '../modules/root-context';
	import { mergeProps } from '@zag-js/svelte';

	const props: FileUploadTriggerProps = $props();

	const rootContext = FileUploadRootContext.consume();

	const { element, children, ...rest } = $derived(props);

	const attributes = $derived(mergeProps(rootContext.api.getTriggerProps(), { class: classesFileUpload.trigger }, rest));
</script>

{#if element}
	{@render element({ attributes })}
{:else}
	<button {...attributes}>
		{@render children?.()}
	</button>
{/if}
