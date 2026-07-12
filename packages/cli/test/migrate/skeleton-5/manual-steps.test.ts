import { transformJsx } from '../../../src/commands/migrate/migrations/skeleton-5/transformers/transform-jsx.js';
import { transformStylesheet } from '../../../src/commands/migrate/migrations/skeleton-5/transformers/transform-stylesheet.js';
import { transformSvelte } from '../../../src/commands/migrate/migrations/skeleton-5/transformers/transform-svelte.js';
import { detectManualClasses } from '../../../src/commands/migrate/migrations/skeleton-5/utility/manual-steps.js';
import { describe, expect, test } from 'vitest';

const ids = (steps: { id: string }[]) => steps.map((s) => s.id).sort();

describe('detectManualClasses', () => {
	test('flags classes with no v5 equivalent', () => {
		expect(ids(detectManualClasses('ig-cell'))).toEqual(['ig-cell']);
		expect(ids(detectManualClasses('code'))).toEqual(['code']);
		expect(ids(detectManualClasses('base-font-weight heading-font-style'))).toEqual(['font-style', 'font-weight']);
		expect(ids(detectManualClasses('anchor-text-decoration-hover'))).toEqual(['anchor-text-decoration']);
		expect(ids(detectManualClasses('heading-font-size heading-line-height'))).toEqual(['heading-sizing', 'heading-sizing']);
	});

	test('strips Tailwind variant prefixes before matching', () => {
		expect(ids(detectManualClasses('md:hover:ig-cell'))).toEqual(['ig-cell']);
	});

	test('flags the removed `theme-[name]:` variant', () => {
		expect(ids(detectManualClasses('theme-cerberus:bg-primary-500'))).toEqual(['variant-theme']);
	});

	test('does not flag classes that migrate cleanly or unrelated tokens', () => {
		expect(detectManualClasses('field-group input select btn grid-cols-[auto_1fr]')).toEqual([]);
		// substrings must not trigger (e.g. `barcode` contains `code`)
		expect(detectManualClasses('barcode qr-code-wrapper')).toEqual([]);
	});
});

describe('transformer manual-step reporting', () => {
	test('svelte: flags class attributes/directives, ignores prose', () => {
		const code = `<div class="ig-cell">the code sample</div>`;
		expect(ids(transformSvelte(code).meta.manual)).toEqual(['ig-cell']);
	});

	test('jsx: flags className, ignores unrelated attributes', () => {
		const flagged = transformJsx(`<span className="ig-cell" title="code">x</span>`);
		expect(ids(flagged.meta.manual)).toEqual(['ig-cell']);
	});

	test('stylesheet: flags @apply classes and @variant theme-[name]', () => {
		const css = `.x { @apply code; }\n@variant theme-cerberus { .y { color: red; } }`;
		expect(ids(transformStylesheet(css).meta.manual)).toEqual(['code', 'variant-theme']);
	});
});
