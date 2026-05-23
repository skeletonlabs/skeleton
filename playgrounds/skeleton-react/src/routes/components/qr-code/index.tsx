import { QrCode } from '@skeletonlabs/skeleton-react';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/components/qr-code/')({
	component: Page,
});

function Page() {
	return (
		<QrCode value="https://github.com/skeletonlabs/skeleton">
			<QrCode.Frame>
				<QrCode.Pattern />
			</QrCode.Frame>
			<QrCode.Overlay>Overlay</QrCode.Overlay>
			<QrCode.DownloadTrigger mimeType="image/png" fileName="skeleton-qr-code">
				Download
			</QrCode.DownloadTrigger>
		</QrCode>
	);
}
