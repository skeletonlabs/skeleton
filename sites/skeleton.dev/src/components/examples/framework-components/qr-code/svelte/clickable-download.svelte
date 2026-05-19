<script lang="ts">
	import { QrCode } from '@skeletonlabs/skeleton-svelte';
</script>

<QrCode value="https://skeleton.dev">
	<QrCode.DownloadTrigger fileName="skeleton-dev" mimeType="image/png">
		<QrCode.Frame>
			<QrCode.Pattern />
		</QrCode.Frame>
	</QrCode.DownloadTrigger>
	<QrCode.Overlay />
</QrCode>
