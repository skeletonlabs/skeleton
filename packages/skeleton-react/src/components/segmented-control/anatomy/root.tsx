import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { useSegmentedControl } from '../modules/provider.js';
import { RootContext } from '../modules/root-context.js';
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

	const attributes = mergeProps(segmentedControl.getRootProps(), rest);

	return (
		<RootContext.Provider value={segmentedControl}>
			{element ? element(attributes) : <div {...attributes}>{children}</div>}
		</RootContext.Provider>
	);
}
