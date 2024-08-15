import { describe, expect, it, vi } from 'vitest';
import { render } from '@testing-library/react';
import { Progress } from '$lib/index.js';

describe('Progress', () => {
	describe('<Progress>', () => {
		const testId = 'progress';
		it('Renders the component', () => {
			const component = render(<Progress></Progress>);
			expect(component.getByTestId(testId)).toBeInTheDocument();
		});

		for (const prop of ['base', 'height', 'width', 'classes']) {
			it(`Correctly applies the \`${prop}\` prop`, () => {
				const value = 'foo';
				const component = render(<Progress {...{ [prop]: value }} />);
				expect(component.getByTestId(testId)).toHaveClass(value);
			});
		}

		describe('Label', () => {
			const testId = 'progress-label';

			it('Renders the component', () => {
				const component = render(<Progress>label</Progress>);
				expect(component.getByTestId(testId)).toBeInTheDocument();
			});

			for (const prop of ['labelBase', 'labelText', 'labelClasses']) {
				it(`Correctly applies the \`${prop}\` prop`, () => {
					const value = 'foo';
					const component = render(<Progress {...{ [prop]: value }}>label</Progress>);
					expect(component.getByTestId(testId)).toHaveClass(value);
				});
			}
		});

		describe('Track', () => {
			const testId = 'progress-track';

			it('Renders the component', () => {
				const component = render(<Progress>label</Progress>);
				expect(component.getByTestId(testId)).toBeInTheDocument();
			});

			for (const prop of ['trackBase', 'trackBg', 'trackRounded', 'trackClasses']) {
				it(`Correctly applies the \`${prop}\` prop`, () => {
					const value = 'foo';
					const component = render(<Progress {...{ [prop]: value }} />);
					expect(component.getByTestId(testId)).toHaveClass(value);
				});
			}
		});

		describe('Meter', () => {
			const testId = 'progress-meter';

			it('Renders the component', () => {
				const component = render(<Progress>label</Progress>);
				expect(component.getByTestId(testId)).toBeInTheDocument();
			});

			for (const prop of ['meterBase', 'meterBg', 'meterRounded', 'meterTransition', 'meterClasses']) {
				it(`Correctly applies the \`${prop}\` prop`, () => {
					const value = 'foo';
					const component = render(<Progress {...{ [prop]: value }} />);
					expect(component.getByTestId(testId)).toHaveClass(value);
				});
			}

			it('Correctly applies the `meterAnimate` prop based on the `value` prop', async () => {
				const meterAnimate = 'meterAnimate';
				const { getByTestId, rerender } = render(<Progress meterAnimate={meterAnimate} value={0}></Progress>);
				expect(getByTestId(testId)).not.toHaveClass(meterAnimate);
				rerender(<Progress meterAnimate={meterAnimate} value={null}></Progress>);
				await vi.waitFor(() => {
					expect(getByTestId(testId)).toHaveClass(meterAnimate);
				});
			});
		});
	});
});
