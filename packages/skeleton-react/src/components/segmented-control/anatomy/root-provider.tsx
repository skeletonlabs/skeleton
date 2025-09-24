import { SegmentedControlRootContext } from '../modules/root-context';
import type { useSegmentedControl } from '../modules/use-segmented-control';
import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';
import { classesSegmentedControl } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';

export interface SegmentedControlRootProviderProps extends PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir' | 'defaultValue'> {
	value: ReturnType<typeof useSegmentedControl>;
}

export default function RootProvider(props: SegmentedControlRootProviderProps) {
	const { element, children, value: segmentedControl, ...rest } = props;

	const attributes = mergeProps(
		segmentedControl.getRootProps(),
		{
			className: classesSegmentedControl.root,
		},
		rest,
	);

	return (
		<SegmentedControlRootContext.Provider value={segmentedControl}>
			{element ? element(attributes) : <div {...attributes}>{children}</div>}
		</SegmentedControlRootContext.Provider>
	);
}
