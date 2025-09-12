import { useContext, type ReactNode } from 'react';
import { ProgressLinearRootContext } from '../modules/root-context';
import type { Api } from '@zag-js/progress';

export interface ProgressLinearRootContextProps {
	children: (progressLinear: Api) => ReactNode;
}

export default function (props: ProgressLinearRootContextProps) {
	const progressLinear = useContext(ProgressLinearRootContext);

	const { children } = props;

	return children(progressLinear);
}
