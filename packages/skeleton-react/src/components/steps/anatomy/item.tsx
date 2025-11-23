import { ItemContext } from '../modules/item-context.js';
import { RootContext } from '../modules/root-context.js';
import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { classesSteps } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import type { ItemProps } from '@zag-js/steps';
import { use } from 'react';

export interface StepsItemProps extends ItemProps, PropsWithElement<'div'>, HTMLAttributes<'div'> {}

export default function Item(props: StepsItemProps) {
	const steps = use(RootContext);

	const { index, ...componentProps } = props;
	const { element, children, ...rest } = componentProps;
	const itemProps = { index };

	const attributes = mergeProps(
		steps.getItemProps({ index }),
		{
			className: classesSteps.item,
		},
		rest,
	);

	return (
		<ItemContext.Provider value={itemProps}>{element ? element(attributes) : <div {...attributes}>{children}</div>}</ItemContext.Provider>
	);
}
