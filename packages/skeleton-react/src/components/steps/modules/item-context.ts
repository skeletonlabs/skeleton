import { createContext } from '../../../internal/create-context.js';
import type { ItemProps } from '@zag-js/steps';

export const StepsItemContext = createContext<ItemProps>();
