// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface Interface {
	primitive: string;
	array: string[];
	union: string | number;
	intersection: Record<string, string> & Record<string, number>;
	object: {
		[key: string]: unknown;
	};
	function: () => void;
}
