import { AvatarRootContext } from '../modules/root-context';
import type { useAvatar } from '../modules/use-avatar';
import { use } from 'react';
import type { ReactNode } from 'react';

export interface AvatarRootContextProps {
	children: (avatar: ReturnType<typeof useAvatar>) => ReactNode;
}

export default function AvatarRootContextComponent(props: AvatarRootContextProps) {
	const avatar = use(AvatarRootContext);

	const { children } = props;

	return children(avatar);
}
