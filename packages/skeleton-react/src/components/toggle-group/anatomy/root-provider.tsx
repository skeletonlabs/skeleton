import type { useToggleGroup } from '../modules/provider';
import { RootContext } from '../modules/root-context';
import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';
import { classesToggleGroup } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';

export interface ToggleGroupRootProviderProps extends PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir'> {
	value: ReturnType<typeof useToggleGroup>;
}

export default function ToggleGroupRootProvider(props: ToggleGroupRootProviderProps) {
	const { element, children, value: toggleGroup, ...rest } = props;

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
