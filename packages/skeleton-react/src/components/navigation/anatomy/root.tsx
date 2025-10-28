import { RootContext } from '../modules/root-context.js';
import type { HTMLAttributes } from '@/internal/html-attributes.js';
import type { PropsWithElement } from '@/internal/props-with-element.js';
import { classesNavigation } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';

export interface NavigationRootProps extends PropsWithElement<'div'>, HTMLAttributes<'div'> {
	/**
	 * Sets the data-layout attribute, which modifies the visual presentation of the component set.
	 *
	 * @default bar
	 * */
	layout?: 'bar' | 'rail' | 'sidebar';
}

export default function NavigationRoot(props: NavigationRootProps) {
	const { layout = 'bar', element, children, ...rest } = props;

	const attributes = mergeProps(
		{
			'data-layout': layout,
			className: classesNavigation.root,
		},
		rest,
	);

	return (
		<RootContext.Provider value={{ layout }}>{element ? element(attributes) : <div {...attributes}>{children}</div>}</RootContext.Provider>
	);
}
