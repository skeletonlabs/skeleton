import type { useProgressCircular } from '../modules/provider';
import { RootContext as RootContext_ } from '../modules/root-context';
import { use } from 'react';
import type { ReactNode } from 'react';

export interface ProgressCircularRootContextProps {
	children: (progressCircular: ReturnType<typeof useProgressCircular>) => ReactNode;
}

export default function RootContext(props: ProgressCircularRootContextProps) {
	const progressCircular = use(RootContext_);

	const { children } = props;

	return children(progressCircular);
}
