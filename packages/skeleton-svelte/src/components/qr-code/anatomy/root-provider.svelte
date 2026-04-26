<script lang="ts" module>
	import type { HTMLAttributes } from '../../../internal/html-attributes.js';
	import type { PropsWithElement } from '../../../internal/props-with-element.js';
	import type { useQrCode } from '../modules/provider.svelte';

	export interface QrCodeRootProviderProps extends PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir'> {
		value: ReturnType<typeof useQrCode>;
	}
</script>

<script lang="ts">
	import { RootContext } from '../modules/root-context.js';
	import { mergeProps } from '@zag-js/svelte';

	const props: QrCodeRootProviderProps = $props();

	const { element, children, value: qrCode, ...rest } = $derived(props);

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