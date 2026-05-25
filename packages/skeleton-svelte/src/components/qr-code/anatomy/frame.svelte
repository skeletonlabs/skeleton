<script lang="ts" module>
	import type { HTMLAttributes } from '../../../internal/html-attributes.js';
	import type { PropsWithElement } from '../../../internal/props-with-element.js';

	export interface QrCodeFrameProps extends PropsWithElement<'svg'>, HTMLAttributes<'svg'> {}
</script>

<script lang="ts">
	import { QrCodeRootContext } from '../modules/root-context.js';
	import { mergeProps } from '@zag-js/svelte';

	const props: QrCodeFrameProps = $props();

	const qrCode = QrCodeRootContext.consume();

	const { element, children, ...rest } = $derived(props);

	const attributes = $derived(mergeProps(qrCode().getFrameProps(), rest));
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<svg {...attributes}>
		{@render children?.()}
	</svg>
{/if}
