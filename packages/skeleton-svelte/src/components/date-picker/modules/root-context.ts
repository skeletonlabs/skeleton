import { createContext } from '../../../internal/create-context.js';
import type { useDatePicker } from './provider.svelte.js';

export const DatePickerRootContext = createContext<ReturnType<typeof useDatePicker>>();
