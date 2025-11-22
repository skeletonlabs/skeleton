import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { RootContext } from '../modules/root-context.js';
import { classesDialog } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface DialogDescriptionProps extends PropsWithElement<'div'>, HTMLAttributes<'div'> {}

export default function Description(props: DialogDescriptionProps) {
	const dialog = use(RootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(
		dialog.getDescriptionProps(),
		{
			className: classesDialog.description,
		},
		rest,
	);

	return element ? element(attributes) : <div {...attributes}>{children}</div>;
}
