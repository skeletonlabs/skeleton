import type { useSegmentedControl } from '../modules/provider';
import { RootContext as RootContext_ } from '../modules/root-context.js';
import { use } from 'react';
import type { ReactNode } from 'react';

export interface SegmentedControlRootContextProps {
	children: (ratingGroup: ReturnType<typeof useSegmentedControl>) => ReactNode;
}

export default function RootContext(props: SegmentedControlRootContextProps) {
	const segmentedControl = use(RootContext_);

	const { children } = props;

	return children(segmentedControl);
}
