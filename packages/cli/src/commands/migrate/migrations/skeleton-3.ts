interface Migration {
	find: RegExp;
	replace: string;
}

const migrations: Migration[] = [
	// Color Pairings
	{
		find: /(.*?)-(\w+)-50-900-token\b/g,
		replace: '$1-$2-50-950'
	},
	{
		find: /(.*?)-(\w+)-100-800-token\b/g,
		replace: '$1-$2-100-900'
	},
	{
		find: /(.*?)-(\w+)-200-700-token\b/g,
		replace: '$1-$2-200-800'
	},
	{
		find: /(.*?)-(\w+)-300-600-token\b/g,
		replace: '$1-$2-300-700'
	},
	{
		find: /(.*?)-(\w+)-400-500-token\b/g,
		replace: '$1-$2-500'
	},

	// Backgrounds
	{
		find: /bg-(\w+)-backdrop-token\b/g,
		replace: 'bg-surface-50/50 dark:bg-surface-950/50'
	},
	{
		find: /bg-(\w+)-hover-token\b/g,
		replace: 'preset-tonal'
	},
	{
		find: /bg-(\w+)-active-token\b/g,
		replace: 'preset-tonal-primary'
	},

	// Border Radius
	{
		find: /rounded-token\b/g,
		replace: 'rounded'
	},
	{
		find: /rounded-(tl|tr|bl|br)-token\b/g,
		replace: 'rounded-$1'
	},
	{
		find: /rounded-container-token\b/g,
		replace: 'rounded-container'
	},
	{
		find: /rounded-(tl|tr|bl|br)-container-token\b/g,
		replace: 'rounded-$1-container'
	},

	// Borders
	{
		find: /border-token\b/g,
		replace: 'border'
	},
	{
		find: /border-(\w+)-(\d+)-(\d+)-token\b/g,
		replace: 'border-$1-$2-$3'
	},

	// Rings
	{
		find: /ring-token\b/g,
		replace: 'ring'
	},
	{
		find: /ring-(\w+)-(\d+)-(\d+)-token\b/g,
		replace: 'ring-$1-$2-$3'
	},

	// Text
	{
		find: /font-headings-token\b/g,
		replace: 'heading-font-family'
	},
	{
		find: /font-token\b/g,
		replace: 'base-font-family'
	},
	{
		find: /text-token\b/g,
		replace: 'base-font-color'
	},
	{
		find: /text-on-(\w+)-token\b/g,
		replace: 'text-$1-contrast-500'
	},
	{
		find: /text-(\w+)-(\d+)-(\d+)-token\b/g,
		replace: 'text-$1-$2-$3'
	},

	// Text Decoration
	{
		find: /decoration-(\w+)-(\d+)-(\d+)-token\b/g,
		replace: 'decoration-$1-$2-$3'
	}
];

function migrate(source: string) {
	return migrations.reduce((result, migration) => {
		return result.replace(migration.find, migration.replace);
	}, source);
}

export { migrate };
