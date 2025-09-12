import { useContext } from 'react';
import type { HTMLAttributes } from '@/internal/html-attributes';
import { mergeProps } from '@zag-js/react';
import { SwitchRootContext } from '../modules/root-context';
import { classesSwitch } from '@skeletonlabs/skeleton-common';
import type { PropsWithElement } from '@/internal/props-with-element';

export interface SwitchThumbProps extends PropsWithElement, HTMLAttributes<'span'> {}

export default function (props: SwitchThumbProps) {
	const rootContext = useContext(SwitchRootContext);

	const { element, children, ...restAttributes } = props;

	const attributes = mergeProps(rootContext.api.getThumbProps(), { className: classesSwitch.thumb }, restAttributes);

	return element ? element({ attributes }) : <span {...attributes}>{children}</span>;
}
