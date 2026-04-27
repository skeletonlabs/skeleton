<script lang="ts">
	import { QrCode } from '../../src/index.js';
</script>

<QrCode value="" data-testid="root">
	<QrCode.Frame data-testid="frame">
		<QrCode.Pattern data-testid="pattern" />
	</QrCode.Frame>
	<QrCode.Overlay data-testid="overlay" />
	<QrCode.DownloadTrigger data-testid="download-trigger" mimeType="image/png" fileName="" />
</QrCode>
