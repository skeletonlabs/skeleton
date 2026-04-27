import { QrCode } from '../../src/index.js';

export default function Test() {
	return (
		<QrCode data-testid="root" value="" >
			<QrCode.Frame data-testid="frame">
				<QrCode.Pattern data-testid="pattern" />
			</QrCode.Frame>
			<QrCode.Overlay data-testid="overlay" />
			<QrCode.DownloadTrigger data-testid="download-trigger" mimeType="image/png" fileName="skeleton-qr-code"/>
		</QrCode>
	);
}