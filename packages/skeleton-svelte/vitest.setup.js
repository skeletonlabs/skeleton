import '@testing-library/jest-dom/vitest';
import { vitest } from 'vitest';

// NOTE: Used for the <Slider> component
// https://stackoverflow.com/questions/64558062/how-to-mock-resizeobserver-to-work-in-unit-tests-using-react-testing-library
global.ResizeObserver = vitest.fn().mockImplementation(() => ({
	observe: vitest.fn(),
	unobserve: vitest.fn(),
	disconnect: vitest.fn(),
}));
