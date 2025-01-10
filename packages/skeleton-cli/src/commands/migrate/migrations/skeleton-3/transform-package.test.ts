import { transformPackageContent } from './transform-package.js';
import getLatestVersion from 'latest-version';
import { describe, it, expect, vi } from 'vitest';

vi.mock('latest-version', () => {
	return {
		default: vi.fn(),
	};
});

describe('transformPackageContent', () => {
	it('updates @skeletonlabs/skeleton version if @skeletonlabs/tw-plugin is present', async () => {
		vi.mocked(getLatestVersion).mockReturnValue(new Promise((resolve) => resolve('3.0.0')));
		const v2 = `
			{
				"dependencies": {
					"@skeletonlabs/tw-plugin": "^1.0.0"
				}
			}
		`;
		const v3 = `
			{
				"dependencies": {
					"@skeletonlabs/skeleton": "^3.0.0"
				}
			}
		`;
		const result = await transformPackageContent(v2);
	    expect(result).toBe(v3);
	});
});
