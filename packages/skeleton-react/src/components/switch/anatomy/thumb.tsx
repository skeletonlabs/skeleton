import { SwitchRootContext } from '../modules/root-context';
import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';
import { classesSwitch } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface SwitchThumbProps extends PropsWithElement<'span'>, HTMLAttributes<'span'> {}

export default function SwitchThumb(props: SwitchThumbProps) {
	const switch_ = use(SwitchRootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(switch_.getThumbProps(), rest, {
		className: classesSwitch.thumb,
	});

	return element ? element(attributes) : <span {...attributes}>{children}</span>;
}
