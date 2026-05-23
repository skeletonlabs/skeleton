<script lang="ts">
	import { QrCode } from '@skeletonlabs/skeleton-svelte';
</script>

<QrCode value="https://skeleton.dev">
	<QrCode.DownloadTrigger fileName="skeleton-dev" mimeType="image/png">
		<QrCode.Frame class="size-full max-size-36">
			<QrCode.Pattern />
		</QrCode.Frame>
	</QrCode.DownloadTrigger>
</QrCode>
