<script lang="ts">
	import DownloadCloud from '@lucide/svelte/icons/download-cloud';
	import { QrCode } from '@skeletonlabs/skeleton-svelte';
</script>

<QrCode value="https://skeleton.dev">
	<QrCode.Frame>
		<QrCode.Pattern />
	</QrCode.Frame>
	<QrCode.Overlay>
		<div class="size-8 bg-surface-50 rounded p-2 flex items-center justify-center">
			<DownloadCloud class="size-4" />
		</div>
	</QrCode.Overlay>
</QrCode>
