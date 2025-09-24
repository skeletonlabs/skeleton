import { SliderRootContext } from '../modules/root-context';
import type { useSlider } from '../modules/use-slider';
import { use } from 'react';
import type { ReactNode } from 'react';

export interface SliderRootContextProps {
	children: (slider: ReturnType<typeof useSlider>) => ReactNode;
}

export default function SliderRootContextComponent(props: SliderRootContextProps) {
	const slider = use(SliderRootContext);

	const { children } = props;

	return children(slider);
}
