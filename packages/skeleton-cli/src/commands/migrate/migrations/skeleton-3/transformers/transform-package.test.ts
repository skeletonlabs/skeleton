import { transformPackage } from './transform-package.js';
import getLatestVersion from 'latest-version';
import { describe, it, expect, vi } from 'vitest';

vi.mock('latest-version', () => {
	return {
		default: vi.fn()
	};
});

describe('transformPackage', () => {
	it('updates the "@skeletonlabs/tw-plugin" dependency', async () => {
		vi.mocked(getLatestVersion).mockReturnValue(Promise.resolve('3.0.0'));
		expect(
			(
				await transformPackage(`
{
	"dependencies": {
		"@skeletonlabs/tw-plugin": "^1.0.0"
	}
}
		`)
			).code
				.trim()
				.replace(/\r\n|\r|\n/g, '\n')
		).toBe(
			`
{
	"dependencies": {
		"@skeletonlabs/skeleton": "^3.0.0"
	}
}
		`
				.trim()
				.replace(/\r\n|\r|\n/g, '\n')
		);
	});
	it('updates the "@skeletonlabs/skeleton" dependency', async () => {
		vi.mocked(getLatestVersion).mockReturnValue(Promise.resolve('3.0.0'));

		expect(
			(
				await transformPackage(`
{
	"dependencies": {
		"@skeletonlabs/skeleton": "^2.0.0"
	}
}
		`)
			).code
				.trim()
				.replace(/\r\n|\r|\n/g, '\n')
		).toBe(
			`
{
	"dependencies": {
		"@skeletonlabs/skeleton-svelte": "^3.0.0"
	}
}
		`
				.trim()
				.replace(/\r\n|\r|\n/g, '\n')
		);
	});
	it('updates both "@skeletonlabs/tw-plugin" and "@skeletonlabs/skeleton" dependencies', async () => {
		vi.mocked(getLatestVersion).mockImplementation((pkg) => {
			switch (pkg) {
				case '@skeletonlabs/skeleton-svelte':
					return Promise.resolve('1.0.0');
				case '@skeletonlabs/skeleton':
					return Promise.resolve('3.0.0');
			}
			return Promise.resolve('0.0.0');
		});
		expect(
			(
				await transformPackage(`
{
	"dependencies": {
		"@skeletonlabs/tw-plugin": "^1.0.0",
		"@skeletonlabs/skeleton": "^2.0.0"
	}
}
		`)
			).code
				.trim()
				.replace(/\r\n|\r|\n/g, '\n')
		).toBe(
			`
{
	"dependencies": {
		"@skeletonlabs/skeleton": "^3.0.0",
		"@skeletonlabs/skeleton-svelte": "^1.0.0"
	}
}
		`
				.trim()
				.replace(/\r\n|\r|\n/g, '\n')
		);
	});
	it('does not update "@skeletonlabs/skeleton" if version is >=3.0.0', async () => {
		vi.mocked(getLatestVersion).mockReturnValue(Promise.resolve('3.0.0'));
		expect(
			(
				await transformPackage(`
{
	"dependencies": {
		"@skeletonlabs/skeleton": "^3.0.0"
	}
}
		`)
			).code
				.trim()
				.replace(/\r\n|\r|\n/g, '\n')
		).toBe(
			`
{
	"dependencies": {
		"@skeletonlabs/skeleton": "^3.0.0"
	}
}
		`
				.trim()
				.replace(/\r\n|\r|\n/g, '\n')
		);
	});
});
