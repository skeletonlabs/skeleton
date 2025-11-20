import type { useAccordion } from '../modules/provider.js';
import { RootContext } from '../modules/root-context.js';
import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { classesAccordion } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';

export interface AccordionRootProviderProps extends PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir' | 'defaultValue'> {
	value: ReturnType<typeof useAccordion>;
}

export default function RootProvider(props: AccordionRootProviderProps) {
	const { element, children, value: accordion, ...rest } = props;

	const attributes = mergeProps(
		accordion.getRootProps(),
		{
			className: classesAccordion.root,
		},
		rest,
	);

	return (
		<RootContext.Provider value={accordion}>{element ? element(attributes) : <div {...attributes}>{children}</div>}</RootContext.Provider>
	);
}
