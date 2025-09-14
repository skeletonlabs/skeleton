import { use, type ReactNode } from 'react';
import { SwitchRootContext } from '../modules/root-context';
import type { useSwitch } from '../modules/use-switch';

export interface SwitchRootContextProps {
	children: (switch_: ReturnType<typeof useSwitch>) => ReactNode;
}

export default function SwitchRootContextComponent(props: SwitchRootContextProps) {
	const switch_ = use(SwitchRootContext);

	const { children } = props;

	return children(switch_);
}
