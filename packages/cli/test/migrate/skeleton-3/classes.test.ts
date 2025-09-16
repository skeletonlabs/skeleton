import { transformClasses } from '../../../src/commands/migrate/migrations/skeleton-3/transformers/transform-classes.js';
import { describe, expect, it } from 'vitest';

describe('transformClasses', () => {
	const COLORS = ['primary', 'secondary', 'tertiary', 'success', 'warning', 'error', 'surface'];
	const COLOR_PROPERTIES = ['bg', 'ring', 'border', 'text'];
	const V2_PAIRINGS = ['50-900', '100-800', '200-700', '300-600', '400-500', '500-400', '600-300', '700-200', '800-100', '900-50'];
	const V3_PAIRINGS = ['50-950', '100-900', '200-800', '300-700', '500', '600-400', '700-300', '800-200', '900-100', '950-50'];
	const CORNERS = ['tl', 'tr', 'bl', 'br'];
	describe('color pairings', () => {
		const createColorPairingMappings = () =>
			COLOR_PROPERTIES.flatMap((property) =>
				COLORS.flatMap((color) =>
					V2_PAIRINGS.map((v2Pairing, index) => ({
						v2: `${property}-${color}-${v2Pairing}-token`,
						v3: `${property}-${color}-${V3_PAIRINGS[index]}`,
					})),
				),
			);
		for (const { v2, v3 } of createColorPairingMappings()) {
			it(`transforms ${v2}`, () => {
				expect(transformClasses(v2).code).toBe(v3);
			});
		}
	});
	describe('backgrounds', () => {
		const createBackgroundMappings = () => [
			// Backdrop mappings
			...COLORS.map((color) => ({
				v2: `bg-${color}-backdrop-token`,
				v3: `bg-${color}-50/50 dark:bg-${color}-950/50`,
			})),
			// Hover mappings
			...COLORS.map((color) => ({
				v2: `bg-${color}-hover-token`,
				v3: `preset-tonal-${color}`,
			})),
			// Active mappings
			...COLORS.map((color) => ({
				v2: `bg-${color}-active-token`,
				v3: `preset-filled-${color}-500`,
			})),
		];
		for (const { v2, v3 } of createBackgroundMappings()) {
			it(`transforms ${v2}`, () => {
				expect(transformClasses(v2).code).toBe(v3);
			});
		}
	});
	describe('border radius', () => {
		const createBorderRadiusMappings = () => [
			{
				v2: 'rounded-token',
				v3: 'rounded-base',
			},
			{
				v2: 'rounded-container-token',
				v3: 'rounded-container',
			},
			...CORNERS.flatMap((corner) => [
				{
					v2: `rounded-${corner}-token`,
					v3: `rounded-${corner}-base`,
				},
				{
					v2: `rounded-${corner}-container-token`,
					v3: `rounded-${corner}-container`,
				},
			]),
		];
		for (const { v2, v3 } of createBorderRadiusMappings()) {
			it(`transforms ${v2}`, () => {
				expect(transformClasses(v2).code).toBe(v3);
			});
		}
	});
	describe('borders', () => {
		const createBorderMappings = () => [
			{
				v2: 'border-token',
				v3: 'border',
			},
			...COLORS.flatMap((color) =>
				V2_PAIRINGS.map((v2Pairing, index) => ({
					v2: `border-${color}-${v2Pairing}-token`,
					v3: `border-${color}-${V3_PAIRINGS[index]}`,
				})),
			),
		];
		for (const { v2, v3 } of createBorderMappings()) {
			it(`transforms ${v2}`, () => {
				expect(transformClasses(v2).code).toBe(v3);
			});
		}
	});
	describe('rings', () => {
		const createRingMappings = () => [
			{
				v2: 'ring-token',
				v3: 'ring',
			},
			...COLORS.flatMap((color) =>
				V2_PAIRINGS.map((v2Pairing, index) => ({
					v2: `ring-${color}-${v2Pairing}-token`,
					v3: `ring-${color}-${V3_PAIRINGS[index]}`,
				})),
			),
		];
		for (const { v2, v3 } of createRingMappings()) {
			it(`transforms ${v2}`, () => {
				expect(transformClasses(v2).code).toBe(v3);
			});
		}
	});
	describe('text', () => {
		const createTextMappings = () => [
			// Font tokens
			{
				v2: 'font-token',
				v3: 'base-font-family',
			},
			{
				v2: 'font-headings-token',
				v3: 'heading-font-family',
			},
			// Text color tokens
			{
				v2: 'text-token',
				v3: 'base-font-color',
			},
			// Text on color contrast tokens
			...COLORS.map((color) => ({
				v2: `text-on-${color}-token`,
				v3: `text-${color}-contrast-500`,
			})),
			// Text color pairings
			...COLORS.flatMap((color) =>
				V2_PAIRINGS.map((v2Pairing, index) => ({
					v2: `text-${color}-${v2Pairing}-token`,
					v3: `text-${color}-${V3_PAIRINGS[index]}`,
				})),
			),
		];
		for (const { v2, v3 } of createTextMappings()) {
			it(`transforms ${v2}`, () => {
				expect(transformClasses(v2).code).toBe(v3);
			});
		}
	});
	describe('text decoration', () => {
		const createDecorationMappings = () =>
			COLORS.flatMap((color) =>
				V2_PAIRINGS.map((v2Pairing, index) => ({
					v2: `decoration-${color}-${v2Pairing}-token`,
					v3: `decoration-${color}-${V3_PAIRINGS[index]}`,
				})),
			);

		for (const { v2, v3 } of createDecorationMappings()) {
			it(`transforms ${v2}`, () => {
				expect(transformClasses(v2).code).toBe(v3);
			});
		}
	});
	describe('accent', () => {
		const createAccentMappings = () =>
			COLORS.map((color) => ({
				v2: `accent-${color}-token`,
				v3: `accent-${color}-500`,
			}));

		for (const { v2, v3 } of createAccentMappings()) {
			it(`transforms ${v2}`, () => {
				expect(transformClasses(v2).code).toBe(v3);
			});
		}
	});
	describe('presets', () => {
		const createPresetMappings = () => [
			{
				v2: 'variant-filled',
				v3: 'preset-filled',
			},
			...COLORS.map((color) => ({
				v2: `variant-filled-${color}`,
				v3: `preset-filled-${color}-500`,
			})),
			{
				v2: 'variant-ghost',
				v3: 'preset-tonal border border-surface-500',
			},
			...COLORS.map((color) => ({
				v2: `variant-ghost-${color}`,
				v3: `preset-tonal-${color} border border-${color}-500`,
			})),
			{
				v2: 'variant-soft',
				v3: 'preset-tonal',
			},
			...COLORS.map((color) => ({
				v2: `variant-soft-${color}`,
				v3: `preset-tonal-${color}`,
			})),
			{
				v2: 'variant-ringed',
				v3: 'preset-outlined',
			},
			...COLORS.map((color) => ({
				v2: `variant-ringed-${color}`,
				v3: `preset-outlined-${color}-500`,
			})),
			{
				v2: 'variant-glass',
				v3: 'preset-tonal',
			},
			...COLORS.map((color) => ({
				v2: `variant-glass-${color}`,
				v3: `preset-tonal-${color}`,
			})),
		];
		for (const { v2, v3 } of createPresetMappings()) {
			it(`transforms ${v2}`, () => {
				expect(transformClasses(v2).code).toBe(v3);
			});
		}
	});
	describe('tailwind components', () => {
		const createTailwindMappings = () => [
			/**
			 * Disabled until further discussion
			 * @see https://github.com/skeletonlabs/skeleton/pull/2972#discussion_r1857260763
			 */
			// {
			// 	v2: 'card',
			// 	v3: 'card bg-surface-100-900-token'
			// },
			{
				v2: 'btn-xl',
				v3: 'btn-lg',
			},
			{
				v2: 'btn-icon-xl',
				v3: 'btn-icon-lg',
			},
			{
				v2: 'btn-group',
				v3: '',
			},
			{
				v2: 'table-hover',
				v3: '',
			},
		];
		for (const { v2, v3 } of createTailwindMappings()) {
			it(`transforms ${v2}`, () => {
				expect(transformClasses(v2).code).toBe(v3);
			});
		}
	});
});
