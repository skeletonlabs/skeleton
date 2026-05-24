import { createContext } from '../../../internal/create-context.js';
import type { useDatePicker } from './provider.js';

export const DatePickerRootContext = createContext<ReturnType<typeof useDatePicker>>();
