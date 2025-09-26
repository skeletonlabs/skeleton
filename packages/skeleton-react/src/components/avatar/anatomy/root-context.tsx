import type { useAvatar } from '../modules/provider';
import { RootContext as RootContext_ } from '../modules/root-context';
import { use } from 'react';
import type { ReactNode } from 'react';

export interface RootContextProps {
	children: (avatar: ReturnType<typeof useAvatar>) => ReactNode;
}

export default function RootContext(props: RootContextProps) {
	const avatar = use(RootContext_);

	const { children } = props;

	return children(avatar);
}
