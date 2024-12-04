import { createContext } from 'react';
import { SegmentContextState } from './types';
import * as radio from '@zag-js/radio-group';

export const SegmentContext = createContext<SegmentContextState>({
	api: {} as ReturnType<typeof radio.connect>,
	indicatorText: ''
});
