import { QrCode } from '@skeletonlabs/skeleton-react';

export default function FrameColors() {
	return (
		<QrCode value="https://skeleton.dev">
			<QrCode.Frame className="rounded-lg" style={{ backgroundColor: 'var(--color-brand)' }}>
				<QrCode.Pattern style={{ fill: 'var(--color-brand-contrast)' }} />
			</QrCode.Frame>
			<QrCode.Overlay />
		</QrCode>
	);
}
