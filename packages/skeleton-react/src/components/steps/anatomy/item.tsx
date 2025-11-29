import { ItemContext } from '../modules/item-context.js';
import { RootContext } from '../modules/root-context.js';
import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { mergeProps } from '@zag-js/react';
import type { ItemProps } from '@zag-js/steps';
import { use } from 'react';

export interface StepsItemProps extends ItemProps, PropsWithElement<'div'>, HTMLAttributes<'div'> {}

export default function Item(props: StepsItemProps) {
	const steps = use(RootContext);

	// @zag-js/steps does not currently provide a splitItemProps function, so manually destructure
	const { element, children, index, ...rest } = props;
	const itemProps = { index };

	const attributes = mergeProps(
		steps.getItemProps(itemProps),
		rest,
	);

	return (
		<ItemContext.Provider value={itemProps}>{element ? element(attributes) : <div {...attributes}>{children}</div>}</ItemContext.Provider>
	);
}
