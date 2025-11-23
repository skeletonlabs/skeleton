import Test from './floating-panel.svelte';
import { render } from 'vitest-browser-svelte';
import { describe, expect, it } from 'vitest';
import { page } from 'vitest/browser';

describe('FloatingPanel', () => {
	describe('Trigger', () => {
		it('renders', async () => {
			render(Test);
			await expect.element(page.getByTestId('trigger')).toBeInTheDocument();
		});
	});

	describe('Positioner', () => {
		it('renders', async () => {
			render(Test);
			await expect.element(page.getByTestId('positioner')).toBeInTheDocument();
		});
	});

	describe('Content', () => {
		it('renders', async () => {
			render(Test);
			await expect.element(page.getByTestId('content')).toBeInTheDocument();
		});
	});

	describe('Header', () => {
		it('renders', async () => {
			render(Test);
			await expect.element(page.getByTestId('header')).toBeInTheDocument();
		});
	});

	describe('Body', () => {
		it('renders', async () => {
			render(Test);
			await expect.element(page.getByTestId('body')).toBeInTheDocument();
		});
	});

	describe('Title', () => {
		it('renders', async () => {
			render(Test);
			await expect.element(page.getByTestId('title')).toBeInTheDocument();
		});
	});

	describe('DragTrigger', () => {
		it('renders', async () => {
			render(Test);
			await expect.element(page.getByTestId('drag-trigger')).toBeInTheDocument();
		});
	});

	describe('ResizeTrigger', () => {
		it('renders', async () => {
			render(Test);
			await expect.element(page.getByTestId('resize-trigger')).toBeInTheDocument();
		});
	});

	describe('StageTrigger', () => {
		it('renders minimized trigger', async () => {
			render(Test);
			await expect.element(page.getByTestId('stage-trigger-minimized')).toBeInTheDocument();
		});

		it('renders maximized trigger', async () => {
			render(Test);
			await expect.element(page.getByTestId('stage-trigger-maximized')).toBeInTheDocument();
		});
	});

	describe('CloseTrigger', () => {
		it('renders', async () => {
			render(Test);
			await expect.element(page.getByTestId('close-trigger')).toBeInTheDocument();
		});
	});

	describe('Control', () => {
		it('renders', async () => {
			render(Test);
			await expect.element(page.getByTestId('control')).toBeInTheDocument();
		});
	});
});
