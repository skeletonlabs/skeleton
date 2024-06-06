import { persistentMap } from '@nanostores/persistent';
import type { Framework } from './preferred-framework';

type SearchFilters = {
	framework: 'preferred' | 'all' | Framework;
};

export const docSearchSettingsStore = persistentMap<SearchFilters>('doc-search-settings', {
	framework: 'preferred',
});
