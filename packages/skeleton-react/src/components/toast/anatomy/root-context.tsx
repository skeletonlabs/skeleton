import { ToastRootContext } from '../modules/root-context';
import type { Api } from '@zag-js/toast';
import { use } from 'react';
import type { ReactNode } from 'react';

export interface ToastRootContextProps {
	children: (toast: Api) => ReactNode;
}

export default function RootContext(props: ToastRootContextProps) {
	const toast = use(ToastRootContext);

	const { children } = props;

	return children(toast);
}
