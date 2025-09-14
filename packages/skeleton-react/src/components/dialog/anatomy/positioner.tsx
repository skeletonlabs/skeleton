import { classesDialog } from '@skeletonlabs/skeleton-common';
import { mergeProps, Portal } from '@zag-js/react';
import { use } from 'react';

import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';

import { DialogRootContext } from '../modules/root-context';

export interface DialogPositionerProps extends PropsWithElement<'div'>, HTMLAttributes<'div'> {}

export default function Positioner(props: DialogPositionerProps) {
	const dialog = use(DialogRootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(dialog.getPositionerProps(), rest, {
		className: classesDialog.positioner,
	});

	return <Portal>{element ? element(attributes) : <div {...attributes}>{children}</div>}</Portal>;
}
