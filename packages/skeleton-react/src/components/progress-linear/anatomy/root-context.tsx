import { type ReactNode, use } from 'react';

import { ProgressLinearRootContext } from '../modules/root-context';
import type { useProgressLinear } from '../modules/use-progress-linear';

export interface ProgressLinearRootContextProps {
	children: (progressLinear: ReturnType<typeof useProgressLinear>) => ReactNode;
}

export default function ProgressLinearRootContextComponent(props: ProgressLinearRootContextProps) {
	const progressLinear = use(ProgressLinearRootContext);

	const { children } = props;

	return children(progressLinear);
}
