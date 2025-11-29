<script lang="ts" module>
	import type { HTMLAttributes } from '../../../internal/html-attributes.js';
	import type { PropsWithElement } from '../../../internal/props-with-element.js';
	import type { Props } from '@zag-js/file-upload';

	export interface FileUploadRootProps extends Omit<Props, 'id'>, PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir'> {}
</script>

<script lang="ts">
	import { useFileUpload } from '../modules/provider.svelte';
	import { RootContext } from '../modules/root-context.js';
	import { splitProps } from '@zag-js/file-upload';
	import { mergeProps } from '@zag-js/svelte';

	const props: FileUploadRootProps = $props();

	const [fileUploadProps, componentProps] = $derived(splitProps(props));
	const { element, children, ...rest } = $derived(componentProps);

	const id = $props.id();
	const fileUpload = useFileUpload(() => ({
		...fileUploadProps,
		id: id,
	}));

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
