import { RootContext } from '../modules/root-context.js';
import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import * as classes from '@skeletonlabs/skeleton-common/classes';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface FloatingPanelHeaderProps extends PropsWithElement<'div'>, HTMLAttributes<'div'> {}

export default function Header(props: FloatingPanelHeaderProps) {
	const floatingPanel = use(RootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(
		floatingPanel.getHeaderProps(),
		{
			className: classes.floatingPanel.header,
		},
		rest,
	);

	return element ? element(attributes) : <div {...attributes}>{children}</div>;
}
