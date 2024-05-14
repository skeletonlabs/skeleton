import { readable } from 'svelte/store';
import { BROWSER } from 'esm-env';

/** Prefers reduced motion  */
const reducedMotionQuery = '(prefers-reduced-motion: reduce)';

function prefersReducedMotion() {
	if (!BROWSER) return false;
	return window.matchMedia(reducedMotionQuery).matches;
}

/**
 * Indicates that the user has enabled reduced motion on their device.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion
 */
export const prefersReducedMotionStore = readable(prefersReducedMotion(), (set) => {
	if (!BROWSER) {
		return;
	}

	const setReducedMotion = (event: MediaQueryListEvent) => {
		set(event.matches);
	};
	const mediaQueryList = window.matchMedia(reducedMotionQuery);

	if (mediaQueryList?.addEventListener) {
		mediaQueryList.addEventListener('change', setReducedMotion);
	} else if (mediaQueryList?.addListener) {
		// https://github.com/skeletonlabs/skeleton/issues/2656
		mediaQueryList.addListener(setReducedMotion);
	}

	return () => {
		if (mediaQueryList?.removeEventListener) {
			mediaQueryList.removeEventListener('change', setReducedMotion);
		} else if (mediaQueryList?.removeListener) {
			// https://github.com/skeletonlabs/skeleton/issues/2656
			mediaQueryList.removeListener(setReducedMotion);
		}
	};
});
