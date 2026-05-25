import type { useSegmentedControl } from '../modules/provider.js';
import { SegmentedControlRootContext as RootContext_ } from '../modules/root-context.js';
import { use } from 'react';
import type { ReactNode } from 'react';

export interface SegmentedControlRootContextProps {
	children: (ratingGroup: ReturnType<typeof useSegmentedControl>) => ReactNode;
}

export default function SegmentedControlRootContext(props: SegmentedControlRootContextProps) {
	const segmentedControl = use(RootContext_);

	const { children } = props;

	return children(segmentedControl);
}
