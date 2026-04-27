import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import type { DownloadTriggerProps } from '@zag-js/qr-code';
import { RootContext } from '../modules/root-context.js';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface QrCodeDownloadTriggerProps extends DownloadTriggerProps, PropsWithElement<'button'>, HTMLAttributes<'button'> {}

export default function DownloadTrigger(props: QrCodeDownloadTriggerProps) {
	const qrCode = use(RootContext);

	const { mimeType, fileName, quality, element, children, ...rest } = props;

	const attributes = mergeProps(qrCode.getDownloadTriggerProps({ mimeType, fileName, quality }), rest);

	return element ? element(attributes) : <button {...attributes}>{children}</button>;
}
