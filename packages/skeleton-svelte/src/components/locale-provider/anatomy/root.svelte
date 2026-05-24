<script lang="ts" module>
	import type { PropsWithChildren } from '../../../internal/props-with-children.js';

	export interface LocaleProviderRootProps extends PropsWithChildren {
		/**
		 * The locale to use for the application.
		 * @default 'en-US'
		 */
		locale: string;
	}
</script>

<script lang="ts">
	import { LocaleProviderRootContext } from '../modules/root-context.js';
	import { isRTL } from '@zag-js/i18n-utils';

	const props: LocaleProviderRootProps = $props();

	const { children, locale } = $derived(props);

	LocaleProviderRootContext.provide(() => ({
		locale: locale,
		dir: isRTL(locale) ? 'rtl' : 'ltr',
	}));
</script>

{@render children?.()}
