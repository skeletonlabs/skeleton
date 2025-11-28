import type { useSteps } from '../modules/provider.js';
import { RootContext as RootContext_ } from '../modules/root-context.js';
import type { ReactNode } from 'react';
import { use } from 'react';

export interface StepsRootContextProps {
	children: (steps: ReturnType<typeof useSteps>) => ReactNode;
}

export default function RootContext(props: StepsRootContextProps) {
	const steps = use(RootContext_);

	const { children } = props;

	return children(steps);
}
