import * as tree from '@zag-js/tree-view';

// TreeViewContext ---

export interface TreeViewContext {
	api: ReturnType<typeof tree.connect>;
}

// Components ---

export interface TreeViewProps extends Omit<tree.Props, 'id'> {
	prop: string;
}

export interface Node {
	id: string;
	name: string;
	children?: Node[];
}
