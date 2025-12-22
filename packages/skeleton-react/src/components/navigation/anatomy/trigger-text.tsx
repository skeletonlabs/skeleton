import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { RootContext } from '../modules/root-context.js';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface NavigationTriggerTextProps extends PropsWithElement<'span'>, HTMLAttributes<'span'> {}

export default function NavigationTriggerText(props: NavigationTriggerTextProps) {
	const { element, children, ...rest } = props;

	const navigation = use(RootContext);

	const attributes = mergeProps(
		{
			'data-scope': 'navigation',
			'data-part': 'trigger-text',
			'data-layout': navigation.layout,
		},
		rest,
	);

	return element ? element(attributes) : <span {...attributes}>{children}</span>;
}
