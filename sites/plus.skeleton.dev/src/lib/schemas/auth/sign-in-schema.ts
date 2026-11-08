import * as v from "valibot";
import { supportedOAuthProviders } from "#lib/auth/supported-oauth-providers.ts";

export const SignInSchema = v.object({
	providerId: v.picklist(supportedOAuthProviders.map((provider) => provider.id)),
	callbackURL: v.optional(v.string(), "/"),
});
