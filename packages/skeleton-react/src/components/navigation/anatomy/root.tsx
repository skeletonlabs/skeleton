import { RootContext } from '../modules/root-context';
import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';
import { classesNavigation } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';

export interface NavigationRootProps extends PropsWithElement<'div'>, HTMLAttributes<'div'> {
	/**
	 * Sets the data-layout attribute, which modifies the visual presentation of the component set.
	 *
	 * @default bar
	 * */
	layout?: 'bar' | 'rail' | 'sidebar';
	/**
	 * Sets the data-compacted attribute, which toggles the Sidebar compacted mode.
	 *
	 * @default false
	 * */
	compact?: boolean;
}

export default function NavigationRoot(props: NavigationRootProps) {
	const { layout = 'bar', compact = false, element, children, ...rest } = props;

	const attributes = mergeProps(
		{
			'data-layout': layout,
			'data-compact': compact,
			className: classesNavigation.root,
		},
		rest,
	);

	return (
		<RootContext.Provider value={{ layout, compact }}>
			{element ? element(attributes) : <div {...attributes}>{children}</div>}
		</RootContext.Provider>
	);
}
