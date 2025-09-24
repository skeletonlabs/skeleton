import '@testing-library/jest-dom/vitest';
import { vi } from 'vitest';

vi.stubGlobal(
	'ResizeObserver',
	vi.fn(() => ({
		observe: vi.fn(),
		unobserve: vi.fn(),
		disconnect: vi.fn(),
	})),
);
