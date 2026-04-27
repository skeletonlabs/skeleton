<script lang="ts" module>
	import type { HTMLAttributes } from '../../../internal/html-attributes.js';
	import type { PropsWithElement } from '../../../internal/props-with-element.js';
	import type { Props } from '@zag-js/qr-code';

	export interface QrCodeRootProps extends Omit<Props, 'id'>, PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir'> {}
</script>

<script lang="ts">
	import { useQrCode } from '../modules/provider.svelte';
	import { RootContext } from '../modules/root-context.js';
	import { splitProps } from '@zag-js/qr-code';
	import { mergeProps } from '@zag-js/svelte';

	const props: QrCodeRootProps = $props();

	const [qrCodeProps, componentProps] = $derived(splitProps(props));
	const { element, children, ...rest } = $derived(componentProps);

	const id = $props.id();
	const qrCode = useQrCode(() => ({
		...qrCodeProps,
		id: id,
	}));

	const attributes = $derived(mergeProps(qrCode().getRootProps(), rest));

	RootContext.provide(() => qrCode());
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<div {...attributes}>
		{@render children?.()}
	</div>
{/if}
