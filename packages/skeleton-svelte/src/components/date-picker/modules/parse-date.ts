import { parse } from '@zag-js/date-picker';

export function parseDate(...args: Parameters<typeof parse>) {
	return parse(...args);
}
