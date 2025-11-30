<script lang="ts" module>
	import type { HTMLAttributes } from '../../../internal/html-attributes.js';
	import type { PropsWithElement } from '../../../internal/props-with-element.js';

	export interface FileUploadHiddenInputProps extends PropsWithElement<'input'>, HTMLAttributes<'input', 'children'> {}
</script>

<script lang="ts">
	import { RootContext } from '../modules/root-context.js';
	import { mergeProps } from '@zag-js/svelte';

	const props: FileUploadHiddenInputProps = $props();

	const fileUpload = RootContext.consume();

	const { element, ...rest } = $derived(props);

	const attributes = $derived(mergeProps(fileUpload().getHiddenInputProps(), rest));
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<input {...attributes} />
{/if}
