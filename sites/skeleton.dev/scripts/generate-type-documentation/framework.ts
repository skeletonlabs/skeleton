export const frameworks = [
	{
		name: 'svelte',
		config: {
			classPropertyName: 'class',
			declarationExtension: '.svelte.d.ts',
			extendsBlacklist: [/^HTML.*Attributes(?:<.*>)?$/, /^Omit<\s*HTML.*Attributes.*>$/] as RegExp[]
		}
	},
	{
		name: 'react',
		config: {
			classPropertyName: 'className',
			declarationExtension: '.d.ts',
			extendsBlacklist: [/^ComponentProps(?:<.*>)?$/, /^Omit<\s*ComponentProps.*>$/] as RegExp[]
		}
	}
] as const;

export type Framework = (typeof frameworks)[number];
