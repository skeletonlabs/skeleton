import Test from './test.jsx';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

describe('FloatingPanel', () => {
	describe('Trigger', () => {
		it('renders', () => {
			render(<Test />);
			expect(screen.getByTestId('trigger')).toBeInTheDocument();
		});
	});

	describe('Positioner', () => {
		it('renders', () => {
			render(<Test />);
			expect(screen.getByTestId('positioner')).toBeInTheDocument();
		});
	});

	describe('Content', () => {
		it('renders', () => {
			render(<Test />);
			expect(screen.getByTestId('content')).toBeInTheDocument();
		});
	});

	describe('Header', () => {
		it('renders', () => {
			render(<Test />);
			expect(screen.getByTestId('header')).toBeInTheDocument();
		});
	});

	describe('Body', () => {
		it('renders', () => {
			render(<Test />);
			expect(screen.getByTestId('body')).toBeInTheDocument();
		});
	});

	describe('Title', () => {
		it('renders', () => {
			render(<Test />);
			expect(screen.getByTestId('title')).toBeInTheDocument();
		});
	});

	describe('DragTrigger', () => {
		it('renders', () => {
			render(<Test />);
			expect(screen.getByTestId('drag-trigger')).toBeInTheDocument();
		});
	});

	describe('ResizeTrigger', () => {
		it('renders', () => {
			render(<Test />);
			expect(screen.getByTestId('resize-trigger')).toBeInTheDocument();
		});
	});

	describe('StageTrigger', () => {
		it('renders minimized trigger', () => {
			render(<Test />);
			expect(screen.getByTestId('stage-trigger-minimized')).toBeInTheDocument();
		});

		it('renders maximized trigger', () => {
			render(<Test />);
			expect(screen.getByTestId('stage-trigger-maximized')).toBeInTheDocument();
		});
	});

	describe('CloseTrigger', () => {
		it('renders', () => {
			render(<Test />);
			expect(screen.getByTestId('close-trigger')).toBeInTheDocument();
		});
	});

	describe('Control', () => {
		it('renders', () => {
			render(<Test />);
			expect(screen.getByTestId('control')).toBeInTheDocument();
		});
	});
});
