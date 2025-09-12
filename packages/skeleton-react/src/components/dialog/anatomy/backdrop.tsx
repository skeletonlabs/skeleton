import { useContext } from 'react';
import type { HTMLAttributes } from '@/internal/html-attributes';
import { mergeProps, Portal } from '@zag-js/react';
import { DialogRootContext } from '../modules/root-context';
import { classesDialog } from '@skeletonlabs/skeleton-common';
import type { PropsWithElement } from '@/internal/props-with-element';

export interface DialogBackdropProps extends PropsWithElement, Omit<HTMLAttributes<'div'>, 'children'> {}

export default function (props: DialogBackdropProps) {
	const rootContext = useContext(DialogRootContext);

	const { element, ...restAttributes } = props;

	const attributes = mergeProps(rootContext.api.getBackdropProps(), { className: classesDialog.backdrop }, restAttributes);

	return <Portal>{element ? element({ attributes }) : <div {...attributes} />}</Portal>;
}
