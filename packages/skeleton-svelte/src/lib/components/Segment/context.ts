import * as radio from '@zag-js/radio-group';
import { createContext } from '$lib/internal/create-context.js';
import type { SegmentContext } from './types.js';

export const [setSegmentContext, getSegmentContext, key] = createContext<SegmentContext>({
	api: {} as ReturnType<typeof radio.connect>,
	indicatorText: ''
});
