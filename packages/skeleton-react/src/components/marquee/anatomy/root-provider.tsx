import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import type { useMarquee } from '../modules/provider.js';
import { MarqueeRootContext } from '../modules/root-context.js';
import { mergeProps } from '@zag-js/react';
import type { PropsWithChildren } from 'react';

export interface MarqueeRootProviderProps extends PropsWithChildren, PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir'> {
	value: ReturnType<typeof useMarquee>;
}

export default function RootProvider(props: MarqueeRootProviderProps) {
	const { element, children, value: marquee, ...rest } = props;

	const attributes = mergeProps(marquee.getRootProps(), rest);

	return (
		<MarqueeRootContext.Provider value={marquee}>
			{element ? element(attributes) : <div {...attributes}>{children}</div>}
		</MarqueeRootContext.Provider>
	);
}
