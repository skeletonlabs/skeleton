import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { useMarquee } from '../modules/provider.js';
import { RootContext } from '../modules/root-context.js';
import { splitProps, type Props } from '@zag-js/marquee';
import { mergeProps } from '@zag-js/react';
import type { PropsWithChildren } from 'react';

export interface MarqueeRootProps
	extends PropsWithChildren, Omit<Props, 'id'>, PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir'> {}

export default function Root(props: MarqueeRootProps) {
	const [marqueeProps, componentProps] = splitProps(props);
	const { element, children, ...rest } = componentProps;

	const marquee = useMarquee(marqueeProps);

	const attributes = mergeProps(marquee.getRootProps(), rest);

	return (
		<RootContext.Provider value={marquee}>{element ? element(attributes) : <div {...attributes}>{children}</div>}</RootContext.Provider>
	);
}
