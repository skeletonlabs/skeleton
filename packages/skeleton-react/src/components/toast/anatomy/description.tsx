import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { RootContext } from '../modules/root-context.js';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface ToastDescriptionProps extends PropsWithElement<'div'>, HTMLAttributes<'div'> {}

export default function Description(props: ToastDescriptionProps) {
	const toast = use(RootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(toast.getDescriptionProps(), rest);

	return element ? element(attributes) : <div {...attributes}>{children}</div>;
}
