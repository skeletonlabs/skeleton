export const createId = (() => {
	let id = 0;
	return () => `${(Math.random() + 1).toString(36).substring(5)}-${id++}`;
})();
