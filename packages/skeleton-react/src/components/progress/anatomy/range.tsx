import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { RootContext } from '../modules/root-context.js';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface ProgressRangeProps extends PropsWithElement<'div'>, HTMLAttributes<'div', 'children'> {}

export default function Range(props: ProgressRangeProps) {
	const progress = use(RootContext);

	const { element, ...rest } = props;

	const attributes = mergeProps(
		progress.getRangeProps(),
		rest,
	);

	return element ? element(attributes) : <div {...attributes} />;
}
