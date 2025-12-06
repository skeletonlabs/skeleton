import type { useCarousel } from '../modules/provider.js';
import { RootContext as RootContext_ } from '../modules/root-context.js';
import { use } from 'react';
import type { ReactNode } from 'react';

export interface CarouselRootContextProps {
	children: (carousel: ReturnType<typeof useCarousel>) => ReactNode;
}

export default function RootContext(props: CarouselRootContextProps) {
	const carousel = use(RootContext_);

	const { children } = props;

	return children(carousel);
}
