import { type CollectionItem, type CollectionOptions, ListCollection } from '@zag-js/collection';

export function useListCollection<T extends CollectionItem = CollectionItem>(options: CollectionOptions<T>) {
	return new ListCollection(options);
}
