import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { RootContext } from '../modules/root-context.js';
import * as classes from '@skeletonlabs/skeleton-common/classes';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface TagsInputLabelProps extends PropsWithElement<'label'>, HTMLAttributes<'label'> {}

export default function Label(props: TagsInputLabelProps) {
	const tagsInput = use(RootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(
		tagsInput.getLabelProps(),
		{
			className: classes.tagsInput.label,
		},
		rest,
	);

	return element ? element(attributes) : <label {...attributes}>{children}</label>;
}
