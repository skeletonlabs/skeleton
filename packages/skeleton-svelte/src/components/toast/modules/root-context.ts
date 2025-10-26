import { createContext } from '@/internal/create-context.js';
import type { PropTypes } from '@zag-js/svelte';
import type { Api } from '@zag-js/toast';

export const RootContext = createContext<() => Api<PropTypes>>();
