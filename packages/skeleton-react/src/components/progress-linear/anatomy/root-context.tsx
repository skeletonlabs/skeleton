import { useContext, type ReactNode } from 'react';
import { ProgressLinearRootContext } from '../modules/root-context';
import type { useProgressLinear } from '../modules/use-progress-linear';

export interface ProgressLinearRootContextProps {
	children: (progressLinear: ReturnType<typeof useProgressLinear>) => ReactNode;
}

export default function (props: ProgressLinearRootContextProps) {
	const progressLinear = useContext(ProgressLinearRootContext);

	const { children } = props;

	return children(progressLinear);
}
