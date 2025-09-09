'use client';

import { useContext, type ComponentProps } from 'react';
import { mergeProps } from '@zag-js/react';
import { SwitchRootContext } from '../modules/root-context';
import { classesSwitch } from '@skeletonlabs/skeleton-common';
import type { PropsWithElement } from '@/internal/props-with-element';

export interface SwitchLabelProps extends PropsWithElement, ComponentProps<'span'> {}

export default function (props: SwitchLabelProps) {
	const rootContext = useContext(SwitchRootContext);

	const { element, children, ...restAttributes } = props;

	const attributes = mergeProps(rootContext.api.getLabelProps(), { className: classesSwitch.label }, restAttributes);

	return element ? element({ attributes }) : <span {...attributes}>{children}</span>;
}
