const COLOR_PAIRING_REGEXES = [
	{
		find: /(\w+)-50-900-token\b/g,
		replace: '$1-50-950',
	},
	{
		find: /(\w+)-100-800-token\b/g,
		replace: '$1-100-900',
	},
	{
		find: /(\w+)-200-700-token\b/g,
		replace: '$1-200-800',
	},
	{
		find: /(\w+)-300-600-token\b/g,
		replace: '$1-300-700',
	},
	{
		find: /(\w+)-400-500-token\b/g,
		replace: '$1-500',
	},
	{
		find: /(\w+)-900-50-token\b/g,
		replace: '$1-950-50',
	},
	{
		find: /(\w+)-800-100-token\b/g,
		replace: '$1-900-100',
	},
	{
		find: /(\w+)-700-200-token\b/g,
		replace: '$1-800-200',
	},
	{
		find: /(\w+)-600-300-token\b/g,
		replace: '$1-700-300',
	},
	{
		find: /(\w+)-500-400-token\b/g,
		replace: '$1-600-400',
	},
];

const BACKGROUND_REGEXES = [
	{
		find: /bg-(\w+)-backdrop-token\b/g,
		replace: 'bg-$1-50/50 dark:bg-$1-950/50',
	},
	{
		find: /bg-(\w+)-hover-token\b/g,
		replace: 'preset-tonal-$1',
	},
	{
		find: /bg-(\w+)-active-token\b/g,
		replace: 'preset-filled-$1-500',
	},
];

const BORDER_RADIUS_REGEXES = [
	{
		find: /rounded-token\b/g,
		replace: 'rounded-base',
	},
	{
		find: /rounded-(tl|tr|bl|br)-token\b/g,
		replace: 'rounded-$1-base',
	},
	{
		find: /rounded-container-token\b/g,
		replace: 'rounded-container',
	},
	{
		find: /rounded-(tl|tr|bl|br)-container-token\b/g,
		replace: 'rounded-$1-container',
	},
];

const BORDER_RING_REGEXES = [
	{
		find: /border-token\b/g,
		replace: 'border',
	},
	{
		find: /border-(\w+)-(\d+)-(\d+)-token\b/g,
		replace: 'border-$1-$2-$3',
	},
	{
		find: /ring-token\b/g,
		replace: 'ring',
	},
	{
		find: /ring-(\w+)-(\d+)-(\d+)-token\b/g,
		replace: 'ring-$1-$2-$3',
	},
];

const TEXT_REGEXES = [
	{
		find: /font-headings-token\b/g,
		replace: 'heading-font-family',
	},
	{
		find: /font-token\b/g,
		replace: 'base-font-family',
	},
	{
		find: /text-token\b/g,
		replace: 'base-font-color',
	},
	{
		find: /text-on-(\w+)-token\b/g,
		replace: 'text-$1-contrast-500',
	},
	{
		find: /text-(\w+)-([^-]+)-([^-]+)-token\b/g,
		replace: 'text-$1-$2-$3',
	},
];

const DECORATION_ACCENT_REGEXES = [
	{
		find: /decoration-(\w+)-([^-]+)-([^-]+)-token\b/g,
		replace: 'decoration-$1-$2-$3',
	},
	{
		find: /accent-(\w+)-token\b/g,
		replace: 'accent-$1-500',
	},
];

const PRESET_REGEXES = [
	{
		find: /variant-filled-(\w+)\b/g,
		replace: 'preset-filled-$1-500',
	},
	{
		find: /variant-filled\b/g,
		replace: 'preset-filled',
	},
	{
		find: /variant-ghost-(\w+)\b/g,
		replace: 'preset-tonal-$1 border border-$1-500',
	},
	{
		find: /variant-ghost\b/g,
		replace: 'preset-tonal border border-surface-500',
	},
	{
		find: /variant-soft-(\w+)\b/g,
		replace: 'preset-tonal-$1',
	},
	{
		find: /variant-soft\b/g,
		replace: 'preset-tonal',
	},
	{
		find: /variant-ringed-(\w+)\b/g,
		replace: 'preset-outlined-$1-500',
	},
	{
		find: /variant-ringed\b/g,
		replace: 'preset-outlined',
	},
	{
		find: /variant-glass-(\w+)\b/g,
		replace: 'preset-tonal-$1',
	},
	{
		find: /variant-glass\b/g,
		replace: 'preset-tonal',
	},
	{
		find: /variant-gradient-(\w+)-(\w+)\b/g,
		replace: 'from-$1-500 to-$2-500',
	},
];

const TAILWIND_COMPONENT_REGEXES = [
	/**
	 * Disabled until further discussion
	 * @see https://github.com/skeletonlabs/skeleton/pull/2972#discussion_r1857260763
	 */
	// {
	// 	find: /\bcard\b(?!.*bg-)/g,
	// 	replace: 'card bg-surface-100-900-token'
	// },
	{
		find: /btn-xl\b/g,
		replace: 'btn-lg',
	},
	{
		find: /btn-icon-xl\b/g,
		replace: 'btn-icon-lg',
	},
	{
		find: /btn-group\b/g,
		replace: '',
	},
	{
		find: /table-hover\b/g,
		replace: '',
	},
];

const CLASS_REGEXES = [
	...COLOR_PAIRING_REGEXES,
	...BACKGROUND_REGEXES,
	...BORDER_RADIUS_REGEXES,
	...BORDER_RING_REGEXES,
	...TEXT_REGEXES,
	...DECORATION_ACCENT_REGEXES,
	...PRESET_REGEXES,
	...TAILWIND_COMPONENT_REGEXES,
];

function transformClasses(code: string) {
	return {
		code: CLASS_REGEXES.reduce((result, migration) => {
			return result.replace(migration.find, migration.replace);
		}, code),
	};
}

export { transformClasses };
