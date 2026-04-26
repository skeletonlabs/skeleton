import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { RootContext } from '../modules/root-context.js';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface QrCodeFrameProps extends PropsWithElement<'svg'>, HTMLAttributes<'svg'> {}

export default function Frame(props: QrCodeFrameProps) {
	const qrCode = use(RootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(qrCode.getFrameProps(), rest);

	return element ? element(attributes) : <svg {...attributes}>{children}</svg>;
}
