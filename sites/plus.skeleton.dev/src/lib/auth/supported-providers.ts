import type { Provider } from '@supabase/supabase-js';

export const SUPPORTED_PROVIDERS = ['github'] as const satisfies ReadonlyArray<Provider>;
