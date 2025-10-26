import type { useSwitch } from '../modules/provider.js';
import { RootContext as RootContext_ } from '../modules/root-context.js';
import { use } from 'react';
import type { ReactNode } from 'react';

export interface SwitchRootContextProps {
	children: (switch_: ReturnType<typeof useSwitch>) => ReactNode;
}

export default function RootContext(props: SwitchRootContextProps) {
	const switch_ = use(RootContext_);

	const { children } = props;

	return children(switch_);
}
