<script lang="ts">
	import { QrCode } from '@skeletonlabs/skeleton-svelte';
</script>

<QrCode value="https://skeleton.dev">
	<QrCode.Frame class="rounded-lg" style="background-color: var(--color-brand);">
		<QrCode.Pattern style="fill: var(--color-brand-contrast);" />
	</QrCode.Frame>
	<QrCode.Overlay />
</QrCode>
