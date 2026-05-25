import { LocaleProviderRootContext } from '../modules/root-context.js';
import { type ContextType, type ReactNode, use } from 'react';

export interface LocaleProviderRootContextProps {
	children: (locale: ContextType<typeof LocaleProviderRootContext>) => ReactNode;
}

export default function RootContext(props: LocaleProviderRootContextProps) {
	const locale = use(LocaleProviderRootContext);

	const { children } = props;

	return children(locale);
}
