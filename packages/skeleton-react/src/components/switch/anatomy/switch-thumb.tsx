'use client';

import { useContext, type ComponentProps } from 'react';
import { mergeProps } from '@zag-js/react';
import { SwitchRootContext } from '../modules/switch-root-context';
import { classesSwitch } from '@skeletonlabs/skeleton-common';
import type { PropsWithElement } from '@/internal/props-with-element';

export interface SwitchThumbProps extends PropsWithElement, Omit<ComponentProps<'span'>, 'children'> {}

export default function (props: SwitchThumbProps) {
	const rootContext = useContext(SwitchRootContext);
	const { element, ...restAttributes } = props;
	const attributes = mergeProps(
		rootContext.api.getThumbProps(),
		{
			className: classesSwitch.thumb
		},
		restAttributes
	);
	return element ? element({ attributes }) : <span {...attributes} />;
}
