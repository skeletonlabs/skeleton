export type TypeKind = 'function' | 'array' | 'object' | 'primitive';

export interface Property {
	name: string;
	type: string;
	typeKind: TypeKind;
	optional: boolean;
	JSDoc: JSDoc;
}

export interface JSDoc {
	description: string | null;
	tags: Tag[];
}

export interface Tag {
	name: string;
	value: string | null;
}

export interface Interface {
	name: string;
	props: Property[];
}

export interface ComponentEntry {
	name: string;
	types: Array<{
		name: string;
		props: Property[];
		metadata: { classValue: string | undefined };
	}>;
}
