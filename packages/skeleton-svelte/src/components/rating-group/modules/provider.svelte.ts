import { LocaleProviderRootContext } from '../../locale-provider/modules/root-context.js';
import { connect, machine } from '@zag-js/rating-group';
import type { Api, Props } from '@zag-js/rating-group';
import { normalizeProps, useMachine, type PropTypes } from '@zag-js/svelte';

export function useRatingGroup(props: Props | (() => Props)): () => Api<PropTypes> {
	const locale = LocaleProviderRootContext.consume();
	const service = useMachine(machine, () => ({
		dir: locale().dir,
		...(typeof props === 'function' ? props() : props),
	}));
	const ratingGroup = $derived(connect(service, normalizeProps));
	return () => ratingGroup;
}
