import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { RootContext } from '../modules/root-context.js';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface NavigationTriggerProps extends PropsWithElement<'button'>, HTMLAttributes<'button'> {}

export default function NavigationTrigger(props: NavigationTriggerProps) {
	const { element, children, ...rest } = props;

	const navigation = use(RootContext);

	const attributes = mergeProps(
		{
			'data-scope': 'navigation',
			'data-part': 'trigger',
			'data-layout': navigation.layout,
			type: 'button',
		},
		rest,
	);

	return element ? element(attributes) : <button {...attributes}>{children}</button>;
}
