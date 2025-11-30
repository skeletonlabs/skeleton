<script lang="ts" module>
	import type { HTMLAttributes } from '../../../internal/html-attributes.js';
	import type { PropsWithElement } from '../../../internal/props-with-element.js';
	import type { useFileUpload } from '../modules/provider.svelte';

	export interface FileUploadRootProviderProps extends PropsWithElement<'div'>, Omit<HTMLAttributes<'div'>, 'id' | 'dir'> {
		value: ReturnType<typeof useFileUpload>;
	}
</script>

<script lang="ts">
	import { RootContext } from '../modules/root-context.js';
	import { mergeProps } from '@zag-js/svelte';

	const props: FileUploadRootProviderProps = $props();

	const { element, children, value: fileUpload, ...rest } = $derived(props);

	const attributes = $derived(mergeProps(fileUpload().getRootProps(), rest));

	RootContext.provide(() => fileUpload());
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<div {...attributes}>
		{@render children?.()}
	</div>
{/if}
