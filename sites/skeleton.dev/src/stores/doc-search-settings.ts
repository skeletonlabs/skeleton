import type { Framework } from './preferred-framework';
import { persistentMap } from '@nanostores/persistent';

export const docSearchSettingsStore = persistentMap<{ framework: 'preferred' | 'all' | Framework }>('doc-search-settings', {
	framework: 'preferred',
});
