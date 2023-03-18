import { describe, it, expect } from 'vitest';
import { destringRgb, hexToTailwindRgbString, textPasses } from './colors';

describe('Colors.ts', () => {
	it('Converts between hex and Tailwind RGB strings properly', async () => {
		expect(hexToTailwindRgbString('#000000')).toEqual('0 0 0');
		expect(hexToTailwindRgbString('#FFFFFF')).toEqual('255 255 255');
		expect(hexToTailwindRgbString('#FF0000')).toEqual('255 0 0');
		expect(hexToTailwindRgbString('#00FF00')).toEqual('0 255 0');
		expect(hexToTailwindRgbString('#0000FF')).toEqual('0 0 255');
		expect(hexToTailwindRgbString('#FFFF00')).toEqual('255 255 0');
		expect(hexToTailwindRgbString('#00FFFF')).toEqual('0 255 255');
		expect(hexToTailwindRgbString('#FF00FF')).toEqual('255 0 255');
		expect(hexToTailwindRgbString('#0FBA81')).toEqual('15 186 129');
		expect(hexToTailwindRgbString('#4F46E5')).toEqual('79 70 229');
	});

	it('Destrings an RGB string that includes commas, and return an RGB object', async () => {
		expect(destringRgb('0, 0, 0')).toEqual({ r: 0, g: 0, b: 0 });
		expect(destringRgb('255, 255, 255')).toEqual({ r: 255, g: 255, b: 255 });
		expect(destringRgb('255, 0, 0')).toEqual({ r: 255, g: 0, b: 0 });
		expect(destringRgb('0, 255, 0')).toEqual({ r: 0, g: 255, b: 0 });
		expect(destringRgb('0, 0, 255')).toEqual({ r: 0, g: 0, b: 255 });
		expect(destringRgb('255, 255, 0')).toEqual({ r: 255, g: 255, b: 0 });
		expect(destringRgb('0, 255, 255')).toEqual({ r: 0, g: 255, b: 255 });
		expect(destringRgb('255, 0, 255')).toEqual({ r: 255, g: 0, b: 255 });
		expect(destringRgb('15, 186, 129')).toEqual({ r: 15, g: 186, b: 129 });
		expect(destringRgb('79, 70, 229')).toEqual({ r: 79, g: 70, b: 229 });
	});

	it('Destrings an RGB string, and return an RGB object', async () => {
		expect(destringRgb('0 0 0')).toEqual({ r: 0, g: 0, b: 0 });
		expect(destringRgb('255 255 255')).toEqual({ r: 255, g: 255, b: 255 });
		expect(destringRgb('255 0 0')).toEqual({ r: 255, g: 0, b: 0 });
		expect(destringRgb('0 255 0')).toEqual({ r: 0, g: 255, b: 0 });
		expect(destringRgb('0 0 255')).toEqual({ r: 0, g: 0, b: 255 });
		expect(destringRgb('255 255 0')).toEqual({ r: 255, g: 255, b: 0 });
		expect(destringRgb('0 255 255')).toEqual({ r: 0, g: 255, b: 255 });
		expect(destringRgb('255 0 255')).toEqual({ r: 255, g: 0, b: 255 });
		expect(destringRgb('15 186 129')).toEqual({ r: 15, g: 186, b: 129 });
		expect(destringRgb('79 70 229')).toEqual({ r: 79, g: 70, b: 229 });
	});

	it('Calculates whether text on a background pass the AA contrast ratio', async () => {
		expect(textPasses('0, 0, 0', '255, 255, 255', 'small', 'AA')).toEqual(true);
		expect(textPasses('#0FBA81', '255, 255, 255', 'large', 'AA')).toEqual(false);
		expect(textPasses('#0FBA81', '#4f46e5', 'large', 'AA')).toEqual(false);
	});
});
