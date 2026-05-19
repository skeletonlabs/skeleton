import { QrCode } from '@skeletonlabs/skeleton-react';
import { DownloadCloud } from 'lucide-react';

export default function OverlayDemo() {
	return (
		<QrCode value="https://skeleton.dev">
			<QrCode.Frame>
				<QrCode.Pattern />
			</QrCode.Frame>
			<QrCode.Overlay>
				<div className="size-8 bg-surface-50 rounded p-2 flex items-center justify-center">
					<DownloadCloud className="size-4" />
				</div>
			</QrCode.Overlay>
		</QrCode>
	);
}
