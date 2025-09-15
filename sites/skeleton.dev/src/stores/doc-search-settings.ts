import type { Framework } from './preferred-framework';
import { persistentMap } from '@nanostores/persistent';

interface SearchFilters {
	framework: 'preferred' | 'all' | Framework;
}

export const docSearchSettingsStore = persistentMap<SearchFilters>('doc-search-settings', {
	framework: 'preferred',
});
