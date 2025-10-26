import type { useProgress } from '../modules/provider';
import { RootContext as RootContext_ } from '../modules/root-context.js';
import { use } from 'react';
import type { ReactNode } from 'react';

export interface ProgressRootContextProps {
	children: (progress: ReturnType<typeof useProgress>) => ReactNode;
}

export default function RootContext(props: ProgressRootContextProps) {
	const progress = use(RootContext_);

	const { children } = props;

	return children(progress);
}
