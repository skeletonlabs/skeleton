import { useContext, type ComponentProps } from 'react';
import { mergeProps } from '@zag-js/react';
import { DialogRootContext } from '../modules/dialog-root-context';
import { classesDialog } from '@skeletonlabs/skeleton-common';
import type { PropsWithElement } from '@/internal/props-with-element';

export interface DialogDescriptionProps extends PropsWithElement, ComponentProps<'div'> {}

export default function (props: DialogDescriptionProps) {
	const rootContext = useContext(DialogRootContext);
	const { element, children, ...restAttributes } = props;
	const attributes = mergeProps(rootContext.api.getDescriptionProps(), { className: classesDialog.description }, restAttributes);
	return element ? element({ attributes }) : <div {...attributes}>{children}</div>;
}
