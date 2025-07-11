import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import '@testing-library/user-event';

afterEach(() => {
	cleanup();
});

// NOTE: used for the <Segment> component.
// https://stackoverflow.com/questions/64558062/how-to-mock-resizeobserver-to-work-in-unit-tests-using-react-testing-library
/* eslint-disable no-undef */
global.ResizeObserver = class MockedResizeObserver {
	observe = vi.fn();
	unobserve = vi.fn();
	disconnect = vi.fn();
};
