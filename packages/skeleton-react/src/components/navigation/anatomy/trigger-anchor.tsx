import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { RootContext } from '../modules/root-context.js';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface NavigationTriggerAnchorProps extends PropsWithElement<'a'>, HTMLAttributes<'a'> {}

export default function NavigationTriggerAnchor(props: NavigationTriggerAnchorProps) {
	const { element, children, ...rest } = props;

	const navigation = use(RootContext);

	const attributes = mergeProps(
		{
			'data-scope': 'navigation',
			'data-part': 'trigger-anchor',
			'data-layout': navigation.layout,
		},
		rest,
	);

	return element ? element(attributes) : <a {...attributes}>{children}</a>;
}
