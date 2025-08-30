import { useContext } from 'react';
import { AvatarRootContext } from '../modules/context.js';
import type { AvatarRootContextProps } from '../modules/types.js';

export default function (props: AvatarRootContextProps) {
	const rootContext = useContext(AvatarRootContext);
	return props.children(rootContext.api);
}
