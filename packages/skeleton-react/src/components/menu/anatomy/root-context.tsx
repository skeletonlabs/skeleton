import type { useMenu } from '../modules/provider.js';
import { MenuRootContext as RootContext_ } from '../modules/root-context.js';
import { type ReactNode, use } from 'react';

export interface MenuRootContextProps {
	children: (menu: ReturnType<typeof useMenu>) => ReactNode;
}

export default function MenuRootContext(props: MenuRootContextProps) {
	const menu = use(RootContext_);

	const { children } = props;

	return children(menu);
}
