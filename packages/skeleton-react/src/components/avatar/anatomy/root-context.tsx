import { useContext, type ReactNode } from 'react';
import { AvatarRootContext } from '../modules/root-context';
import type { Api } from '@zag-js/avatar';

export interface AvatarRootContextProps {
	children: (avatar: Api) => ReactNode;
}

export default function (props: AvatarRootContextProps) {
	const avatar = useContext(AvatarRootContext);

	const { children } = props;

	return children(avatar);
}
