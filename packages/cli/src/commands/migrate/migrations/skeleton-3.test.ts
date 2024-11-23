import { describe, expect, it } from 'vitest';
import { migrateClasses, migrateTailwindConfig } from './skeleton-3.js';

const COLORS = ['primary', 'secondary', 'tertiary', 'success', 'warning', 'error', 'surface'];
const CSS_PROPERTIES = ['bg', 'accent', 'border', 'caret', 'decoration', 'divide', 'fill', 'outline', 'ring', 'shadow', 'stroke', 'text'];
const V2_PAIRINGS = ['50-900', '100-800', '200-700', '300-600', '400-500', '500-400', '600-300', '700-200', '800-100', '900-50'];
const V3_PAIRINGS = ['50-950', '100-900', '200-800', '300-700', '500', '600-400', '700-300', '800-200', '900-100', '950-50'];
const CORNERS = ['tl', 'tr', 'bl', 'br'];

describe('migrateClasses', () => {
	describe('backgrounds', () => {
		const createBackgroundMappings = () => [
			// Backdrop mappings
			...COLORS.map((color) => ({
				v2: `bg-${color}-backdrop-token`,
				v3: `bg-${color}-50/50 dark:bg-${color}-950/50`
			})),
			// Hover mappings
			...COLORS.map((color) => ({
				v2: `bg-${color}-hover-token`,
				v3: `preset-tonal-${color}`
			})),
			// Active mappings
			...COLORS.map((color) => ({
				v2: `bg-${color}-active-token`,
				v3: `preset-filled-${color}-500`
			}))
		];
		for (const { v2, v3 } of createBackgroundMappings()) {
			it(`migrates ${v2}`, () => {
				expect(migrateClasses(v2)).toBe(v3);
			});
		}
	});
	describe('color pairings', () => {
		const createColorPairingMappings = () =>
			CSS_PROPERTIES.flatMap((property) =>
				COLORS.flatMap((color) =>
					V2_PAIRINGS.map((v2Pairing, index) => ({
						v2: `${property}-${color}-${v2Pairing}-token`,
						v3: `${property}-${color}-${V3_PAIRINGS[index]}`
					}))
				)
			);
		for (const { v2, v3 } of createColorPairingMappings()) {
			it(`migrates ${v2}`, () => {
				expect(migrateClasses(v2)).toBe(v3);
			});
		}
	});
	describe('border radius', () => {
		const createBorderRadiusMappings = () => [
			{
				v2: 'rounded-token',
				v3: 'rounded'
			},
			{
				v2: 'rounded-container-token',
				v3: 'rounded-container'
			},
			...CORNERS.flatMap((corner) => [
				{
					v2: `rounded-${corner}-token`,
					v3: `rounded-${corner}`
				},
				{
					v2: `rounded-${corner}-container-token`,
					v3: `rounded-${corner}-container`
				}
			])
		];
		for (const { v2, v3 } of createBorderRadiusMappings()) {
			it(`migrates ${v2}`, () => {
				expect(migrateClasses(v2)).toBe(v3);
			});
		}
	});
	describe('borders', () => {
		const createBorderMappings = () => [
			{
				v2: 'border-token',
				v3: 'border'
			},
			...COLORS.flatMap((color) =>
				V2_PAIRINGS.map((v2Pairing, index) => ({
					v2: `border-${color}-${v2Pairing}-token`,
					v3: `border-${color}-${V3_PAIRINGS[index]}`
				}))
			)
		];
		for (const { v2, v3 } of createBorderMappings()) {
			it(`migrates ${v2}`, () => {
				expect(migrateClasses(v2)).toBe(v3);
			});
		}
	});
	describe('rings', () => {
		const createRingMappings = () => [
			{
				v2: 'ring-token',
				v3: 'ring'
			},
			...COLORS.flatMap((color) =>
				V2_PAIRINGS.map((v2Pairing, index) => ({
					v2: `ring-${color}-${v2Pairing}-token`,
					v3: `ring-${color}-${V3_PAIRINGS[index]}`
				}))
			)
		];
		for (const { v2, v3 } of createRingMappings()) {
			it(`migrates ${v2}`, () => {
				expect(migrateClasses(v2)).toBe(v3);
			});
		}
	});
});

describe('migrateTailwindConfig', () => {
	it('migrates imports', () => {
		const v2 = `import { skeleton } from "@skeletonlabs/tw-plugin";`;
		const v3 = `import { skeleton, contentPath } from "@skeletonlabs/skeleton/plugin";`;
		expect(migrateTailwindConfig(v2)).toBe(v3);
	});

	it('migrates `config.content`', () => {
		const v2 = `export default { content: ['`;
	});
});
