import { useContext } from 'react';
import type { HTMLAttributes } from '@/internal/html-attributes';
import { mergeProps, Portal } from '@zag-js/react';
import { ComboboxRootContext } from '../modules/root-context';
import { classesCombobox } from '@skeletonlabs/skeleton-common';
import type { PropsWithElement } from '@/internal/props-with-element';

export interface ComboboxPositionerProps extends PropsWithElement, HTMLAttributes<'div'> {}

export default function (props: ComboboxPositionerProps) {
	const rootContext = useContext(ComboboxRootContext);

	const { element, children, ...restAttributes } = props;

	const attributes = mergeProps(rootContext.api.getPositionerProps(), { className: classesCombobox.positioner }, restAttributes);

	return <Portal>{element ? element({ attributes }) : <div {...attributes}>{children}</div>}</Portal>;
}
