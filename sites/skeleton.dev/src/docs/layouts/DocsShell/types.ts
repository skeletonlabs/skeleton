export enum DocsFeature {
	Element = 'Tailwind',
	Component = 'Svelte Component',
	Action = 'Svelte Action',
	Utility = 'Utility'
}

interface Link {
	label: string;
	url: string;
}

export interface Component {
	/** Provide a semantic component label. */
	label?: string;
	/** Provide HTML markup for a props description. */
	descProps?: string;
	/** Provide HTML markup for a slots description. */
	descSlots?: string;
	/** Provide HTML markup for a events description. */
	descEvents?: string;
	/** Provide a list of props that children can override. */
	overrideProps?: string[];
	/** Provide the raw component Sveld doc source. */
	sveld: any; // SveldJson; // FIXME: we need to resolve this type
}

export interface SveldJson {
	name?: string;
	type?: string;
	description?: string;
	value?: string;
	detail?: string;
	element?: string;
	tags?: {
		tag: string;
		value?: string;
	}[];
	[key: string]: unknown;
}

export interface DocsShellSettings {
	/** Documentation | Element | Component | Action | Utility */
	feature: DocsFeature;
	/** The feature name. */
	name: string;
	/** The feature description */
	description: string;
	/** Specify the GitHub source path for the feature (partial) */
	source?: string;
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
	/** Specify the GitHub documentation source for the feature (partial) */
	docsPath?: string;
	/** Provide list of dependency links.  */
	dependencies?: Link[];
	/** WAI-ARIA APG reference page URL. */
	aria?: string;
	/** Component documentation, which utilizes Sveld. */
	components?: Component[];
	/** Component element that uses restProps */
	restProps?: string;
	/** Action parameter table source [prop, type, default, values, description] */
	parameters?: [string, string, string, string, string][];
	/** Tailwind Element classes table source [name, values, description] */
	classes?: [string, string, string][];
	/** Keyboard interaction table source [name, description]. */
	keyboard?: [string, string][];
}

// NOTE: this will be removed alongside the move to the JSDocs documentation.
// export interface DocsShellTable {
// 	/** Provide a semantic label. */
// 	label?: string;
// 	/** Provide HTML for description region. */
// 	description?: string;
// 	/** Provide the table headings. */
// 	headings?: string[];
// 	/** Provide the table source data. */
// 	source?: string[][];
// 	/** WAI-ARIA APG page link. */
// 	aria?: string; // TODO: remove this
// }
