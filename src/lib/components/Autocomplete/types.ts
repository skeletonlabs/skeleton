// Autocomplete Types

export interface AutocompleteOption {
	/** provide a unique display label per option. Supports HTML. */
	label: string;
	/** Provide a unique option value. */
	value: unknown;
	/** Provide a comma separated list of keywords. */
	keywords?: any;
	/** Pass arbitrary data per option. */
	meta?: any;
}
