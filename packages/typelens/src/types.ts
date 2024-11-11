export interface Tag {
	name: string;
	value: string;
}

export interface Documentation {
	text: string | null;
	tags: Tag[];
}

export interface Property {
	name: string;
	type: string;
	required: boolean;
	documentation: Documentation;
}

export interface Interface {
	name: string;
	properties: Property[];
}
