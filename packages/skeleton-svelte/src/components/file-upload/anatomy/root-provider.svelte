<script lang="ts" module>
	import type { HTMLAttributes } from '@/internal/html-attributes';
	import type { PropsWithElement } from '@/internal/props-with-element';

	import type { useFileUpload } from '../modules/use-file-upload.svelte';

	export interface FileUploadRootProviderProps extends PropsWithElement<'div'>, Omit<HTMLAttributes<'div'>, 'id' | 'dir'> {
		value: ReturnType<typeof useFileUpload>;
	}
</script>

<script lang="ts">
	import { classesFileUpload } from '@skeletonlabs/skeleton-common';
	import { mergeProps } from '@zag-js/svelte';

	import { FileUploadRootContext } from '../modules/root-context';

	const props: FileUploadRootProviderProps = $props();

	const { element, children, value: api, ...rest } = $derived(props);

	const attributes = $derived(
		mergeProps(api().getRootProps(), rest, {
			class: classesFileUpload.root,
		}),
	);

	FileUploadRootContext.provide(() => api());
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<div {...attributes}>
		{@render children?.()}
	</div>
{/if}
