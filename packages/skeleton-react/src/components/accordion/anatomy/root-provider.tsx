import type { HTMLAttributes } from '@/internal/html-attributes';
import type { Api } from '@zag-js/accordion';
import { mergeProps } from '@zag-js/react';
import { classesAccordion } from '@skeletonlabs/skeleton-common';
import type { PropsWithElement } from '@/internal/props-with-element';
import { AccordionRootContext } from '../modules/root-context';

export interface AccordionRootProviderProps extends PropsWithElement<'div'>, HTMLAttributes<'div'> {
	value: Api;
}

export default function (props: AccordionRootProviderProps) {
	const { element, children, value: accordion, ...rest } = props;

	const attributes = mergeProps(accordion.getRootProps(), rest, {
		className: classesAccordion.root
	});

	return (
		<AccordionRootContext.Provider value={accordion}>
			{element ? element(attributes) : <div {...attributes}>{children}</div>}
		</AccordionRootContext.Provider>
	);
}
