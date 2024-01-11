// Credits: https://github.com/tailwindlabs/tailwindcss/blob/master/src/util/prefixSelector.js
import parser from 'postcss-selector-parser';

/**
 * Prefix all classes in the selector with the given prefix
 */
export function prefixSelector(prefix: string, selector: string, prependNegative = false): string {
	if (prefix === '') {
		return selector;
	}

	const ast = parser().astSync(selector);

	ast.walkClasses((classSelector) => {
		const baseClass = classSelector.value;

		// don't modify the dark class
		if (baseClass === 'dark') {
			return;
		}

		const shouldPlaceNegativeBeforePrefix = prependNegative && baseClass.startsWith('-');

		classSelector.value = shouldPlaceNegativeBeforePrefix ? `-${prefix}${baseClass.slice(1)}` : `${prefix}${baseClass}`;
	});

	return ast.toString();
}
