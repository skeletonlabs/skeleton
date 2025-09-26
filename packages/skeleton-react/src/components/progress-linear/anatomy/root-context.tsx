import type { useProgressLinear } from '../modules/provider';
import { RootContext as RootContext_ } from '../modules/root-context';
import { use } from 'react';
import type { ReactNode } from 'react';

export interface ProgressLinearRootContextProps {
	children: (progressLinear: ReturnType<typeof useProgressLinear>) => ReactNode;
}

export default function RootContext(props: ProgressLinearRootContextProps) {
	const progressLinear = use(RootContext_);

	const { children } = props;

	return children(progressLinear);
}
