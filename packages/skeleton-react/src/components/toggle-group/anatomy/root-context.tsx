import type { useToggleGroup } from '../modules/provider';
import { RootContext as RootContext_ } from '../modules/root-context';
import { use } from 'react';
import type { ReactNode } from 'react';

export interface ToggleGroupRootContextProps {
	children: (togglegroup: ReturnType<typeof useToggleGroup>) => ReactNode;
}

export default function RootContext(props: ToggleGroupRootContextProps) {
	const toggleGroup = use(RootContext_);

	const { children } = props;

	return children(toggleGroup);
}
