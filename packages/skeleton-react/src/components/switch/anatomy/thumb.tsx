import { SwitchRootContext } from '../modules/root-context';
import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';
import { classesSwitch } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface SwitchThumbProps extends PropsWithElement<'span'>, HTMLAttributes<'span'> {}

export default function Thumb(props: SwitchThumbProps) {
	const switch_ = use(SwitchRootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(
		switch_.getThumbProps(),
		{
			className: classesSwitch.thumb,
		},
		rest,
	);

	return element ? element(attributes) : <span {...attributes}>{children}</span>;
}
