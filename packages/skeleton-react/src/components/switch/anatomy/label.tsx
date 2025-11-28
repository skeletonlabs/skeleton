import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { RootContext } from '../modules/root-context.js';
import * as classes from '@skeletonlabs/skeleton-common/classes';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface SwitchLabelProps extends PropsWithElement<'span'>, HTMLAttributes<'span'> {}

export default function Label(props: SwitchLabelProps) {
	const switch_ = use(RootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(
		switch_.getLabelProps(),
		{
			className: classes.switch.label,
		},
		rest,
	);

	return element ? element(attributes) : <span {...attributes}>{children}</span>;
}
