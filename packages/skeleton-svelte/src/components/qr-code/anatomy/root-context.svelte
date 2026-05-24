<script lang="ts" module>
	import type { useQrCode } from '../modules/provider.svelte';
	import type { Snippet } from 'svelte';

	export interface QrCodeRootContextProps {
		children: Snippet<[ReturnType<typeof useQrCode>]>;
	}
</script>

<script lang="ts">
	import { QrCodeRootContext } from '../modules/root-context.js';

	const props: QrCodeRootContextProps = $props();

	const qrCode = QrCodeRootContext.consume();

	const { children } = $derived(props);
</script>

{@render children(qrCode)}
