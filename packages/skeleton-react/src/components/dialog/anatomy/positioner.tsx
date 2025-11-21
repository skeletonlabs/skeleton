import { RootContext } from '../modules/root-context.js';
import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { classesDialog } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface DialogPositionerProps extends PropsWithElement<'div'>, HTMLAttributes<'div'> {}

export default function Positioner(props: DialogPositionerProps) {
	const dialog = use(RootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(
		dialog.getPositionerProps(),
		{
			className: classesDialog.positioner,
		},
		rest,
	);

	return element ? element(attributes) : <div {...attributes}>{children}</div>;
}
