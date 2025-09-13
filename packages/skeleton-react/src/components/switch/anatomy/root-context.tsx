import { useContext, type ReactNode } from 'react';
import { SwitchRootContext } from '../modules/root-context';
import type { Api } from '@zag-js/switch';

export interface SwitchRootContextProps {
	children: (switch_: Api) => ReactNode;
}

export default function (props: SwitchRootContextProps) {
	const switch_ = useContext(SwitchRootContext);

	const { children } = props;

	return children(switch_);
}
