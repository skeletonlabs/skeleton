import { QrCode } from '@skeletonlabs/skeleton-react';

export default function Default() {
	return (
		<QrCode value="https://skeleton.dev">
			<QrCode.Frame>
				<QrCode.Pattern />
			</QrCode.Frame>
			<QrCode.Overlay />
			<QrCode.DownloadTrigger fileName="skeleton-dev" mimeType="image/png">
				Download
			</QrCode.DownloadTrigger>
		</QrCode>
	);
}
