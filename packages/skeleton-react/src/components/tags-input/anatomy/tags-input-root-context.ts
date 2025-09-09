import { createContext } from 'react';
import type { Api } from '@zag-js/tags-input';

export interface TagsInputRootContextType {
	api: Api;
}

export const TagsInputRootContext = createContext<TagsInputRootContextType>(null!);
