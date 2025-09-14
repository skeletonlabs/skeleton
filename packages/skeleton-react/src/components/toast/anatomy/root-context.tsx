import { use, type ReactNode } from 'react';
import { ToastRootContext } from '../modules/root-context';
import type { Api } from '@zag-js/toast';

export interface ToastRootContextProps {
	children: (toast: Api) => ReactNode;
}

export default function ToastRootContextComponent(props: ToastRootContextProps) {
	const toast = use(ToastRootContext);

	const { children } = props;

	return children(toast);
}
