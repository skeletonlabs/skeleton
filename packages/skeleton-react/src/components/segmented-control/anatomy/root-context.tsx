import { RootContext } from '../modules/root-context';
import type { useSegmentedControl } from '../modules/provider';
import { use } from 'react';
import type { ReactNode } from 'react';

export interface SegmentedControlRootContextProps {
	children: (ratingGroup: ReturnType<typeof useSegmentedControl>) => ReactNode;
}

export default function RootContext(props: SegmentedControlRootContextProps) {
	const segmentedControl = use(RootContext);

	const { children } = props;

	return children(segmentedControl);
}
