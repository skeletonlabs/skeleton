<script lang="ts">
	import favicon from '@/assets/favicon.png';
	import { QrCode } from '@skeletonlabs/skeleton-svelte';
</script>

<QrCode value="https://skeleton.dev">
	<QrCode.Frame class="size-full max-size-36">
		<QrCode.Pattern />
	</QrCode.Frame>
	<QrCode.Overlay>
		<img src={favicon.src} alt="Skeleton Logo" class="size-12" />
	</QrCode.Overlay>
	<QrCode.DownloadTrigger fileName="skeleton-dev" mimeType="image/png">Download</QrCode.DownloadTrigger>
</QrCode>
