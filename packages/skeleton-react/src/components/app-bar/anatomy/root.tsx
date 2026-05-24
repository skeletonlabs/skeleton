import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { mergeProps } from '@zag-js/react';
import { LocaleProviderRootContext } from '../../locale-provider/modules/root-context.js';
import { use } from 'react';

export interface AppBarRootProps extends PropsWithElement<'header'>, HTMLAttributes<'header'> {}

export default function AppBarRoot(props: AppBarRootProps) {
	const { element, children, ...rest } = props;

	const locale = use(LocaleProviderRootContext);

	const attributes = mergeProps(
		{
			dir: locale.dir,
			'data-scope': 'app-bar',
			'data-part': 'root',
		},
		rest,
	);

	return element ? element(attributes) : <header {...attributes}>{children}</header>;
}
