import { RootContext } from '../modules/root-context.js';
import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import * as classes from '@skeletonlabs/skeleton-common/classes';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface FloatingPanelTitleProps extends PropsWithElement<'div'>, HTMLAttributes<'div'> {}

export default function Title(props: FloatingPanelTitleProps) {
	const floatingPanel = use(RootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(
		floatingPanel.getTitleProps(),
		{
			className: classes.floatingPanel.title,
		},
		rest,
	);

	return element ? element(attributes) : <div {...attributes}>{children}</div>;
}
