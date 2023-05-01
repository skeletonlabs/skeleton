export const tailwindNumbers = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'] as const;

export type TailwindNumbers = (typeof tailwindNumbers)[number];

export const semanticNames = ['primary', 'secondary', 'tertiary', 'success', 'warning', 'error', 'surface'] as const;

export type SemanticNames = (typeof semanticNames)[number];
