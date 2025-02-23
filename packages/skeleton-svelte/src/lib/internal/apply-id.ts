export function applyId(object: Record<string, unknown>, id: string) {
	Object.defineProperty(object, 'id', {
		value: id,
		configurable: true
	});
}
