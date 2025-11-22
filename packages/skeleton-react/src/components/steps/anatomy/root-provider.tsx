import type { useSteps } from '../modules/provider.js';
import { RootContext } from '../modules/root-context.js';
import type { HTMLAttributes } from '@/internal/html-attributes.js';
import type { PropsWithElement } from '@/internal/props-with-element.js';
import { classesSteps } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';

export interface StepsRootProviderProps extends PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir'> {
	value: ReturnType<typeof useSteps>;
}

export default function RootProvider(props: StepsRootProviderProps) {
	const { element, children, value: steps, ...rest } = props;

	const attributes = mergeProps(
		steps.getRootProps(),
		{
			className: classesSteps.root,
		},
		rest,
	);

	return <RootContext.Provider value={steps}>{element ? element(attributes) : <div {...attributes}>{children}</div>}</RootContext.Provider>;
}
