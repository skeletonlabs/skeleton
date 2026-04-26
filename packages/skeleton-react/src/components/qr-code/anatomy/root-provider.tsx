import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import type { useQrCode } from '../modules/provider.js';
import { RootContext } from '../modules/root-context.js';
import { mergeProps } from '@zag-js/react';

export interface QrCodeRootProviderProps extends PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir'> {
	value: ReturnType<typeof useQrCode>;
}

export default function RootProvider(props: QrCodeRootProviderProps) {
	const { element, children, value: qrCode, ...rest } = props;

	const attributes = mergeProps(qrCode.getRootProps(), rest);

	return <RootContext.Provider value={qrCode}>{element ? element(attributes) : <div {...attributes}>{children}</div>}</RootContext.Provider>;
}