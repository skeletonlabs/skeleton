<script lang="ts" module>
	import type { PropsWithChildren } from '../../../internal/props-with-children.js';
	import { RootContext } from '../modules/root-context.js';

	export interface LocaleProviderRootProps extends PropsWithChildren {
		/**
		 * The locale to use for the application.
		 * @default 'en-US'
		 */
		locale: string;
	}
</script>

<script lang="ts">
	import { isRTL } from '@zag-js/i18n-utils';

	const props: LocaleProviderRootProps = $props();

	const { children, locale } = $derived(props);

	RootContext.provide(() => ({
		locale: locale,
		dir: isRTL(locale) ? 'rtl' : 'ltr',
	}));
</script>

{@render children?.()}
