import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { useCollapsible } from '../modules/provider.js';
import { RootContext } from '../modules/root-context.js';
import { splitProps } from '@zag-js/collapsible';
import type { Props } from '@zag-js/collapsible';
import { mergeProps } from '@zag-js/react';

export interface CollapsibleRootProps extends Omit<Props, 'id'>, PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir'> {}

export default function CollapsibleRoot(props: CollapsibleRootProps) {
	const [collapsibleProps, componentProps] = splitProps(props);
	const { element, children, ...rest } = componentProps;

	const collapsible = useCollapsible(collapsibleProps);

	const attributes = mergeProps(
		collapsible.getRootProps(),
		rest,
	);

	return (
		<RootContext.Provider value={collapsible}>{element ? element(attributes) : <div {...attributes}>{children}</div>}</RootContext.Provider>
	);
}
