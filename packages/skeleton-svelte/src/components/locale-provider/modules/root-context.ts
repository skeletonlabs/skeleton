import { isRTL, type Locale } from '@zag-js/i18n-utils';
import { createContext } from '../../../internal/create-context.js';

export const LocaleProviderRootContext = createContext<() => Locale>(() => ({
	locale: 'en-US',
	dir: isRTL('en-US') ? 'rtl' : 'ltr',
}));
