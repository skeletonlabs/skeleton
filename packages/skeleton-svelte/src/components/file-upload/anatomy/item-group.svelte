<script lang="ts" module>
	import type { HTMLAttributes } from '../../../internal/html-attributes.js';
	import type { PropsWithElement } from '../../../internal/props-with-element.js';

	export interface FileUploadItemGroupProps extends PropsWithElement<'ul'>, HTMLAttributes<'ul'> {}
</script>

<script lang="ts">
	import { RootContext } from '../modules/root-context.js';
	import { mergeProps } from '@zag-js/svelte';

	const props: FileUploadItemGroupProps = $props();

	const fileUpload = RootContext.consume();

	const { element, children, ...rest } = $derived(props);

	const attributes = $derived(mergeProps(fileUpload().getItemGroupProps(), rest));
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<ul {...attributes}>
		{@render children?.()}
	</ul>
{/if}
