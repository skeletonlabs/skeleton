import * as v from 'valibot';

const PackageSchema = v.object({
	name: v.optional(v.string()),
	version: v.optional(v.number()),
	description: v.optional(v.string())
});

export { PackageSchema };
