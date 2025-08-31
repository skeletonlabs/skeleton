import { useContext, type ReactNode } from 'react';
import { AvatarRootContext, type AvatarRootContextType } from '../modules/avatar-root-context.js';

export interface AvatarRootContextProps {
	children: (context: AvatarRootContextType) => ReactNode;
}

export default function (props: AvatarRootContextProps) {
	const rootContext = useContext(AvatarRootContext);
	return props.children(rootContext);
}
