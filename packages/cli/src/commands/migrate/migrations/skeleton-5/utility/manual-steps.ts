// v4 usages that cannot be migrated automatically, reported to the user as manual steps
export interface ManualStep {
	id: string;
	match: string;
	hint: string;
}

// Classes with no 1:1 v5 rename
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
		pattern: /^heading-(font-size|line-height)$/,
		id: 'heading-sizing',
		hint: 'was removed in v5 — size headings with `text-*` / `leading-*` utilities instead.',
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

export const THEME_VARIANT_STEP: Omit<ManualStep, 'match'> = {
	id: 'variant-theme',
	hint: 'the `theme-[name]` variant was removed from the Core API — scope theme styles another way.',
};

// Scan a class string for classes that require manual migration, stripping variant prefixes first
export function detectManualClasses(code: string): ManualStep[] {
	const steps: ManualStep[] = [];
	for (const token of code.split(/\s+/)) {
		if (!token) {
			continue;
		}
		const segments = token.split(':');
		const base = segments.pop()!;
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
