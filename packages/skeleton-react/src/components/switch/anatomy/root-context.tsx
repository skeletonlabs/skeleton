import { SwitchRootContext } from '../modules/root-context';
import type { useSwitch } from '../modules/use-switch';
import { use } from 'react';
import type { ReactNode } from 'react';

export interface SwitchRootContextProps {
	children: (switch_: ReturnType<typeof useSwitch>) => ReactNode;
}

export default function RootContext(props: SwitchRootContextProps) {
	const switch_ = use(SwitchRootContext);

	const { children } = props;

	return children(switch_);
}
