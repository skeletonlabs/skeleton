export const frameworks = [
	{
		name: 'svelte',
		config: {
			extendsBlacklist: [/^HTML.*Attributes(?:<.*>)?$/, /^Omit<\s*HTML.*Attributes.*>$/] as RegExp[]
		}
	},
	{
		name: 'react',
		config: {
			extendsBlacklist: [/^ComponentProps(?:<.*>)?$/, /^Omit<\s*ComponentProps.*>$/] as RegExp[]
		}
	}
] as const;

export type Framework = (typeof frameworks)[number];
