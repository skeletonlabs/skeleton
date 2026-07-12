/**
 * v4 usages that cannot be migrated automatically — either they need a structural change or have
 * no v5 equivalent. The transformers detect these and the CLI surfaces them as manual steps so a
 * user is never left with a silently half-migrated file.
 */
export interface ManualStep {
	/** Canonical id, used to de-duplicate repeated occurrences. */
	id: string;
	/** The actual token / at-rule found in the source. */
	match: string;
	/** What the user should do by hand. */
	hint: string;
}

/**
 * Class tokens that have no safe 1:1 v5 rename. Kept in sync with the "Deliberately NOT handled"
 * note in `transformers/transform-classes.ts`.
 */
const MANUAL_CLASS_RULES: { pattern: RegExp; id: string; hint: string }[] = [
	{
		pattern: /^ig-cell$/,
		id: 'ig-cell',
		hint: 'has no v5 utility — replace with `label label-text` and make the element a `<label for>`.',
	},
	{
		pattern: /^code$/,
		id: 'code',
		hint: 'was removed in v5 with no replacement class — style the element manually.',
	},
	{
		pattern: /^(base|heading|anchor)-font-weight$/,
		id: 'font-weight',
		hint: 'has no v5 utility — set the weight with a `font-*` utility or the matching theme token.',
	},
	{
		pattern: /^(base|heading|anchor)-font-style$/,
		id: 'font-style',
		hint: 'has no v5 utility — use `italic` / `not-italic` or the matching theme token.',
	},
	{
		pattern: /^anchor-text-decoration(-hover|-active|-focus)?$/,
		id: 'anchor-text-decoration',
		hint: 'has no v5 utility — use `underline` / `no-underline` etc. or the anchor theme tokens.',
	},
];

/** The `theme-[name]:` variant was removed from the Core API and must be handled by hand. */
export const THEME_VARIANT_STEP: Omit<ManualStep, 'match'> = {
	id: 'variant-theme',
	hint: 'the `theme-[name]` variant was removed from the Core API — scope theme styles another way.',
};

/**
 * Scans a whitespace-separated class string (a `class`/`className` value or `@apply` params) for
 * tokens that require manual migration. Tailwind variant prefixes (`hover:`, `md:`, …) are stripped
 * before matching so `hover:ig-cell` is still detected.
 */
export function detectManualClasses(code: string): ManualStep[] {
	const steps: ManualStep[] = [];
	for (const token of code.split(/\s+/)) {
		if (!token) {
			continue;
		}
		const segments = token.split(':');
		const base = segments.pop()!;
		// Any leading `theme-[name]:` variant was removed from the Core API.
		for (const variant of segments) {
			if (/^theme-[\w-]+$/.test(variant)) {
				steps.push({ ...THEME_VARIANT_STEP, match: `${variant}:` });
			}
		}
		for (const rule of MANUAL_CLASS_RULES) {
			if (rule.pattern.test(base)) {
				steps.push({ id: rule.id, match: base, hint: rule.hint });
			}
		}
	}
	return steps;
}

/** Collapses repeated occurrences of the same manual step (by id + match). */
export function dedupeManualSteps(steps: ManualStep[]): ManualStep[] {
	const seen = new Set<string>();
	return steps.filter((step) => {
		const key = `${step.id}:${step.match}`;
		if (seen.has(key)) {
			return false;
		}
		seen.add(key);
		return true;
	});
}
