declare module '*.svelte?raw&sveld' {
	interface SveldProp {
		name: string;
		kind: string;
		type?: string;
		isFunction: boolean;
		isFunctionDeclaration: boolean;
		isRequired: boolean;
		constant: boolean;
		reactive: boolean;
	}

	interface SveldSlot {
		name: string;
		default: boolean;
		fallback: string;
		slot_props: string;
		description?: string;
	}

	interface SveldEvent {
		type: string;
		name: string;
		element: string;
		description?: string;
	}

	interface SveldRestProps {
		type: string;
		name: string;
	}

	interface SveldTypedefs {
		type: string;
		name: string;
		ts: string;
	}

	interface SveldModuleExport {
		name: string;
		kind: string;
		type?: string;
		value: string;
		isFunction: boolean;
		isFunctionDeclaration: boolean;
		isRequired: boolean;
		constant: boolean;
		reactive: boolean;
	}

	interface SveldJson {
		props: SveldProp[];
		slots: SveldSlot[];
		events: SveldEvent[];
		typedefs: SveldTypedefs[];
		rest_props: SveldRestProps[];
		moduleExports: SveldModuleExport[];
		componentComment?: string;
		extends?: {
			interface: string;
			import: string;
		};
	}

	const json: SveldJson;

	export default json;
}

declare module 'sveld-types' {
	interface SveldProp {
		name: string;
		kind: string;
		type?: string;
		isFunction: boolean;
		isFunctionDeclaration: boolean;
		isRequired: boolean;
		constant: boolean;
		reactive: boolean;
		// added
		description?: string;
		value?: string;
	}

	interface SveldSlot {
		name: string;
		default: boolean;
		fallback: string;
		slot_props: string;
		description?: string;
	}

	interface SveldEvent {
		type: string;
		name: string;
		element: string;
		description?: string;
		// added
		detail?: string;
	}

	interface SveldRestProps {
		type: string;
		name: string;
	}

	interface SveldTypedefs {
		type: string;
		name: string;
		ts: string;
	}

	interface SveldModuleExport {
		name: string;
		kind: string;
		type?: string;
		value: string;
		isFunction: boolean;
		isFunctionDeclaration: boolean;
		isRequired: boolean;
		constant: boolean;
		reactive: boolean;
	}

	interface SveldJson {
		props: SveldProp[];
		slots: SveldSlot[];
		events: SveldEvent[];
		typedefs: SveldTypedefs[];
		rest_props: SveldRestProps[];
		moduleExports: SveldModuleExport[];
		componentComment?: string;
		extends?: {
			interface: string;
			import: string;
		};
	}
}
