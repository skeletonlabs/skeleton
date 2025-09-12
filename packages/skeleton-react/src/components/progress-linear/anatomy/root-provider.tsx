import { mergeProps } from '@zag-js/react';
import { classesProgressLinear } from '@skeletonlabs/skeleton-common';
import { ProgressLinearRootContext } from '../modules/root-context';
import type { Api } from '@zag-js/progress';
import type { PropsWithElement } from '@/internal/props-with-element';
import type { HTMLAttributes } from '@/internal/html-attributes';

export interface ProgressLinearProviderProps extends PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir' | 'defaultValue'> {
	value: Api;
}

export default function (props: ProgressLinearProviderProps) {
	const { element, children, value: progressLinear, ...rest } = props;

	const attributes = mergeProps(progressLinear.getRootProps(), rest, {
		className: classesProgressLinear.root
	});

	return (
		<ProgressLinearRootContext.Provider value={progressLinear}>
			{element ? element(attributes) : <div {...attributes}>{children}</div>}
		</ProgressLinearRootContext.Provider>
	);
}
