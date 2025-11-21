import Test from './test.svelte';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';

describe('Accordion', () => {
	describe('Root', () => {
		it('renders', () => {
			render(Test);
			expect(screen.getByTestId('root')).toBeInTheDocument();
		});
	});

	describe('Item', () => {
		it('renders', () => {
			render(Test);
			expect(screen.getByTestId('item')).toBeInTheDocument();
		});
	});

	describe('ItemTrigger', () => {
		it('renders', () => {
			render(Test);
			expect(screen.getByTestId('item-trigger')).toBeInTheDocument();
		});
	});

	describe('ItemContent', () => {
		it('renders', () => {
			render(Test);
			expect(screen.getByTestId('item-content')).toBeInTheDocument();
		});
	});
});
