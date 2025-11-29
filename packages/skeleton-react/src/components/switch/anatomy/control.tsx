import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { RootContext } from '../modules/root-context.js';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface SwitchControlProps extends PropsWithElement<'span'>, HTMLAttributes<'span'> {}

export default function Control(props: SwitchControlProps) {
	const switch_ = use(RootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(
		switch_.getControlProps(),
		rest,
	);

	return element ? element(attributes) : <span {...attributes}>{children}</span>;
}
