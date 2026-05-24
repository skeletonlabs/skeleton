import type { useMarquee } from '../modules/provider.js';
import { MarqueeRootContext as RootContext_ } from '../modules/root-context.js';
import { type ReactNode, use } from 'react';

export interface MarqueeRootContextProps {
	children: (marquee: ReturnType<typeof useMarquee>) => ReactNode;
}

export default function MarqueeRootContext(props: MarqueeRootContextProps) {
	const marquee = use(RootContext_);

	const { children } = props;

	return children(marquee);
}
