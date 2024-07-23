/**
 * Create a normalizer function that normalizes a set of attributes based on a given dictionary.
 *
 * @param {Record<string, string>} dictionary - The dictionary to use for normalization.
 * @return {(attributes: Record<string, unknown>): Record<string, unknown>} The normalized attributes.
 */
const createNormalizer = (dictionary: Record<string, string>) => {
	return (attributes: Record<string, unknown>): Record<string, unknown> => {
		const output: Record<string, unknown> = {};
		for (const [key, value] of Object.entries(attributes)) {
			output[dictionary[key] ?? key] = value;
		}
		return output;
	};
};

export { createNormalizer };
