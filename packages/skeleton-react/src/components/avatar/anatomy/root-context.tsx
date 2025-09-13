import { useContext, type ReactNode } from 'react';
import { AvatarRootContext } from '../modules/root-context';
import type { useAvatar } from '../modules/use-avatar';

export interface AvatarRootContextProps {
	children: (avatar: ReturnType<typeof useAvatar>) => ReactNode;
}

export default function (props: AvatarRootContextProps) {
	const avatar = useContext(AvatarRootContext);

	const { children } = props;

	return children(avatar);
}
