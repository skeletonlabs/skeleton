<script lang="ts" module>
	import type { HTMLAttributes } from '@/internal/html-attributes';
	import type { PropsWithElement } from '@/internal/props-with-element';
	import type { Api } from '@zag-js/file-upload';

	export interface FileUploadRootProviderProps extends PropsWithElement, Omit<HTMLAttributes<'div'>, 'id' | 'dir'> {
		value: () => Api;
	}
</script>

<script lang="ts">
	import { mergeProps } from '@zag-js/svelte';
	import { classesFileUpload } from '@skeletonlabs/skeleton-common';
	import { FileUploadRootContext } from '../modules/root-context';

	const props: FileUploadRootProviderProps = $props();

	const { element, children, value: api, ...restAttributes } = $derived(props);

	const attributes = $derived(mergeProps(api().getRootProps(), { class: classesFileUpload.root }, restAttributes));

	FileUploadRootContext.provide({
		get api() {
			return api();
		}
	});
</script>

{#if element}
	{@render element({ attributes })}
{:else}
	<div {...attributes}>
		{@render children?.()}
	</div>
{/if}
