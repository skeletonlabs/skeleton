<script lang="ts" module>
	import type { HTMLAttributes } from '../../../internal/html-attributes.js';
	import type { PropsWithElement } from '../../../internal/props-with-element.js';

	export interface QrCodePatternProps extends PropsWithElement<'path'>, HTMLAttributes<'path'> {}
</script>

<script lang="ts">
	import { RootContext } from '../modules/root-context.js';
	import { mergeProps } from '@zag-js/svelte';

	const props: QrCodePatternProps = $props();

	const qrCode = RootContext.consume();

	const { element, ...rest } = $derived(props);

	const attributes = $derived(mergeProps(qrCode().getPatternProps(), rest));
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<path {...attributes} />
{/if}
