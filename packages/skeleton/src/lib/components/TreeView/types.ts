export interface TreeViewNode {
	/** Nodes Unique ID */
	id: string;
	/** Main content. accepts HTML. */
	content: string;
	/** Lead content. accepts HTML. */
	lead?: string;
	/** children nodes. */
	children?: TreeViewNode[];
	/** Set the input's value. */
	value?: unknown;
}
