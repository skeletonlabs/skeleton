import type { PropsWithChildren } from 'react';
import { LocaleProviderContext } from '../modules/root-context.js';
import { isRTL } from '@zag-js/i18n-utils';

export interface LocaleProviderRootProps extends PropsWithChildren {
	/**
	 * The locale to use for the application.
	 * @default 'en-US'
	 */
	locale: string;
}

export default function Root(props: LocaleProviderRootProps) {
	const { children, locale } = props;

	return <LocaleProviderContext.Provider value={{ locale, dir: isRTL(locale) ? 'rtl' : 'ltr' }}>{children}</LocaleProviderContext.Provider>;
}
