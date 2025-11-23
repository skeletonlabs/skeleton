import { useSteps } from '../modules/provider.js';
import { RootContext } from '../modules/root-context.js';
import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { classesSteps } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import type { Props } from '@zag-js/steps';
import { splitProps } from '@zag-js/steps';

export interface StepsRootProps extends Omit<Props, 'id'>, PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir'> {}

export default function SliderRoot(props: StepsRootProps) {
	const [stepsProps, componentProps] = splitProps(props);
	const { element, children, ...rest } = componentProps;

	const steps = useSteps(stepsProps);

	const attributes = mergeProps(
		steps.getRootProps(),
		{
			className: classesSteps.root,
		},
		rest,
	);

	return <RootContext.Provider value={steps}>{element ? element(attributes) : <div {...attributes}>{children}</div>}</RootContext.Provider>;
}
