import type { PropsWithChildren } from '../../../internal/props-with-children.js';

export interface LocaleProviderRootProps extends PropsWithChildren {
	/**
	 * The locale to use for the application.
	 * @default 'en-US'
	 */
	locale: string;
}
