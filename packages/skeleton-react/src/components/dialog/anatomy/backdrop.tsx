import { classesDialog } from '@skeletonlabs/skeleton-common';
import { mergeProps, Portal } from '@zag-js/react';
import { use } from 'react';

import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';

import { DialogRootContext } from '../modules/root-context';

export interface DialogBackdropProps extends PropsWithElement<'div'>, HTMLAttributes<'div', 'children'> {}

export default function Backdrop(props: DialogBackdropProps) {
	const dialog = use(DialogRootContext);

	const { element, ...rest } = props;

	const attributes = mergeProps(dialog.getBackdropProps(), rest, {
		className: classesDialog.backdrop,
	});

	return <Portal>{element ? element(attributes) : <div {...attributes} />}</Portal>;
}
