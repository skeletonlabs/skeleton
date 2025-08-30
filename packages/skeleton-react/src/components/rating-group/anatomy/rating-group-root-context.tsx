import { useContext } from 'react';
import { RatingGroupRootContext } from '../modules/context.js';
import type { RatingGroupRootContextProps } from '../modules/types.js';

export default function (props: RatingGroupRootContextProps) {
	const rootContext = useContext(RatingGroupRootContext);
	return props.children(rootContext.api);
}
