import { use } from 'react';
import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { LocaleProviderRootContext } from '../../locale-provider/modules/root-context.js';
import { NavigationRootContext } from '../modules/root-context.js';
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

	const locale = use(LocaleProviderRootContext);

	const attributes = mergeProps(
		{
			dir: locale.dir,
			'data-scope': 'navigation',
			'data-part': 'root',
			'data-layout': layout,
		},
		rest,
	);

	return (
		<NavigationRootContext.Provider value={{ layout }}>
			{element ? element(attributes) : <div {...attributes}>{children}</div>}
		</NavigationRootContext.Provider>
	);
}
