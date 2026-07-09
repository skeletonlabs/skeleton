import { QrCode } from '@skeletonlabs/skeleton-react';
import favicon from '@/assets/favicon.png';

export default function Default() {
	return (
		<QrCode value="https://skeleton.dev">
			<QrCode.Frame className="size-full max-size-36">
				<QrCode.Pattern />
			</QrCode.Frame>
			<QrCode.Overlay className="bg-white rounded-full p-1">
				<img src={favicon.src} alt="Skeleton Logo" className="size-12" />
			</QrCode.Overlay>
			<QrCode.DownloadTrigger fileName="skeleton-dev" mimeType="image/png">
				Download
			</QrCode.DownloadTrigger>
		</QrCode>
	);
}
