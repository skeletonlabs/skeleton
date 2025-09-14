import { mergeProps } from '@zag-js/react';
import { classesProgressLinear } from '@skeletonlabs/skeleton-common';
import { ProgressLinearRootContext } from '../modules/root-context';
import type { PropsWithElement } from '@/internal/props-with-element';
import type { HTMLAttributes } from '@/internal/html-attributes';
import type { useProgressLinear } from '../modules/use-progress-linear';

export interface ProgressLinearRootProviderProps extends PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir' | 'defaultValue'> {
	value: ReturnType<typeof useProgressLinear>;
}

export default function ProgressLinearRootProvider(props: ProgressLinearRootProviderProps) {
	const { element, children, value: progressLinear, ...rest } = props;

	const attributes = mergeProps(progressLinear.getRootProps(), rest, {
		className: classesProgressLinear.root,
	});

	return (
		<ProgressLinearRootContext.Provider value={progressLinear}>
			{element ? element(attributes) : <div {...attributes}>{children}</div>}
		</ProgressLinearRootContext.Provider>
	);
}
