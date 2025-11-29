import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { RootContext } from '../modules/root-context.js';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface DialogBackdropProps extends PropsWithElement<'div'>, HTMLAttributes<'div', 'children'> {}

export default function Backdrop(props: DialogBackdropProps) {
	const dialog = use(RootContext);

	const { element, ...rest } = props;

	const attributes = mergeProps(
		dialog.getBackdropProps(),
		rest,
	);

	return element ? element(attributes) : <div {...attributes} />;
}
