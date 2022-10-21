export enum DocsFeature {
	Element = 'Tailwind Element',
	Component = 'Svelte Component',
	Action = 'Svelte Action',
	Utility = 'Utility'
}

interface DocShellLinks {
	label: string;
	url: string;
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
	/** The NPM package this feature belongs to. */
	package?: {
		/** Package Name */
		name: string;
		/** Package URL */
		url: string;
	};
	/** Specify the source path (partials) */
	source: string;
	/** Provide the GitHub documentation route path (partial) */
	docs?: string;
	/** Provide list of depedency links.  */
	dependencies?: DocShellLinks[];
	/** When enabled, renames tab "Props" to "Params" for Svelte Actions */
	parameters?: boolean;
}

export interface DocsShellTable {
	/** Provide a semantic label. */
	label?: string;
	/** Provide HTML for description region. */
	description?: string;
	/** Provide the table headings. */
	headings?: string[];
	/** Provide the table source data. */
	source?: string[][];
	/** WAI-ARIA APG page link. */
	aria?: string;
}

export interface DocsShellComponentRef {
	name: string;
	docData: object;
}

export interface ComponentDocs {
	name?: string;
	description?: string;
	props?: PropDocs[];
	accessibilityProps?: PropDocs[];
}

export interface PropDocs {
	name?: string;
	type?: string;
	defaultValue?: string;
	description?: string;
	tags?: Tags;
}

export interface Tags {
	[key: string]: string;
}