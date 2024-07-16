import { createContext } from '$lib/internal/create-context.js';
import type { SegmentContext } from './types.js';

export const [setSegmentContext, getSegmentContext, key] = createContext<SegmentContext>({
	value: '',
	name: '',
	onSelectionHandler: () => {}
});
