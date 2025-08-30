import { useContext, type ReactNode } from 'react';
import type { Api } from '@zag-js/rating-group';
import { RatingGroupRootContext } from '../modules/rating-group-root-context.js';

export interface RatingGroupRootContextProps {
	children: (api: Api) => ReactNode;
}

export default function (props: RatingGroupRootContextProps) {
	const rootContext = useContext(RatingGroupRootContext);
	return props.children(rootContext.api);
}
