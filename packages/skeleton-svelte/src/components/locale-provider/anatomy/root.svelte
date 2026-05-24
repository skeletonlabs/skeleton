<script lang="ts" module>
	import type { LocaleProviderRootProps } from './root.ts';
</script>

<script lang="ts">
	import { LocaleProviderContext } from '../modules/root-context.js';
	import { isRTL } from '@zag-js/i18n-utils';

	const props: LocaleProviderRootProps = $props();

	const { children, locale } = $derived(props);

	LocaleProviderContext.provide(() => ({
		locale: locale,
		dir: isRTL(locale) ? 'rtl' : 'ltr',
	}));
</script>

{@render children?.()}
