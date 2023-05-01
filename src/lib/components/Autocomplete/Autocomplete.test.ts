import { describe, expect, it, vi } from 'vitest';
import type { AutocompleteOption } from './types';
import { Autocomplete } from '@skeletonlabs/skeleton';
import { render } from '@testing-library/svelte';

// keeping this as an array of `as const`s gives us autocompletion, and type safety
const options = [
	{ label: 'Vanilla', value: 'vanilla', keywords: 'plain, basic', meta: { healthy: false } } as const,
	{ label: 'Chocolate', value: 'chocolate', keywords: 'dark, white', meta: { healthy: false } } as const,
	{ label: 'Strawberry', value: 'strawberry', keywords: 'fruit', meta: { healthy: true } } as const,
	{ label: 'Neapolitan', value: 'neapolitan', keywords: 'mix, strawberry, chocolate, vanilla', meta: { healthy: false } } as const,
	{ label: 'Pineapple', value: 'pineapple', keywords: 'fruit', meta: { healthy: true } } as const,
	{ label: 'Peach', value: 'peach', keywords: 'fruit', meta: { healthy: true } } as const
] satisfies AutocompleteOption[];
type Label = (typeof options)[number]['label'];
type Value = (typeof options)[number]['value'];
// NB: be very careful picking options. Make sure none of the search terms match the keywords of unintended options.

describe('Autocomplete.svelte', () => {
	it('Shows all the options when no search term is provided', () => {
		const { getByText } = render(Autocomplete, { props: { options, input: '' } });
		options.forEach((option) => {
			expect(getByText(option.label)).toBeTruthy();
		});
	});

	it('Shows only the options that match the search term', () => {
		const matchingOptions: Label[] = ['Neapolitan', 'Pineapple'];
		const notMatchingOptions = options.filter((option) => !matchingOptions.includes(option.label));

		const { getByText, queryByText } = render(Autocomplete, { props: { options, input: 'ne' } });

		matchingOptions.forEach((option) => {
			expect(getByText(option)).toBeTruthy();
		});
		notMatchingOptions.forEach((option) => {
			expect(queryByText(option.label)).toBeFalsy();
		});
	});

	it('Searches in keywords', () => {
		const matchingOptions: Label[] = ['Strawberry', 'Peach', 'Pineapple'];
		const notMatchingOptions = options.filter((option) => !matchingOptions.includes(option.label));

		const { getByText, queryByText } = render(Autocomplete, { props: { options, input: 'fruit' } });

		matchingOptions.forEach((option) => {
			expect(getByText(option)).toBeTruthy();
		});
		notMatchingOptions.forEach((option) => {
			expect(queryByText(option.label)).toBeFalsy();
		});
	});

	it('Shows a message when no options match the search term', () => {
		const { getByText, rerender } = render(Autocomplete, { props: { options, input: 'nonexistent' } });
		expect(getByText('No Results Found.')).toBeTruthy();

		// ensures custom message is set
		rerender({ options, input: 'nonexistent', emptyState: 'custom message' });
		expect(getByText('custom message')).toBeTruthy();
	});

	it('Fires the selection event when an option is selected', () => {
		let selectedOption: AutocompleteOption | undefined;
		const selectionHandler = vi.fn((e: CustomEvent<AutocompleteOption>) => (selectedOption = e.detail));

		const { getByText, component } = render(Autocomplete, {
			props: { options, input: 'ne' }
		});

		component.$on('selection', selectionHandler);

		getByText('Neapolitan').click();

		expect(selectionHandler).toHaveBeenCalled();
		expect(selectedOption).toEqual(options.find((o) => o.label === 'Neapolitan'));
	});

	// TODO: fix these tests

	// describe('allowlist', () => {
	// 	it('only shows items in the allowlist when no search term is present', () => {
	// 		// doesn't include 'pineapple'
	// 		const allowlist: Value[] = ['neapolitan', 'chocolate', 'peach', 'strawberry', 'vanilla'];
	// 		const { getByText, queryByText } = render(Autocomplete, { props: { options, input: '', allowlist } });
	// 		options.forEach((option) => {
	// 			if (!allowlist.includes(option.value)) {
	// 				expect(queryByText(option.label)).toBeFalsy();
	// 			} else {
	// 				expect(getByText(option.label)).toBeTruthy();
	// 			}
	// 		});
	// 	});

	// 	it('only shows items in the allowlist when searching', () => {
	// 		// doesn't include 'pineapple'
	// 		const allowlist: Value[] = ['neapolitan', 'chocolate', 'peach', 'strawberry', 'vanilla'];
	// 		const { getByText, queryByText } = render(Autocomplete, { props: { options, input: 'ne', allowlist } });
	// 		const matchingOptions: Label[] = ['Neapolitan'];
	// 		const notMatchingOptions = options.filter((option) => !matchingOptions.includes(option.label));

	// 		matchingOptions.forEach((option) => {
	// 			expect(getByText(option)).toBeTruthy();
	// 		});
	// 		notMatchingOptions.forEach((option) => {
	// 			expect(queryByText(option.label)).toBeFalsy();
	// 		});
	// 	});

	// 	it('shows the empty message if the only matching elements are not in the allowlist', () => {
	// 		const allowlist: Value[] = ['neapolitan', 'chocolate', 'peach', 'strawberry', 'vanilla'];
	// 		const { queryByText } = render(Autocomplete, { props: { options, input: 'pineapple', allowlist } });
	// 		expect(queryByText('No Results Found.')).toBeTruthy();
	// 	});
	// });

	describe('denylist', () => {
		it('does not show items in the denylist when no search term is present', () => {
			const denylist: Value[] = ['pineapple'];
			const { getByText, queryByText } = render(Autocomplete, { props: { options, input: '', denylist } });
			options.forEach((option) => {
				if (denylist.includes(option.value)) {
					expect(queryByText(option.label)).toBeFalsy();
				} else {
					expect(getByText(option.label)).toBeTruthy();
				}
			});
		});

		it('does not show items in the denylist when searching', () => {
			const denylist: Value[] = ['pineapple'];
			const { getByText, queryByText } = render(Autocomplete, { props: { options, input: 'ne', denylist } });
			const matchingOptions: Label[] = ['Neapolitan'];
			const notMatchingOptions = options.filter((option) => !matchingOptions.includes(option.label));

			matchingOptions.forEach((option) => {
				expect(getByText(option)).toBeTruthy();
			});
			notMatchingOptions.forEach((option) => {
				expect(queryByText(option.label)).toBeFalsy();
			});
		});

		it('shows the empty message if the only matching options are in the denylist', () => {
			const denylist: Value[] = ['pineapple'];
			const { queryByText } = render(Autocomplete, { props: { options, input: 'pineapple', denylist } });
			expect(queryByText('No Results Found.')).toBeTruthy();
		});
	});
});
