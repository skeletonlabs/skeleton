import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { ItemContext } from '../modules/item-context.js';
import { TriggerItemContext } from '../modules/trigger-item-context.js';
import { splitItemProps, type ItemProps } from '@zag-js/menu';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface MenuTriggerItemProps extends ItemProps, PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir'> {}

export default function TriggerItem(props: MenuTriggerItemProps) {
	const triggerItemProps = use(TriggerItemContext);

	const [itemProps, componentProps] = splitItemProps(props);
	const { element, children, ...rest } = componentProps;

	const attributes = mergeProps(triggerItemProps, rest);

	return (
		<ItemContext.Provider value={itemProps}>{element ? element(attributes) : <div {...attributes}>{children}</div>}</ItemContext.Provider>
	);
}
