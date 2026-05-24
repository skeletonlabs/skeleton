import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import type { useProgress } from '../modules/provider.js';
import { ProgressRootContext } from '../modules/root-context.js';
import { mergeProps } from '@zag-js/react';

export interface ProgressRootProviderProps extends PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir' | 'defaultValue'> {
	value: ReturnType<typeof useProgress>;
}

export default function RootProvider(props: ProgressRootProviderProps) {
	const { element, children, value: progress, ...rest } = props;

	const attributes = mergeProps(progress.getRootProps(), rest);

	return (
		<ProgressRootContext.Provider value={progress}>
			{element ? element(attributes) : <div {...attributes}>{children}</div>}
		</ProgressRootContext.Provider>
	);
}
