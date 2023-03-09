import { act, render } from '@testing-library/svelte';
import { describe, it, expect, vi } from 'vitest';

import AutoComplete from '$lib/components/AutoComplete/Autocomplete.svelte';
import { tick } from 'svelte';

describe('Autocomplete.svelte', () => {
	it('Renders with minimal props', async () => {
		const { getByTestId, queryByText } = render(AutoComplete, {
			props: { input: '', options: [{ label: 'foo', value: 'foo' }], name: 'test' }
		});
		expect(getByTestId('auto-complete')).toBeTruthy();
		expect(queryByText('foo')).toBeTruthy();
	});

	it('Filters the displayed options based on the input', async () => {
		const { getByTestId, queryByText } = render(AutoComplete, {
			props: {
				input: 'foo',
				options: [
					{ label: 'foo', value: 'foo' },
					{ label: 'foobar', value: 'foobar' },
					{ label: 'barfoo', value: 'barfoo' },
					{ label: 'fizz', value: 'fizz' },
					{ label: 'buzz', value: 'buzz' }
				],
				name: 'test'
			}
		});
		expect(getByTestId('auto-complete')).toBeTruthy();
		expect(queryByText('fizz')).toBeFalsy();
		expect(queryByText('foo')).toBeTruthy();
		expect(queryByText('foobar')).toBeTruthy();
		// we only match the _start_ of the string
		expect(queryByText('barfoo')).toBeFalsy();
	});

	it('Is case insensitive', async () => {
		const { getByTestId, queryByText } = render(AutoComplete, {
			props: {
				input: 'Bar',
				options: [
					{ label: 'foo', value: 'foo' },
					{ label: 'Foobar', value: 'Foobar' },
					{ label: 'Bar', value: 'Bar' },
					{ label: 'barFoo', value: 'barFoo' }
				],
				name: 'test'
			}
		});
		expect(getByTestId('auto-complete')).toBeTruthy();
		expect(queryByText('foo')).toBeFalsy();
		expect(queryByText('Foobar')).toBeFalsy();

		// we should match regardless of the case of the input and the value
		expect(queryByText('Bar')).toBeTruthy();
		expect(queryByText('barFoo')).toBeTruthy();
	});

	it('Calls on:select when an item is clicked', async () => {
		let selected;
		const selectHandler = vi.fn((e) => (selected = e.detail.selection));
		const { queryByText, component } = render(AutoComplete, {
			props: {
				input: '',
				options: [
					{ label: 'foo', value: 'foo' },
					{ label: 'Foobar', value: 'Foobar' },
					{ label: 'Bar', value: 'Bar' }
				],
				name: 'test'
			}
		});
		component.$on('selection', selectHandler);

		const fooOption = queryByText('foo');
		if (!fooOption || !fooOption.parentElement) {
			expect(fooOption).toBeTruthy();
			expect(fooOption?.parentElement).toBeTruthy();
			return;
		}

		fooOption.parentElement.dispatchEvent(new Event('click'));
		expect(selectHandler).toHaveBeenCalled();
		expect(selected).toEqual({ label: 'foo', value: 'foo' });
	});

	it.skip('Listens to keypresses on the provided input', async () => {
		const inputEl: HTMLInputElement = document.createElement('input');
		const { getByTestId, component } = render(AutoComplete, {
			props: {
				input: '',
				options: [
					{ label: 'foo', value: 'foo' },
					{ label: 'Foobar', value: 'Foobar' },
					{ label: 'Bar', value: 'Bar' }
				],
				name: 'test',
				inputEl: inputEl,
				focussedOption: 'variant-ringed-tertiary'
			}
		});
		inputEl.dispatchEvent(new KeyboardEvent('keyup', { key: 'ArrowDown' }));
		await act(tick);
		// I am sure there is a much better way to lift the state of the component
		expect(component.$$.hmr_cmp.$capture_state().focusIndex).toStrictEqual(1);
		expect(getByTestId('auto-complete').children.item(1)?.classList.contains('variant-ringed-tertiary')).toBe(true);

		inputEl.dispatchEvent(new KeyboardEvent('keyup', { key: 'ArrowDown' }));
		await act(tick);
		inputEl.dispatchEvent(new KeyboardEvent('keyup', { key: 'ArrowDown' }));
		await act(tick);
		expect(component.$$.hmr_cmp.$capture_state().focusIndex).toStrictEqual(0);
		expect(getByTestId('auto-complete').children.item(0)?.classList.contains('variant-ringed-tertiary')).toBe(true);

		inputEl.dispatchEvent(new KeyboardEvent('keyup', { key: 'ArrowUp' }));
		await act(tick);
		expect(component.$$.hmr_cmp.$capture_state().focusIndex).toStrictEqual(2);
		expect(getByTestId('auto-complete').children.item(2)?.classList.contains('variant-ringed-tertiary')).toBe(true);

		let selection;
		const selectedHandler = vi.fn((e) => (selection = e.detail.selection));
		component.$on('selection', selectedHandler);
		inputEl.dispatchEvent(new KeyboardEvent('keyup', { key: 'Enter' }));
		await act(tick);
		expect(selectedHandler).toHaveBeenCalled();
		expect(selection).toEqual({ label: 'Bar', value: 'Bar' });
	});
});
