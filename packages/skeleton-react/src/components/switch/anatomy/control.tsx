'use client';

import { useContext, type ComponentProps } from 'react';
import { mergeProps } from '@zag-js/react';
import { SwitchRootContext } from '../modules/root-context';
import { classesSwitch } from '@skeletonlabs/skeleton-common';
import type { PropsWithElement } from '@/internal/props-with-element';

export interface SwitchControlProps extends PropsWithElement, ComponentProps<'span'> {}

export default function (props: SwitchControlProps) {
	const rootContext = useContext(SwitchRootContext);

	const { element, children, ...restAttributes } = props;

	const attributes = mergeProps(rootContext.api.getControlProps(), { className: classesSwitch.control }, restAttributes);

	return element ? element({ attributes }) : <span {...attributes}>{children}</span>;
}
