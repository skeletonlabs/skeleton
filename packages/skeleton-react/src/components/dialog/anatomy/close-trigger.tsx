import { useContext } from 'react';
import type { HTMLAttributes } from '@/internal/html-attributes';
import { mergeProps } from '@zag-js/react';
import { DialogRootContext } from '../modules/root-context';
import { classesDialog } from '@skeletonlabs/skeleton-common';
import type { PropsWithElement } from '@/internal/props-with-element';

export interface DialogCloseTriggerProps extends PropsWithElement, HTMLAttributes<'button'> {}

export default function (props: DialogCloseTriggerProps) {
	const rootContext = useContext(DialogRootContext);

	const { element, children, ...restAttributes } = props;

	const attributes = mergeProps(rootContext.api.getCloseTriggerProps(), { className: classesDialog.closeTrigger }, restAttributes);

	return element ? element({ attributes }) : <button {...attributes}>{children}</button>;
}
