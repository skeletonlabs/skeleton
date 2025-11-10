import '@testing-library/jest-dom/vitest';
import { vi } from 'vitest';

vi.stubGlobal(
	'ResizeObserver',
	vi.fn(
		class {
			observe() {}
			unobserve() {}
			disconnect() {}
		},
	),
);
