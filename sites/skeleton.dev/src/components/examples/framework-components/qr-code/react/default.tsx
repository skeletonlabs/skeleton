import { QrCode } from "@skeletonlabs/skeleton-react";
import favicon from "@/assets/favicon.png";

export default function Default() {
	return (
		<QrCode value="https://skeleton.dev">
			<QrCode.DownloadTrigger fileName="skeleton-dev" mimeType="image/png">
				<QrCode.Frame className="max-size-36">
					<QrCode.Pattern />
				</QrCode.Frame>
				<QrCode.Overlay className="rounded-full bg-white p-1">
					<img src={favicon.src} alt="Skeleton Logo" className="size-12" />
				</QrCode.Overlay>
			</QrCode.DownloadTrigger>
		</QrCode>
	);
}
