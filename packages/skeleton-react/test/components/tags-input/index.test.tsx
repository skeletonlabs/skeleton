import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import TagsInput from './tags-input';

describe('tags-input', () => {
	it('renders root', () => {
		render(<TagsInput />);
		expect(screen.getByTestId('root')).toBeInTheDocument();
	});

	it('renders item', () => {
		render(<TagsInput />);
		expect(screen.getByTestId('item')).toBeInTheDocument();
	});

	it('renders item preview', () => {
		render(<TagsInput />);
		expect(screen.getByTestId('item-preview')).toBeInTheDocument();
	});

	it('renders item delete trigger', () => {
		render(<TagsInput />);
		expect(screen.getByTestId('item-delete-trigger')).toBeInTheDocument();
	});

	it('renders item input', () => {
		render(<TagsInput />);
		expect(screen.getByTestId('item-input')).toBeInTheDocument();
	});

	it('renders main input', () => {
		render(<TagsInput />);
		expect(screen.getByTestId('input')).toBeInTheDocument();
	});
});
