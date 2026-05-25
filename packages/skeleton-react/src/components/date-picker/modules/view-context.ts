import { createContext } from '../../../internal/create-context.js';
import type { ViewProps } from '@zag-js/date-picker';

export const DatePickerViewContext = createContext<ViewProps>({ view: 'day' });
