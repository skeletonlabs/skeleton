<script lang="ts" module>
	import type { HTMLAttributes } from '../../../internal/html-attributes.js';
	import type { PropsWithElement } from '../../../internal/props-with-element.js';
	import type { DownloadTriggerProps } from '@zag-js/qr-code';

	export interface QrCodeDownloadTriggerProps extends DownloadTriggerProps, PropsWithElement<'button'>, HTMLAttributes<'button'> {}
</script>

<script lang="ts">
	import { RootContext } from '../modules/root-context.js';
	import { mergeProps } from '@zag-js/svelte';

	const props: QrCodeDownloadTriggerProps = $props();

	const qrCode = RootContext.consume();

	const { mimeType, fileName, quality, element, children, ...rest } = $derived(props);

	const attributes = $derived(mergeProps(qrCode().getDownloadTriggerProps({ mimeType, fileName, quality }), rest));
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<button {...attributes}>
		{@render children?.()}
	</button>
{/if}
