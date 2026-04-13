import * as v from 'valibot';
import { SUPPORTED_PROVIDERS } from './supported-providers';

export const User = v.pipe(
	v.object({
		email: v.pipe(v.string(), v.email()),
		app_metadata: v.object({
			provider: v.picklist(SUPPORTED_PROVIDERS),
		}),
		user_metadata: v.object({
			name: v.string(),
			preferred_username: v.string(),
		}),
	}),
	v.transform((data) => {
		switch (data.app_metadata.provider) {
			case 'github':
				return {
					email: data.email,
					name: data.user_metadata.name,
					username: data.user_metadata.preferred_username,
				};
		}
	}),
);
