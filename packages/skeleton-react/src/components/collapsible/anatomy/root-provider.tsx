import type { useCollapsible } from '../modules/provider';
import { RootContext } from '../modules/root-context.js';
import type { HTMLAttributes } from '@/internal/html-attributes.js';
import type { PropsWithElement } from '@/internal/props-with-element.js';
import { classesCollapsible } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';

export interface CollapsibleRootProviderProps extends PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir'> {
	value: ReturnType<typeof useCollapsible>;
}

export default function CollapsibleRootProvider(props: CollapsibleRootProviderProps) {
	const { element, children, value: collapsible, ...rest } = props;

	const attributes = mergeProps(
		collapsible.getRootProps(),
		{
			className: classesCollapsible.root,
		},
		rest,
	);

	return (
		<RootContext.Provider value={collapsible}>{element ? element(attributes) : <div {...attributes}>{children}</div>}</RootContext.Provider>
	);
}
