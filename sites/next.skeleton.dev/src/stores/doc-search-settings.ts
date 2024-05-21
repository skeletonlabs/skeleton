import { persistentMap } from '@nanostores/persistent';
import type { Framework } from './preferred-framework';

type SearchFilters = {
	framework: 'all' | Framework;
};

export const docSearchSettingsStore = persistentMap<SearchFilters>(
	'doc-search-settings',
	{
		framework: 'all',
	},
	{},
);
