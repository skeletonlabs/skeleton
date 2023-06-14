import { readable } from 'svelte/store';
import { BROWSER } from 'esm-env';

/** Prefers reduced motion  */
const reducedMotionQuery = '(prefers-reduced-motion: reduce)';
const prefersReducedMotion = () => {
	if (!BROWSER) return false;
	return window.matchMedia(reducedMotionQuery).matches;
};
export const prefersReducedMotionStore = readable(prefersReducedMotion(), (set) => {
	if (BROWSER) {
		const setReducedMotion = (event: MediaQueryListEvent) => {
			set(event.matches);
		};
		const mediaQueryList = window.matchMedia(reducedMotionQuery);
		mediaQueryList.addEventListener('change', setReducedMotion);

		return () => {
			mediaQueryList.removeEventListener('change', setReducedMotion);
		};
	}
});
