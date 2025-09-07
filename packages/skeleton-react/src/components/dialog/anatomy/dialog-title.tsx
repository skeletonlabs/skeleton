import { useContext, type ComponentProps } from 'react';
import { mergeProps } from '@zag-js/react';
import { DialogRootContext } from '../modules/dialog-root-context';
import { classesDialog } from '@skeletonlabs/skeleton-common';
import type { PropsWithElement } from '@/internal/props-with-element';

export interface DialogTitleProps extends PropsWithElement, ComponentProps<'div'> {}

export default function (props: DialogTitleProps) {
	const rootContext = useContext(DialogRootContext);
	const { element, children, ...restAttributes } = props;
	const attributes = mergeProps(rootContext.api.getTitleProps(), { className: classesDialog.title }, restAttributes);
	return element ? element({ attributes }) : <div {...attributes}>{children}</div>;
}
