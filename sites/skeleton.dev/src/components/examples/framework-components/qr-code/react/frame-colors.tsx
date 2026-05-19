import { QrCode } from '@skeletonlabs/skeleton-react';

export default function FrameColors() {
	return (
		<QrCode value="https://skeleton.dev">
			<QrCode.Frame className="size-full max-size-36 bg-brand-contrast-dark">
				<QrCode.Pattern className="fill-brand-dark" />
			</QrCode.Frame>
			<QrCode.Overlay />
		</QrCode>
	);
}
