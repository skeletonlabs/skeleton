import { QrCode } from "@skeletonlabs/skeleton-react";

export default function FrameColors() {
	return (
		<QrCode value="https://skeleton.dev">
			<QrCode.Frame className="max-size-36 bg-brand-dark size-full">
				<QrCode.Pattern className="fill-brand-contrast-dark" />
			</QrCode.Frame>
			<QrCode.Overlay />
		</QrCode>
	);
}
