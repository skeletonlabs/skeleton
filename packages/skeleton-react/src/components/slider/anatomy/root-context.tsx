import type { useSlider } from '../modules/provider';
import { RootContext as RootContext_ } from '../modules/root-context';
import { use } from 'react';
import type { ReactNode } from 'react';

export interface SliderRootContextProps {
	children: (slider: ReturnType<typeof useSlider>) => ReactNode;
}

export default function RootContext(props: SliderRootContextProps) {
	const slider = use(RootContext_);

	const { children } = props;

	return children(slider);
}
