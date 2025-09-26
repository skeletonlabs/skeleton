import type { useAvatar } from '../modules/provider';
import { RootContext as RootContext_ } from '../modules/root-context';
import { use } from 'react';
import type { ReactNode } from 'react';

export interface AvatarRootContextProps {
	children: (avatar: ReturnType<typeof useAvatar>) => ReactNode;
}

export default function RootContext(props: AvatarRootContextProps) {
	const avatar = use(RootContext_);

	const { children } = props;

	return children(avatar);
}
