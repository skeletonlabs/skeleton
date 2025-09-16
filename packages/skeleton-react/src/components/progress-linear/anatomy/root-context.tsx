import { ProgressLinearRootContext } from '../modules/root-context';
import type { useProgressLinear } from '../modules/use-progress-linear';
import { use } from 'react';
import type { ReactNode } from 'react';

export interface ProgressLinearRootContextProps {
	children: (progressLinear: ReturnType<typeof useProgressLinear>) => ReactNode;
}

export default function RootContext(props: ProgressLinearRootContextProps) {
	const progressLinear = use(ProgressLinearRootContext);

	const { children } = props;

	return children(progressLinear);
}
