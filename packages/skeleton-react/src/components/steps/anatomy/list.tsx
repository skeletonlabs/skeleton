import { RootContext } from '../modules/root-context.js';
import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface StepsListProps extends PropsWithElement<'div'>, HTMLAttributes<'div'> {}

export default function List(props: StepsListProps) {
	const steps = use(RootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(steps.getListProps(), rest);

	return element ? element(attributes) : <div {...attributes}>{children}</div>;
}
