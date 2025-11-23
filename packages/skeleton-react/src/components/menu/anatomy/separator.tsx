import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { RootContext } from '../modules/root-context.js';
import { classesMenu } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface MenuSeparatorProps extends PropsWithElement<'hr'>, HTMLAttributes<'hr', 'id' | 'dir' | 'children'> {}

export default function Separator(props: MenuSeparatorProps) {
	const menu = use(RootContext);

	const { element, ...rest } = props;

	const attributes = mergeProps(
		menu.getSeparatorProps(),
		{
			className: classesMenu.separator,
		},
		rest,
	);

	return element ? element(attributes) : <hr {...attributes} />;
}
