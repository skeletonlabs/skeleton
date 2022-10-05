export enum DocsFeature {
	Element = 'Tailwind Element',
	Component = 'Svelte Component',
	Action = 'Svelte Action',
	Utility = 'Utility'
}

export interface DocsShellSettings {
	/** Enum: Documentation | Element | Component | Action | Utility */
	feature: DocsFeature;
	/** The feature name. */
	name: string;
	/** The feature description */
	description: string;
	/** List of import alias names. */
	imports?: string[];
	/** List of import Typescript interface imports. */
	types?: string[];
	/** List of stylesheets that include the required styles. */
	stylesheetIncludes?: string[];
	/** List of CSS import paths (partials) */
	stylesheets?: string[];
	/** Specify the source path (partials) */
	source: string;
	/** Provide the GitHub documentation route path (partial) */
	docs?: string;
	/** The NPM package this feature belongs to. */
	package?: {
		/** Package Name */
		name: string;
		/** Package URL */
		url: string;
	};
	/** Provide a list of depedencies as { name: string, url: string } */
	dependencies?: any[];
}

export interface DocsShellTable {
	/** Provide a semantic label. */
	label?: string;
	/** Provide HTML for description region. */
	description?: string;
	/** Provide the table headings. */
	headings?: string[];
	/** Provide the table source data. */
	source?: any[];
	/** Provide reference links { label: string, url: string } */
	links?: any[];
}
