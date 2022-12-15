// Source: https://github.com/joshnuss/svelte-local-storage-store
// https://github.com/joshnuss/svelte-local-storage-store/blob/master/it/localStorageStore.it.ts
// Represents version v0.3.2 (2022-12-04)

import { describe, it, expect, beforeEach } from 'vitest';
import { get } from 'svelte/store';

import { localStorageStore } from '$lib/utilities/LocalStorageStore/LocalStorageStore';

describe('localStorageStore()', () => {
	beforeEach(() => localStorage.clear());

	it('uses initial value if nothing in local storage', () => {
		const store = localStorageStore('myKey', 123);
		const value = get(store);

		expect(value).toEqual(123);
	});

	it('uses existing value if data already in local storage', () => {
		localStorage.setItem('myKey2', '"existing"');

		const store = localStorageStore('myKey2', 'initial');
		const value = get(store);

		expect(value).toEqual('existing');
	});

	describe('set()', () => {
		it('replaces old value', () => {
			localStorage.setItem('myKey3', '"existing"');

			const store = localStorageStore('myKey3', '');
			store.set('new-value');
			const value = get(store);

			expect(localStorage.myKey3).toEqual('"new-value"');
			expect(value).toEqual('new-value');
		});

		it('adds new value', () => {
			const store = localStorageStore('myKey4', '');
			store.set('new-value');
			const value = get(store);

			expect(localStorage.myKey4).toEqual('"new-value"');
			expect(value).toEqual('new-value');
		});
	});

	describe('update()', () => {
		it('replaces old value', () => {
			localStorage.setItem('myKey5', '123');

			const store = localStorageStore('myKey5', 0);
			store.update((n) => n + 1);
			const value = get(store);

			expect(localStorage.myKey5).toEqual('124');
			expect(value).toEqual(124);
		});

		it('adds new value', () => {
			const store = localStorageStore('myKey6', 123);
			store.update((n) => n + 1);
			const value = get(store);

			expect(localStorage.myKey6).toEqual('124');
			expect(value).toEqual(124);
		});
	});

	describe('subscribe()', () => {
		it('publishes updates', () => {
			const store = localStorageStore('myKey7', 123);
			const values: number[] = [];
			const unsub = store.subscribe((value: number) => {
				if (value !== undefined) values.push(value);
			});
			store.set(456);
			store.set(999);

			expect(values).toEqual([123, 456, 999]);

			unsub();
		});
	});

	it('handles duplicate stores with the same key', () => {
		const store1 = localStorageStore('same-key', 1);
		const values1: number[] = [];

		const unsub1 = store1.subscribe((value) => {
			values1.push(value);
		});

		store1.set(2);

		const store2 = localStorageStore('same-key', 99);
		const values2: number[] = [];

		const unsub2 = store2.subscribe((value) => {
			values2.push(value);
		});

		store1.set(3);
		store2.set(4);

		expect(values1).toEqual([1, 2, 3, 4]);
		expect(values2).toEqual([2, 3, 4]);
		expect(get(store1)).toEqual(get(store2));

		expect(store1).toEqual(store2);

		unsub1();
		unsub2();
	});

	describe('handles window.storage event', () => {
		type NumberDict = { [key: string]: number };

		it('sets storage when key matches', () => {
			const store = localStorageStore('myKey8', { a: 1 });
			const values: NumberDict[] = [];

			const unsub = store.subscribe((value: NumberDict) => {
				values.push(value);
			});

			const event = new StorageEvent('storage', { key: 'myKey8', newValue: '{"a": 1, "b": 2}' });
			window.dispatchEvent(event);

			expect(values).toEqual([{ a: 1 }, { a: 1, b: 2 }]);

			unsub();
		});

		it('sets store to null when value is null', () => {
			const store = localStorageStore('myKey9', { a: 1 });
			const values: NumberDict[] = [];

			const unsub = store.subscribe((value: NumberDict) => {
				values.push(value);
			});

			const event = new StorageEvent('storage', { key: 'myKey9', newValue: null });
			window.dispatchEvent(event);

			expect(values).toEqual([{ a: 1 }, null]);

			unsub();
		});

		it("doesn't update store when key doesn't match", () => {
			const store = localStorageStore('myKey10', 1);
			const values: number[] = [];

			const unsub = store.subscribe((value: number) => {
				values.push(value);
			});

			const event = new StorageEvent('storage', { key: 'unknownKey', newValue: '2' });
			window.dispatchEvent(event);

			expect(values).toEqual([1]);

			unsub();
		});

		it("doesn't update store when there are no subscribers", () => {
			const store = localStorageStore('myKey', 1);
			const values: number[] = [];

			const event = new StorageEvent('storage', { key: 'myKey', newValue: '2' });
			window.dispatchEvent(event);
			localStorage.setItem('myKey', '2');

			const unsub = store.subscribe((value: number) => {
				values.push(value);
			});

			expect(values).toEqual([2]);

			unsub();
		});
	});

	it('allows custom serialize/deserialize functions', () => {
		const serializer = {
			stringify: (set: Set<number>) => JSON.stringify(Array.from(set)),
			parse: (json: string) => new Set(JSON.parse(json))
		};

		const itSet = new Set([1, 2, 3]);

		const store = localStorageStore('myKey11', itSet, { serializer });
		const value = get(store);

		store.update((d) => d.add(4));

		expect(value).toEqual(itSet);
		expect(localStorage.myKey11).toEqual(serializer.stringify(itSet));
	});

	// FIXME: need to replace the `jest` syntax here
	// it('lets you switch storage type', () => {
	// 	jest.spyOn(Object.getPrototypeOf(window.sessionStorage), 'setItem');
	// 	Object.setPrototypeOf(window.sessionStorage.setItem, jest.fn());

	// 	const value = 'foo';

	// 	const store = localStorageStore('myKey12', value, {
	// 		storage: 'session'
	// 	});

	// 	store.set('bar');

	// 	expect(window.sessionStorage.setItem).toHaveBeenCalled();
	// });
});
