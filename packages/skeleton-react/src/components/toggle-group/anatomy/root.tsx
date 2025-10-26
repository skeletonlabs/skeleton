import { useToggleGroup } from '../modules/provider';
import { RootContext } from '../modules/root-context.js';
import type { HTMLAttributes } from '@/internal/html-attributes.js';
import type { PropsWithElement } from '@/internal/props-with-element.js';
import { classesToggleGroup } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { splitProps } from '@zag-js/toggle-group';
import type { Props } from '@zag-js/toggle-group';

export interface ToggleGroupRootProps
	extends Omit<Props, 'id'>,
		PropsWithElement<'div'>,
		HTMLAttributes<'div', 'id' | 'dir' | 'defaultValue'> {}

export default function ToggleGroupRoot(props: ToggleGroupRootProps) {
	const [toggleGroupProps, componentProps] = splitProps(props);
	const { element, children, ...rest } = componentProps;

	const toggleGroup = useToggleGroup(toggleGroupProps);

	const attributes = mergeProps(
		toggleGroup.getRootProps(),
		{
			className: classesToggleGroup.root,
		},
		rest,
	);

	return (
		<RootContext.Provider value={toggleGroup}>{element ? element(attributes) : <div {...attributes}>{children}</div>}</RootContext.Provider>
	);
}
