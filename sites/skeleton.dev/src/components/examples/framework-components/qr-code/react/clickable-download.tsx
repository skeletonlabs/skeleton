import { QrCode } from "@skeletonlabs/skeleton-react";

export default function ClickableDownload() {
	return (
		<QrCode value="https://skeleton.dev">
			<QrCode.DownloadTrigger fileName="skeleton-dev" mimeType="image/png">
				<QrCode.Frame className="max-size-36 size-full">
					<QrCode.Pattern />
				</QrCode.Frame>
			</QrCode.DownloadTrigger>
			<QrCode.Overlay />
		</QrCode>
	);
}
