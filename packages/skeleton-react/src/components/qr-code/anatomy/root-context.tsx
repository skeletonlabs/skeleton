import type { ReactNode } from 'react';
import { use } from 'react';
import type { useQrCode } from '../modules/provider.js';
import { RootContext as RootContext_ } from '../modules/root-context.js';

export interface QrCodeRootContextProps {
	children: (qrCode: ReturnType<typeof useQrCode>) => ReactNode;
}

export default function RootContext(props: QrCodeRootContextProps) {
	const qrCode = use(RootContext_);

	const { children } = props;

	return children(qrCode);
}