import { useContext } from 'react';
import type { HTMLAttributes } from '@/internal/html-attributes';
import { mergeProps } from '@zag-js/react';
import { SwitchRootContext } from '../modules/root-context';
import { classesSwitch } from '@skeletonlabs/skeleton-common';
import type { PropsWithElement } from '@/internal/props-with-element';

export interface SwitchLabelProps extends PropsWithElement, HTMLAttributes<'span'> {}

export default function (props: SwitchLabelProps) {
	const rootContext = useContext(SwitchRootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(rootContext.api.getLabelProps(), { className: classesSwitch.label }, rest);

	return element ? element({ attributes }) : <span {...attributes}>{children}</span>;
}
