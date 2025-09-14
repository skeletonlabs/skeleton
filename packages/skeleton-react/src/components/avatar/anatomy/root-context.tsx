import { use, type ReactNode } from 'react';
import { AvatarRootContext } from '../modules/root-context';
import type { useAvatar } from '../modules/use-avatar';

export interface AvatarRootContextProps {
	children: (avatar: ReturnType<typeof useAvatar>) => ReactNode;
}

export default function AvatarRootContextComponent(props: AvatarRootContextProps) {
	const avatar = use(AvatarRootContext);

	const { children } = props;

	return children(avatar);
}
