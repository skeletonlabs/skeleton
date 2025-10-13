import { RootContext } from '../modules/root-context';
import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';
import { classesToggleGroup } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { splitItemProps, type ItemProps } from '@zag-js/toggle-group';
import { use } from 'react';

export interface ToggleGroupItemProps extends ItemProps, PropsWithElement<'button'>, HTMLAttributes<'button', 'value'> {}

export default function Item(props: ToggleGroupItemProps) {
	const toggleGroup = use(RootContext);

	const [itemProps, componentProps] = splitItemProps(props);
	const { element, children, ...rest } = componentProps;

	const attributes = mergeProps(
		toggleGroup.getItemProps(itemProps),
		{
			className: classesToggleGroup.item,
		},
		rest,
	);

	return element ? element(attributes) : <button {...attributes}>{children}</button>;
}
