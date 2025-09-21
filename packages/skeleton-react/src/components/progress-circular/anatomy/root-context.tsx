import { ProgressCircularRootContext } from '../modules/root-context';
import type { useProgressCircular } from '../modules/use-progress-circular';
import { use } from 'react';
import type { ReactNode } from 'react';

export interface ProgressCircularRootContextProps {
	children: (progressCircular: ReturnType<typeof useProgressCircular>) => ReactNode;
}

export default function RootContext(props: ProgressCircularRootContextProps) {
	const progressCircular = use(ProgressCircularRootContext);

	const { children } = props;

	return children(progressCircular);
}
