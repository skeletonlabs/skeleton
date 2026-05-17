import * as v from 'valibot';
import { supportedOAuthProviders } from '$lib/client/auth/supported-oauth-providers';

export const UnlinkAccountSchema = v.object({
	providerId: v.picklist(supportedOAuthProviders.map((provider) => provider.id)),
});
