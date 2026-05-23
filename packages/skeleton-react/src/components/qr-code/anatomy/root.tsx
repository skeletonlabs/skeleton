import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { splitProps, type Props } from '@zag-js/qr-code';
import { mergeProps } from '@zag-js/react';
import { useQrCode } from '../modules/provider.js';
import { RootContext } from '../modules/root-context.js';

export interface QrCodeRootProps extends Omit<Props, 'id'>, PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir' | 'defaultValue'> {}

export default function Root(props: QrCodeRootProps) {
	const [qrCodeProps, componentProps] = splitProps(props);
	const { element, children, ...rest } = componentProps;

	const qrCode = useQrCode(qrCodeProps);

	const attributes = mergeProps(qrCode.getRootProps(), rest);

	return (
		<RootContext.Provider value={qrCode}>{element ? element(attributes) : <div {...attributes}>{children}</div>}</RootContext.Provider>
	);
}
