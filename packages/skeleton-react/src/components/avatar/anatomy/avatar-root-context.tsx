import { useContext, type ReactNode } from 'react';
import { AvatarRootContext } from '../modules/avatar-root-context.js';
import type { Api } from '@zag-js/avatar';

export interface AvatarRootContextProps {
	children: (api: Api) => ReactNode;
}

export default function (props: AvatarRootContextProps) {
	const rootContext = useContext(AvatarRootContext);
	return props.children(rootContext.api);
}
