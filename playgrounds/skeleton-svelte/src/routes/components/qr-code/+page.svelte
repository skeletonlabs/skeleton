<script lang="ts">
	import { QrCode } from '@skeletonlabs/skeleton-svelte';
</script>

<QrCode value="https://github.com/skeletonlabs/skeleton">
	<QrCode.Frame>
		<QrCode.Pattern />
	</QrCode.Frame>
	<QrCode.Overlay>Overlay</QrCode.Overlay>
	<QrCode.DownloadTrigger mimeType="image/png" fileName="skeleton-qr-code">Download</QrCode.DownloadTrigger>
</QrCode>
