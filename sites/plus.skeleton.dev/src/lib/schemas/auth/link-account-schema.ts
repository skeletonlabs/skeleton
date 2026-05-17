import * as v from 'valibot';
import { supportedOAuthProviders } from '$lib/auth/supported-oauth-providers';

export const LinkAccountSchema = v.object({
	providerId: v.picklist(supportedOAuthProviders.map((provider) => provider.id)),
	callbackURL: v.optional(v.string(), '/'),
});
