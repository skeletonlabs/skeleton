// UUID

/** Implements a non-secure but unique ID value. */
export const useId = (() => {
	let id = 0;
	return () => Math.random().toString(36).substr(2) + id++;
})();
