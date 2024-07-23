/**
 * Create a normalizer function that normalizes a set of attributes based on a given dictionary.
 *
 * @param dictionary - The dictionary to use for the normalization.
 * @return The normalizer, which takes in an object of attributes and returns an object of normalized attributes.
 */
function createNormalizer(dictionary: Record<string, string>): (attributes: Record<string, unknown>) => Record<string, unknown> {
	return (attributes) => {
		const output: Record<string, unknown> = {};
		for (const [key, value] of Object.entries(attributes)) {
			output[dictionary[key] ?? key] = value;
		}
		return output;
	};
}

export { createNormalizer };
