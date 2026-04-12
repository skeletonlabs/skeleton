import * as v from 'valibot';

export const User = v.pipe(
	v.object({
		email: v.pipe(v.string(), v.email()),
		user_metadata: v.object({
			name: v.string(),
			preferred_username: v.string(),
		}),
	}),
	v.transform((data) => ({
		email: data.email,
		name: data.user_metadata.name,
		username: data.user_metadata.preferred_username,
	})),
);
