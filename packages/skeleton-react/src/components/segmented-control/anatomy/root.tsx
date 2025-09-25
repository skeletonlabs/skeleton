import { SegmentedControlRootContext } from '../modules/root-context';
import { useSegmentedControl } from '../modules/use-segmented-control';
import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';
import { classesSegmentedControl } from '@skeletonlabs/skeleton-common';
import { splitProps } from '@zag-js/radio-group';
import type { Props } from '@zag-js/radio-group';
import { mergeProps } from '@zag-js/react';

export interface SegmentedControlRootProps
	extends Omit<Props, 'id'>,
		PropsWithElement<'div'>,
		HTMLAttributes<'div', 'id' | 'dir' | 'defaultValue'> {}

export default function Root(props: SegmentedControlRootProps) {
	const [segmentedControlProps, componentProps] = splitProps(props);
	const { element, children, ...rest } = componentProps;

	const segmentedControl = useSegmentedControl(segmentedControlProps);

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
