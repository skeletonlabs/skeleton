import { RootContext as RootContext_ } from '../modules/root-context.js';
import type { PropTypes } from '@zag-js/react';
import type { Api } from '@zag-js/toast';
import { use } from 'react';
import type { ReactNode } from 'react';

export interface ToastRootContextProps {
	children: (toast: Api<PropTypes>) => ReactNode;
}

export default function RootContext(props: ToastRootContextProps) {
	const toast = use(RootContext_);

	const { children } = props;

	return children(toast);
}
