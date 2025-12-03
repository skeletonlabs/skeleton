import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { useAccordion } from '../modules/provider.js';
import { RootContext } from '../modules/root-context.js';
import { splitProps } from '@zag-js/accordion';
import type { Props } from '@zag-js/accordion';
import { mergeProps } from '@zag-js/react';

export interface AccordionRootProps
	extends Omit<Props, 'id'>, PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir' | 'defaultValue'> {}

export default function Root(props: AccordionRootProps) {
	const [accordionProps, componentProps] = splitProps(props);
	const { element, children, ...rest } = componentProps;

	const accordion = useAccordion(accordionProps);

	const attributes = mergeProps(accordion.getRootProps(), rest);

	return (
		<RootContext.Provider value={accordion}>{element ? element(attributes) : <div {...attributes}>{children}</div>}</RootContext.Provider>
	);
}
