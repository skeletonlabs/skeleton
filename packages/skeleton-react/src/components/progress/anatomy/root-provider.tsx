import type { useProgress } from '../modules/provider.js';
import { RootContext } from '../modules/root-context.js';
import type { HTMLAttributes } from '@/internal/html-attributes.js';
import type { PropsWithElement } from '@/internal/props-with-element.js';
import { classesProgress } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';

export interface ProgressRootProviderProps extends PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir' | 'defaultValue'> {
	value: ReturnType<typeof useProgress>;
}

export default function RootProvider(props: ProgressRootProviderProps) {
	const { element, children, value: progress, ...rest } = props;

	const attributes = mergeProps(
		progress.getRootProps(),
		{
			className: classesProgress.root,
		},
		rest,
	);

	return (
		<RootContext.Provider value={progress}>{element ? element(attributes) : <div {...attributes}>{children}</div>}</RootContext.Provider>
	);
}
