import { useContext, type ReactNode } from 'react';
import { SwitchRootContext } from '../modules/root-context';
import type { useSwitch } from '../modules/use-switch';

export interface SwitchRootContextProps {
	children: (switch_: ReturnType<typeof useSwitch>) => ReactNode;
}

export default function (props: SwitchRootContextProps) {
	const switch_ = useContext(SwitchRootContext);

	const { children } = props;

	return children(switch_);
}
