import { useContext, type ReactNode } from 'react';
import { ToastRootContext } from '../modules/root-context';
import type { Api } from '@zag-js/toast';

export interface ToastRootContextProps {
	children: (toast: Api) => ReactNode;
}

export default function (props: ToastRootContextProps) {
	const toast = useContext(ToastRootContext);

	const { children } = props;

	return children(toast);
}
